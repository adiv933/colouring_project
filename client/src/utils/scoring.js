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
    const majorColors = [
        "#FF0000", // Red
        "#FF9933", // Orange
        "#FFFF00", // Yellow
        "#009900", // Green
        "#0000FF", // Blue
        "#6600CC", // Purple
    ];
    let score = 100;
    let majorColorIndex = 0;

    for (let i = 0; i < colorArray.length; i++) {
        const userColor = colorArray[i];
        const expectedColor = majorColors[majorColorIndex];

        if (isShadeOrTint(userColor, expectedColor)) {
            // Move to the next major color if this one matches
            majorColorIndex++;
            if (majorColorIndex >= majorColors.length) break; // All major colors matched
        } else {
            // Deduct 8.4 points if the color doesn't match the expected shade/tint
            score -= 8.4;
        }
    }

    return score;
};




export { haveSameRelativeShade, haveSameRelativeTint, containsWhite, hasNoDuplicates, countColorsInCategories, isShadeOrTint, gradeColors };
