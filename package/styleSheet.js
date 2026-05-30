const styleCache = new Set();
let runtimeStylesheet = null;

export function fetchStyleSheet() {
    if (!runtimeStylesheet) {
        runtimeStylesheet = document.createElement("style");
        runtimeStylesheet.id = "live-atom-runtime";
        document.head.appendChild(runtimeStylesheet);
    }
    return runtimeStylesheet;
}

export function injectCSSRule(cssString) {
    const stylesheet = fetchStyleSheet();
    // Use the CSSOM for high-performance rule insertion if available
    if (stylesheet.sheet) {
        try {
            stylesheet.sheet.insertRule(cssString, stylesheet.sheet.cssRules.length);
        } catch (e) {
            console.warn(`LiveAtom: Failed to parse rule - ${cssString}`);
        }
    } else {
        // Fallback for immediate DOM execution contexts
        stylesheet.appendChild(document.createTextNode(cssString));
    }
}

export { styleCache };
