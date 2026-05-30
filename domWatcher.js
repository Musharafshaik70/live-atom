import { computeAndInjectStyles } from "./styleManager.js";

export function scanDom(node) {
    // Process root node
    if (node.nodeType === 1 && node.classList?.length) {
        const hasAtomClass = [...node.classList].some((cls) => cls.includes("atom-"));
        if (hasAtomClass) computeAndInjectStyles(node);
    }

    // Process all children
    if (node.querySelectorAll) {
        const descendantNodes = node.querySelectorAll('[class*="atom-"]');
        descendantNodes.forEach(computeAndInjectStyles);
    }
}

export function watchDOMMutations() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // Handle new node additions
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) scanDom(node);
                });
            }
            // Handle dynamic class manipulation
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                computeAndInjectStyles(mutation.target);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    });
}
