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

function getClosestBaseColor(hue) {
    if (hue >= 0 && hue < 30) return "#FF0000";
    if (hue >= 30 && hue < 60) return "#FF9933";
    if (hue >= 60 && hue < 120) return "#FFFF00";
    if (hue >= 120 && hue < 240) return "#009900";
    if (hue >= 240 && hue < 270) return "#0000FF";
    if (hue >= 270) return "#6600CC";
    return null;
}

const correctColorOrder = (uniqueBaseColors) => {
    const correctOrder = ["#FF0000", "#FF9933", "#FFFF00", "#009900", "#0000FF", "#6600CC"];

    // let currentIndex = 0;

    // for (const color of uniqueBaseColors) {
    //     const colorIndex = correctOrder.indexOf(color);

    //     if (colorIndex === -1 || colorIndex < currentIndex) {
    //         console.log(`Test failed: Color ${color} is not in the correct order.`);
    //         return false;
    //     }

    //     currentIndex = colorIndex;
    // }

    // console.log("Test passed: Colors are in the correct order.");
    // return true;

    const correctOrderCombo = correctOrder.join('');
    let uniqueBaseColorsCombo = uniqueBaseColors.join('');
    uniqueBaseColorsCombo += uniqueBaseColorsCombo;
    console.log(correctOrderCombo);
    console.log(uniqueBaseColorsCombo);
    return uniqueBaseColorsCombo.includes(correctOrderCombo);
};

const findMaxMatches = (hexArray) => {
    // Create a map of hex codes to their column index in the reference array
    const colorToColumn = {};
    for (let col = 0; col < colors1[0].length; col++) {
        for (let row = 0; row < colors1.length; row++) {
            colorToColumn[colors1[row][col].toLowerCase()] = col;
        }
    }

    // Create a count of how many hex codes from hexArray are in each column
    const columnCount = new Array(colors1[0].length).fill(0);
    for (const hex of hexArray) {
        const columnIndex = colorToColumn[hex.toLowerCase()];
        if (columnIndex !== undefined) {
            columnCount[columnIndex]++;
        }
    }

    // Return the maximum number of hex codes found in the same column
    return Math.max(...columnCount);
};

// Grading function
const gradeColors = (colorArray) => {
    const baseColors = colorArray.map(hex => {
        const hue = hexToHSL(hex).h; // Convert hex to hue
        return getClosestBaseColor(hue); // Find the closest base color
    });

    const uniqueBaseColors = [...new Set(baseColors)];
    console.log("uniqueBaseColors inside gradeColors function", uniqueBaseColors)
    if (uniqueBaseColors.length < 6 || !correctColorOrder(colorArray)) {

        if (uniqueBaseColors.length < 6) console.log("all 6 colors not present")
        else console.log("incorrect order")
        return -1;

    }
    correctColorOrder(uniqueBaseColors)

    return 100 - (12 - findMaxMatches(colorArray)) * 8.4;
};







export { containsWhite, hasNoDuplicates, gradeColors };
