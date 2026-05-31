const colorPalette = {
    red: {
        50: "#fef2f2",
        100: "#ffe2e2",
        200: "#ffc9c9",
        300: "#ffa2a2",
        400: "#ff6467",
        500: "#fb2c36",
        600: "#e7000b",
        700: "#c10007",
        800: "#9f0712",
        900: "#82181a",
        950: "#460809",
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd4",
        200: "#ffd6a8",
        300: "#ffb86a",
        400: "#ff8904",
        500: "#ff6900",
        600: "#f54900",
        700: "#ca3500",
        800: "#9f2d00",
        900: "#7e2a0c",
        950: "#441306",
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c2",
        200: "#fff085",
        300: "#ffdf20",
        400: "#fdc700",
        500: "#f0b100",
        600: "#d08700",
        700: "#a65f00",
        800: "#894b00",
        900: "#733e0a",
        950: "#432004",
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#b9f8cf",
        300: "#7bf1a8",
        400: "#05df72",
        500: "#00c950",
        600: "#00a63e",
        700: "#008236",
        800: "#016630",
        900: "#0d542b",
        950: "#032e15",
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bedbff",
        300: "#8ec5ff",
        400: "#51a2ff",
        500: "#2b7fff",
        600: "#155dfc",
        700: "#1447e6",
        800: "#193cb8",
        900: "#1c398e",
        950: "#162456",
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d4ff",
        300: "#dab2ff",
        400: "#c27aff",
        500: "#ad46ff",
        600: "#9810fa",
        700: "#8200db",
        800: "#6e11b0",
        900: "#59168b",
        950: "#3c0366",
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fccee8",
        300: "#fda5d5",
        400: "#fb64b6",
        500: "#f6339a",
        600: "#e60076",
        700: "#c6005c",
        800: "#a3004c",
        900: "#861043",
        950: "#510424",
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5dc",
        400: "#99a1af",
        500: "#6a7282",
        600: "#4a5565",
        700: "#364153",
        800: "#1e2939",
        900: "#101828",
        950: "#030712",
    },
};

