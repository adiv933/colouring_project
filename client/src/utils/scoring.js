const colors1 = [
    ["#ff5e4d", "#ff4031", "#ff0000", "#de0000", "#be0000"],
    ["#ff6b4e", "#ff5333", "#ff3300", "#de2b00", "#be2300"],
    ["#ff8953", "#ff7837", "#ff6600", "#de5800", "#be4a00"],
    ["#ff9d5b", "#ff8f41", "#ff8119", "#de6f14", "#be5e10"],
    ["#ffaf68", "#ffa450", "#ff9933", "#de842b", "#be7023"],
    ["#ffc061", "#ffb846", "#ffaf19", "#de9814", "#be8110"],
    ["#ffd762", "#ffd243", "#ffcc00", "#deb100", "#be9700"],
    ["#ffd265", "#ffcc48", "#ffc619", "#deac14", "#be9210"],
    ["#feff6b", "#ffff4b", "#ffff00", "#dede00", "#bebe00"],
    ["#93ec60", "#83e942", "#73e600", "#63c800", "#54ab00"],
    ["#60d859", "#42d23c", "#00cc00", "#00b100", "#009700"],
    ["#59c353", "#3cba37", "#00b200", "#009a00", "#008300"],
    ["#53ae4d", "#36a432", "#009900", "#008400", "#007000"],
    ["#5ac27b", "#3dba6a", "#00b259", "#009a4c", "#008340"],
    ["#63d7d6", "#45d1d1", "#00cccc", "#00b1b1", "#009797"],
    ["#4a91ee", "#2f82ea", "#0073e6", "#0063c8", "#0054ab"],
    ["#2260ff", "#0541ff", "#0000ff", "#0000de", "#0000be"],
    ["#3b54db", "#2b38d4", "#2200cc", "#1c00b1", "#160097"],
    ["#5048b1", "#402da5", "#330099", "#2b0084", "#230070"],
    ["#664dc6", "#5832bd", "#4b00b3", "#40009b", "#350084"],
    ["#7f52da", "#7236d3", "#6600cc", "#5800b1", "#4a0097"],
    ["#9852da", "#8d36d3", "#8100cc", "#6f00b1", "#5e0097"],
    ["#ae54d9", "#a437d3", "#9900cc", "#8400b1", "#700097"],
    ["#f159a4", "#ec3c99", "#e6008e", "#c8007b", "#ab0068"],
];

function hexToHSL(hex) {
    // Convert hex to RGB first
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    // Find min and max values to get luminance
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

function getRelativeTint(hsl) {
    const baseLightness = 50; // Assuming 50% lightness is the base for pure hues
    return hsl.l - baseLightness; // Calculate the relative tint
}

function haveSameRelativeTint(colors) {
    // Convert colors from hex to HSL
    const hslColors = colors.map(hex => hexToHSL(hex));

    // Calculate relative tints
    const relativeTints = hslColors.map(hsl => getRelativeTint(hsl));

    // Use the first tint as reference
    const firstRelativeTint = relativeTints[0];

    // Check if all relative tints are the same (with a small tolerance)
    return relativeTints.every(tint => Math.abs(tint - firstRelativeTint) < 5);
}

function getRelativeShade(hsl) {
    const baseLightness = 50; // Assuming 50% lightness is the base for pure hues
    return baseLightness - hsl.l; // Calculate the relative shade
}

function haveSameRelativeShade(colors) {
    // Convert colors from hex to HSL
    const hslColors = colors.map(hex => hexToHSL(hex));

    // Calculate relative shades
    const relativeShades = hslColors.map(hsl => getRelativeShade(hsl));

    // Use the first shade as reference
    const firstRelativeShade = relativeShades[0];

    // Check if all relative shades are the same (with a small tolerance)
    return relativeShades.every(shade => Math.abs(shade - firstRelativeShade) < 5);
}

function hasNoDuplicates(colors) {
    // Create a Set to store unique colors
    const colorSet = new Set();

    // Iterate through the array of colors
    for (const color of colors) {
        // Check if the color is already in the Set
        if (colorSet.has(color)) {
            // If found, return false indicating a duplicate
            return false;
        }
        // Add the color to the Set
        colorSet.add(color);
    }

    // Return true if no duplicates are found
    return true;
}

function containsWhite(colors) {
    // Define the hex code for white
    const whiteHex1 = "#FFFFFF";
    const whiteHex2 = "#FFF";

    // Iterate through the array of colors
    for (const color of colors) {
        // Check if the color is white
        if (color.toUpperCase() === whiteHex1 || color.toUpperCase() === whiteHex2) {
            // If found, return true indicating a white color is present
            return true;
        }
    }

    // Return false if no white color is found
    return false;
}


// Helper function to calculate color distance (simplified)
const colorDistance = (color1, color2) => {
    const [r1, g1, b1] = color1.match(/\w\w/g).map((c) => parseInt(c, 16));
    const [r2, g2, b2] = color2.match(/\w\w/g).map((c) => parseInt(c, 16));
    return Math.sqrt((r2 - r1) ** 2 + (g2 - g1) ** 2 + (b2 - b1) ** 2);
};

// Helper function to check if a color is a shade/tint of a major color
const isShadeOrTint = (color, majorColor) => {
    const threshold = 50; // Adjust as necessary
    return colorDistance(color, majorColor) < threshold;
};

function getClosestBaseColor(hue) {
    const baseColors = {
        "#FF0000": 0,
        "#FF9933": 30,
        "#FFFF00": 60,
        "#009900": 120,
        "#0000FF": 240,
        "#6600CC": 270
    };

    let closestColor = null;
    let smallestDifference = Infinity;

    for (const [color, baseHue] of Object.entries(baseColors)) {
        let hueDifference = Math.abs(hue - baseHue);
        hueDifference = Math.min(hueDifference, 360 - hueDifference);
        if (hueDifference < smallestDifference) {
            smallestDifference = hueDifference;
            closestColor = color;
        }
    }

    return closestColor;
}

function countColorsInCategories(colors) {
    const categoryCounts = {
        "#FF0000": 0,
        "#FF9933": 0,
        "#FFFF00": 0,
        "#009900": 0,
        "#0000FF": 0,
        "#6600CC": 0
    };

    colors.forEach(color => {
        const baseColor = getClosestBaseColor(hexToHSL(color).h);
        if (baseColor) {
            categoryCounts[baseColor]++;
        }
    });

    let extraColors = 0;
    let valid = true;

    for (const count of Object.values(categoryCounts)) {
        if (count > 2) {
            extraColors += count - 2;
        } else if (count < 2) {
            valid = false;
        }
    }

    return valid ? 0 : extraColors;
}

// Grading function
const gradeColors = (colorArray) => {
    
};







export { haveSameRelativeShade, haveSameRelativeTint, containsWhite, hasNoDuplicates, countColorsInCategories, isShadeOrTint, gradeColors };
