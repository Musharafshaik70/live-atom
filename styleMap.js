const styleMap = {
    //#region Spacing
    "atom-mx-auto": { "margin-left": "auto", "margin-right": "auto" },
    //#endRegion

    //#region Sizing
    "atom-w-full": { width: "100%" },
    "atom-h-full": { height: "100%" },
    "atom-w-screen": { width: "100vw" },
    "atom-h-screen": { height: "100vh" },
    "atom-h-dvh": { height: "100dvh" },
    "atom-w-dvw": { width: "100dvw" },
    "atom-h-svh": { height: "100svh" },
    "atom-w-svw": { width: "100svw" },
    "atom-h-lvh": { height: "100lvh" },
    "atom-w-lvw": { width: "100lvw" },
    //#endRegion

    //#region Borders
    "atom-border": { "border-width": "1px" },
    "atom-border-solid": { "border-style": "solid" },
    "atom-border-dashed": { "border-style": "dashed" },
    "atom-border-dotted": { "border-style": "dotted" },
    "atom-border-double": { "border-style": "double" },
    "atom-border-none": { "border-style": "none" },
    "atom-rounded-none": { "border-radius": "0px" },
    "atom-rounded-sm": { "border-radius": "4px" },
    "atom-rounded-md": { "border-radius": "6px" },
    "atom-rounded-lg": { "border-radius": "8px" },
    "atom-rounded-xl": { "border-radius": "12px" },
    "atom-rounded-2xl": { "border-radius": "16px" },
    "atom-rounded-3xl": { "border-radius": "24px" },
    "atom-rounded-4xl": { "border-radius": "32px" },
    "atom-rounded-full": { "border-radius": "9999px" },
    //#endRegion

    //#region Typography
    "atom-text-xs": { "font-size": "12px" },
    "atom-text-sm": { "font-size": "14px" },
    "atom-text-base": { "font-size": "16px" },
    "atom-text-lg": { "font-size": "18px" },
    "atom-text-xl": { "font-size": "20px" },
    "atom-text-2xl": { "font-size": "24px" },
    "atom-text-3xl": { "font-size": "30px" },
    "atom-text-4xl": { "font-size": "36px" },
    "atom-text-5xl": { "font-size": "48px" },
    "atom-text-6xl": { "font-size": "60px" },
    "atom-text-7xl": { "font-size": "72px" },
    "atom-text-8xl": { "font-size": "96px" },
    "atom-text-9xl": { "font-size": "128px" },

    "atom-text-left": { "text-align": "left" },
    "atom-text-center": { "text-align": "center" },
    "atom-text-right": { "text-align": "right" },
    "atom-text-justify": { "text-align": "justify" },
    "atom-text-start": { "text-align": "start" },
    "atom-text-end": { "text-align": "end" },

    "atom-font-thin": { "font-weight": "100" },
    "atom-font-extralight": { "font-weight": "200" },
    "atom-font-light": { "font-weight": "300" },
    "atom-font-normal": { "font-weight": "400" },
    "atom-font-medium": { "font-weight": "500" },
    "atom-font-semibold": { "font-weight": "600" },
    "atom-font-bold": { "font-weight": "700" },
    "atom-font-extrabold": { "font-weight": "800" },
    "atom-font-black": { "font-weight": "900" },

    "atom-uppercase": { "text-transform": "uppercase" },
    "atom-lowercase": { "text-transform": "lowercase" },
    "atom-capitalize": { "text-transform": "capitalize" },
    "atom-normal-case": { "text-transform": "none" },

    "atom-underline": { "text-decoration": "underline" },
    "atom-overline": { "text-decoration": "overline" },
    "atom-line-through": { "text-decoration": "line-through" },
    "atom-no-underline": { "text-decoration": "none" },
    //#endRegion

    //#region Display & Layout
    "atom-block": { display: "block" },
    "atom-inline": { display: "inline" },
    "atom-inline-block": { display: "inline-block" },
    "atom-hidden": { display: "none" },

    "atom-flex": { display: "flex" },
    "atom-inline-flex": { display: "inline-flex" },
    "atom-grid": { display: "grid" },
    "atom-inline-grid": { display: "inline-grid" },

    "atom-flex-row": { "flex-direction": "row" },
    "atom-flex-row-reverse": { "flex-direction": "row-reverse" },
    "atom-flex-col": { "flex-direction": "column" },
    "atom-flex-col-reverse": { "flex-direction": "column-reverse" },
    "atom-flex-wrap": { "flex-wrap": "wrap" },
    "atom-flex-nowrap": { "flex-wrap": "nowrap" },
    "atom-flex-wrap-reverse": { "flex-wrap": "wrap-reverse" },

    "atom-items-start": { "align-items": "flex-start" },
    "atom-items-center": { "align-items": "center" },
    "atom-items-end": { "align-items": "flex-end" },
    "atom-items-stretch": { "align-items": "stretch" },
    "atom-items-baseline": { "align-items": "baseline" },

    "atom-justify-start": { "justify-content": "flex-start" },
    "atom-justify-center": { "justify-content": "center" },
    "atom-justify-end": { "justify-content": "flex-end" },
    "atom-justify-between": { "justify-content": "space-between" },
    "atom-justify-around": { "justify-content": "space-around" },
    "atom-justify-evenly": { "justify-content": "space-evenly" },
    //#endRegion

    //#region Cursor
    "atom-cursor-pointer": { cursor: "pointer" },
    "atom-cursor-default": { cursor: "default" },
    "atom-cursor-not-allowed": { cursor: "not-allowed" },
    "atom-cursor-text": { cursor: "text" },
    "atom-cursor-move": { cursor: "move" },
    //#endRegion

    //#region Position
    "atom-static": { position: "static" },
    "atom-relative": { position: "relative" },
    "atom-absolute": { position: "absolute" },
    "atom-fixed": { position: "fixed" },
    "atom-sticky": { position: "sticky" },

    "atom-top-0": { top: "0" },
    "atom-left-0": { left: "0" },
    "atom-right-0": { right: "0" },
    "atom-bottom-0": { bottom: "0" },
    //#endRegion

    //#region Transitions
    "atom-transition-all": {
        "transition-property": "all",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    "atom-transition-colors": {
        "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    "atom-transition-opacity": {
        "transition-property": "opacity",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    },

    "atom-overflow-hidden": { overflow: "hidden" },
    "atom-overflow-auto": { overflow: "auto" },
    "atom-overflow-scroll": { overflow: "scroll" },

    "atom-object-cover": { "object-fit": "cover" },
    "atom-object-contain": { "object-fit": "contain" },

    "atom-whitespace-nowrap": { "white-space": "nowrap" },
    "atom-truncate": { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" },

    "atom-box-border": { "box-sizing": "border-box" },
    "atom-box-content": { "box-sizing": "content-box" },

    "atom-opacity-0": { opacity: "0" },
    "atom-opacity-25": { opacity: "0.25" },
    "atom-opacity-50": { opacity: "0.5" },
    "atom-opacity-75": { opacity: "0.75" },
    "atom-opacity-100": { opacity: "1" },
    //#endRegion
};

export default styleMap;