const grammarRules = [
    //#region Spacing
    { match: /^atom-p-(\d+)$/, action: ([, val]) => ({ padding: `${val * 4}px` }) },
    {
        match: /^atom-px-(\d+)$/,
        action: ([, val]) => ({ "padding-left": `${val * 4}px`, "padding-right": `${val * 4}px` }),
    },
    {
        match: /^atom-py-(\d+)$/,
        action: ([, val]) => ({ "padding-top": `${val * 4}px`, "padding-bottom": `${val * 4}px` }),
    },
    { match: /^atom-pt-(\d+)$/, action: ([, val]) => ({ "padding-top": `${val * 4}px` }) },
    { match: /^atom-pr-(\d+)$/, action: ([, val]) => ({ "padding-right": `${val * 4}px` }) },
    { match: /^atom-pb-(\d+)$/, action: ([, val]) => ({ "padding-bottom": `${val * 4}px` }) },
    { match: /^atom-pl-(\d+)$/, action: ([, val]) => ({ "padding-left": `${val * 4}px` }) },

    { match: /^atom-m-(\d+)$/, action: ([, val]) => ({ margin: `${val * 4}px` }) },
    {
        match: /^atom-mx-(\d+)$/,
        action: ([, val]) => ({ "margin-left": `${val * 4}px`, "margin-right": `${val * 4}px` }),
    },
    {
        match: /^atom-my-(\d+)$/,
        action: ([, val]) => ({ "margin-top": `${val * 4}px`, "margin-bottom": `${val * 4}px` }),
    },
    { match: /^atom-mt-(\d+)$/, action: ([, val]) => ({ "margin-top": `${val * 4}px` }) },
    { match: /^atom-mr-(\d+)$/, action: ([, val]) => ({ "margin-right": `${val * 4}px` }) },
    { match: /^atom-mb-(\d+)$/, action: ([, val]) => ({ "margin-bottom": `${val * 4}px` }) },
    { match: /^atom-ml-(\d+)$/, action: ([, val]) => ({ "margin-left": `${val * 4}px` }) },
    //#endRegion

    //#region Sizing
    { match: /^atom-w-(\d+)$/, action: ([, val]) => ({ width: `${val * 4}px` }) },
    { match: /^atom-w-\[(.+)\]$/, action: ([, val]) => ({ width: val }) },
    { match: /^atom-h-(\d+)$/, action: ([, val]) => ({ height: `${val * 4}px` }) },
    { match: /^atom-h-\[(.+)\]$/, action: ([, val]) => ({ height: val }) },
    { match: /^atom-max-w-(\d+)$/, action: ([, val]) => ({ "max-width": `${val * 4}px` }) },
    { match: /^atom-max-w-\[(.+)\]$/, action: ([, val]) => ({ "max-width": val }) },
    { match: /^atom-max-h-(\d+)$/, action: ([, val]) => ({ "max-height": `${val * 4}px` }) },
    { match: /^atom-max-h-\[(.+)\]$/, action: ([, val]) => ({ "max-height": val }) },
    { match: /^atom-min-w-(\d+)$/, action: ([, val]) => ({ "min-width": `${val * 4}px` }) },
    { match: /^atom-min-w-\[(.+)\]$/, action: ([, val]) => ({ "min-width": val }) },
    { match: /^atom-min-h-(\d+)$/, action: ([, val]) => ({ "min-height": `${val * 4}px` }) },
    { match: /^atom-min-h-\[(.+)\]$/, action: ([, val]) => ({ "min-height": val }) },
    //#endRegion

    //#region Colors & Typography
    {
        match: /^atom-(text|bg)-(black|white)$/,
        action: ([, type, color]) => {
            const hexCode = color === "black" ? "#000000" : "#ffffff";
            return type === "text" ? { color: hexCode } : { "background-color": hexCode };
        },
    },
    {
        match: /^atom-text-([a-z]+)-(\d{2,3})$/,
        action: ([, color, shade]) => (colorPalette[color]?.[shade] ? { color: colorPalette[color][shade] } : null),
    },
    {
        match: /^atom-bg-([a-z]+)-(\d{2,3})$/,
        action: ([, color, shade]) =>
            colorPalette[color]?.[shade] ? { "background-color": colorPalette[color][shade] } : null,
    },
    {
        match: /^atom-text-\[(.+)\]$/,
        action: ([, val]) => {
            if (/^(#|rgb|hsl|transparent|currentColor)/.test(val)) return { color: val };
            return { "font-size": val };
        },
    },
    { match: /^atom-bg-\[(.+)\]$/, action: ([, val]) => ({ "background-color": val }) },
    { match: /^atom-font-\[(\d+)\]$/, action: ([, val]) => ({ "font-weight": val }) },
    //#endRegion

    //#region Borders & Shadows (New functionality)
    { match: /^atom-border-(\d+)$/, action: ([, val]) => ({ "border-width": `${val}px` }) },
    {
        match: /^atom-border-([a-z]+)-(\d{2,3})$/,
        action: ([, color, shade]) =>
            colorPalette[color]?.[shade] ? { "border-color": colorPalette[color][shade] } : null,
    },
    { match: /^atom-border-\[(.+)\]$/, action: ([, val]) => ({ "border-color": val }) },
    { match: /^atom-rounded-\[(.+)\]$/, action: ([, val]) => ({ "border-radius": val }) },
    //#endRegion

    //#region Layout
    { match: /^atom-gap-(\d+)$/, action: ([, val]) => ({ gap: `${val * 4}px` }) },
    {
        match: /^atom-grid-cols-(\d+)$/,
        action: ([, val]) => ({ "grid-template-columns": `repeat(${val}, minmax(0, 1fr))` }),
    },
    {
        match: /^atom-grid-rows-(\d+)$/,
        action: ([, val]) => ({ "grid-template-rows": `repeat(${val}, minmax(0, 1fr))` }),
    },
    //#endRegion

    //#region Position
    { match: /^atom-top-(\d+)$/, action: ([, val]) => ({ top: `${val * 4}px` }) },
    { match: /^atom-right-(\d+)$/, action: ([, val]) => ({ right: `${val * 4}px` }) },
    { match: /^atom-bottom-(\d+)$/, action: ([, val]) => ({ bottom: `${val * 4}px` }) },
    { match: /^atom-left-(\d+)$/, action: ([, val]) => ({ left: `${val * 4}px` }) },
    { match: /^atom-top-\[(.+)\]$/, action: ([, val]) => ({ top: val }) },
    { match: /^atom-left-\[(.+)\]$/, action: ([, val]) => ({ left: val }) },
    { match: /^atom-right-\[(.+)\]$/, action: ([, val]) => ({ right: val }) },
    { match: /^atom-bottom-\[(.+)\]$/, action: ([, val]) => ({ bottom: val }) },
    { match: /^atom-z-(\d+)$/, action: ([, val]) => ({ "z-index": val }) },
    { match: /^atom-z-\[(.+)\]$/, action: ([, val]) => ({ "z-index": val }) },
    //#endRegion

    //#region Transitions (New functionality)
    { match: /^atom-duration-(\d+)$/, action: ([, val]) => ({ "transition-duration": `${val}ms` }) },
    //#endRegion
];

export default function parseDynamic(className) {
    for (const rule of grammarRules) {
        const matchData = className.match(rule.match);
        if (matchData) return rule.action(matchData);
    }
    return null;
}
