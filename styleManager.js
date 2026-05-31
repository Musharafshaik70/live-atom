import styleMap from "./styleMap.js";
import { styleCache, injectCSSRule } from "./styleSheet.js";
import parseDynamic from "./dynamicParser.js";

export function computeAndInjectStyles(element) {
    const classArray = Array.from(element.classList);
    classArray.forEach((fullClassName) => {
        if (styleCache.has(fullClassName)) return;

        let pseudoModifier = "";
        let coreClass = fullClassName;

        if (fullClassName.includes(":")) {
            const parts = fullClassName.split(":");
            coreClass = parts[parts.length - 1];
            pseudoModifier = parts[0];
        }

        if (!coreClass.startsWith("atom-")) return;

        const generatedStyles = classToCss(coreClass);

        if (Object.keys(generatedStyles).length > 0) {
            constructCSSBlock(fullClassName, generatedStyles, pseudoModifier);
            styleCache.add(fullClassName);
        }
    });
}

function constructCSSBlock(originalClassName, styleObject, pseudoModifier) {
    // Escape special characters for valid CSS selectors
    let cssRule = `.${CSS.escape(originalClassName)}`;

    // Append standard pseudo-classes if matched
    if (["hover", "focus", "active", "disabled"].includes(pseudoModifier)) {
        cssRule += `:${pseudoModifier}`;
    }

    cssRule += " { ";
    for (const [property, value] of Object.entries(styleObject)) {
        cssRule += `${property}: ${value}; `;
    }
    cssRule += "} \n";

    injectCSSRule(cssRule);
}

function classToCss(className) {
    // Static match
    if (styleMap[className]) {
        return { ...styleMap[className] };
    }
    // Dynamic match
    const dynamicResult = parseDynamic(className);
    return dynamicResult ? { ...dynamicResult } : {};
}

export function parseCustomRule(customClassName, styleObject) {
    if (!customClassName.startsWith("atom-")) {
        throw new Error(`liveAtom: Custom class "${customClassName}" must start with "atom-"`);
    }

    styleMap[customClassName] = styleObject;

    // Trigger an immediate scan of existing elements to apply the newly added class
    document.querySelectorAll(`[class~="${customClassName}"]`).forEach((node) => {
        computeAndInjectStyles(node);
    });
}
