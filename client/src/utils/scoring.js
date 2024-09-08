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

const colors2 = [
    [
        "#f85d4d",
        "#ff4031",
        "#ff0000",
        "#de0000",
        "#be0000"
    ],
    [
        "#ff654e",
        "#ff4a32",
        "#ff2200",
        "#de1c00",
        "#be1600"
    ],
    [
        "#fd7350",
        "#ff5e34",
        "#ff4400",
        "#de3a00",
        "#be3000"
    ],
    [
        "#fe8953",
        "#ff7837",
        "#ff6600",
        "#de5800",
        "#be4a00"
    ],
    [
        "#f7965d",
        "#fe863d",
        "#ff7711",
        "#de670d",
        "#be5709"
    ],
    [
        "#f29c5d",
        "#ff9545",
        "#ff8822",
        "#de751c",
        "#be6316"
    ],
    [
        "#f5b276",
        "#ffa450",
        "#ff9933",
        "#de842b",
        "#be7023"
    ],
    [
        "#fbbf6f",
        "#ffb349",
        "#ffaa22",
        "#de931c",
        "#be7d16"
    ],
    [
        "#edbd5e",
        "#ffc245",
        "#ffbb11",
        "#dea20d",
        "#be8a09"
    ],
    [
        "#eec063",
        "#f8bc43",
        "#ffcc00",
        "#bea800",
        "#bea000",
    ],
    [
        "#f8de63",
        "#ffe146",
        "#ffdd00",
        "#dec000",
        "#bea400"
    ],
    [
        "#f5e966",
        "#fff048",
        "#ffee00",
        "#decf00",
        "#beb100"
    ],
    [
        "#fdfe6b",
        "#f4f448",
        "#ffff00",
        "#dede00",
        "#bebe00"
    ],
    [
        "#b9ed67",
        "#b2f045",
        "#aaee00",
        "#93cf00",
        "#7db100"
    ],
    [
        "#7de15c",
        "#6be140",
        "#55dd00",
        "#49c000",
        "#3da400"
    ],
    [
        "#7ede78",
        "#42d23c",
        "#00cc00",
        "#00b100",
        "#009700"
    ],
    [
        "#5bca55",
        "#3bba35",
        "#00bb00",
        "#00a200",
        "#008a00"
    ],
    [
        "#57bb51",
        "#3ab335",
        "#00aa00",
        "#009300",
        "#007d00"
    ],
    [
        "#53ae4d",
        "#36a432",
        "#009900",
        "#008400",
        "#007000"
    ],
    [
        "#58bc6c",
        "#3bb358",
        "#00aa44",
        "#00933a",
        "#006700"
    ],
    [
        "#6dc4a1",
        "#29ad90",
        "#00bb88",
        "#00a275",
        "#008a63"
    ],
    [
        "#62cfce",
        "#45d1d1",
        "#00cccc",
        "#00b1b1",
        "#009797"
    ],
    [
        "#4e97d5",
        "#3595e1",
        "#0088dd",
        "#0075c0",
        "#0063a4"
    ],
    [
        "#3871f3",
        "#1f5df2",
        "#0044ee",
        "#003acf",
        "#0030b1"
    ],
    [
        "#2260ff",
        "#0541ff",
        "#0000ff",
        "#0000de",
        "#0000be"
    ],
    [
        "#2c59e8",
        "#193be3",
        "#1100dd",
        "#0d00c0",
        "#0900a4"
    ],
    [
        "#3c51cd",
        "#2c35c4",
        "#2200bb",
        "#1c00a2",
        "#16008a"
    ],
    [
        "#5048b1",
        "#402da5",
        "#330099",
        "#2b0084",
        "#230070"
    ],
    [
        "#604bbf",
        "#5130b5",
        "#4d2eab",
        "#3a0093",
        "#30007d"
    ],
    [
        "#704fcc",
        "#6233c4",
        "#5500bb",
        "#4900a2",
        "#3d008a"
    ],
    [
        "#7952c7",
        "#6e34cc",
        "#6600cc",
        "#5800b1",
        "#4a0097"
    ],
    [
        "#8e52d9",
        "#8336d3",
        "#7700cc",
        "#6700b1",
        "#570097"
    ],
    [
        "#9e53d8",
        "#9337d3",
        "#8800cc",
        "#7500b1",
        "#630097"
    ],
    [
        "#aa55d3",
        "#a437d3",
        "#9900cc",
        "#8400b1",
        "#700097"
    ],
    [
        "#ca509c",
        "#c53594",
        "#b60084",
        "#a20075",
        "#8a0063"
    ],
    [
        "#eb5768",
        "#e43a56",
        "#dd0044",
        "#c0003a",
        "#a40030"
    ]
]

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

function findRowIn2DMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].indexOf(target) !== -1) {
            return i; // Return the row index
        }
    }
    return -1; // Return -1 if the element is not found
}

function getClosestBaseColor(hexCode, num) {
    if (num === 1) {
        const rowNum = findRowIn2DMatrix(colors1, hexCode)
        if (rowNum >= 0 && rowNum < 4) return "#FF0000";
        if (rowNum >= 4 && rowNum < 8) return "#FF9933";
        if (rowNum >= 8 && rowNum < 12) return "#FFFF00";
        if (rowNum >= 12 && rowNum < 16) return "#009900";
        if (rowNum >= 16 && rowNum < 20) return "#0000FF";
        if (rowNum >= 20) return "#6600CC";
    }
    else {
        const rowNum = findRowIn2DMatrix(colors2, hexCode)
        if (rowNum >= 0 && rowNum < 6) return "#FF0000";
        if (rowNum >= 6 && rowNum < 12) return "#FF9933";
        if (rowNum >= 12 && rowNum < 18) return "#FFFF00";
        if (rowNum >= 18 && rowNum < 24) return "#009900";
        if (rowNum >= 24 && rowNum < 30) return "#0000FF";
        if (rowNum >= 30) return "#6600CC";

    }
    return null;
}

const correctColorOrder = (baseColors, num) => {

    function isSortedOrRotatedSorted(arr) {
        const n = arr.length;
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[(i + 1) % n]) {
                count++;
            }
        }

        return count <= 1;
    }

    function orderPersistent(baseColors, num) {

        function convertColorsToClosestBase(hexColors) {
            return hexColors.map(hex => {
                return getClosestBaseColor(hex, num);
            });
        }

        const orderedColorsString = "#FF0000#FF0000#FF9933#FF9933#FFFF00#FFFF00#009900#009900#0000FF#0000FF#6600CC#6600CC";
        let closestBaseColors = convertColorsToClosestBase(baseColors);
        let closestBaseColorsString = ""
        for (let color of closestBaseColors) {
            closestBaseColorsString += color
        }
        closestBaseColorsString += closestBaseColorsString;
        console.log('closestBaseColorsString', closestBaseColorsString)
        console.log('closestBaseColorsString.includes(orderedColorsString)', closestBaseColorsString.includes(orderedColorsString))
        return closestBaseColorsString.includes(orderedColorsString);
    }

    let colorRows = [];
    if (num === 1) {
        for (let color of baseColors)
            colorRows.push(findRowIn2DMatrix(colors1, color))
    }
    else {
        for (let color of baseColors)
            colorRows.push(findRowIn2DMatrix(colors2, color))
    }

    console.log('isSortedOrRotatedSorted(colorRows)', isSortedOrRotatedSorted(colorRows))
    console.log('colorRows', colorRows)

    return isSortedOrRotatedSorted(colorRows) && orderPersistent(baseColors, num);
}

const findMaxMatches = (hexArray, matrix) => {
    const colorToColumn = {};
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            colorToColumn[matrix[row][col].toLowerCase()] = col;
        }
    }

    const columnCount = new Array(matrix[0].length).fill(0);
    for (const hex of hexArray) {
        const columnIndex = colorToColumn[hex.toLowerCase()];
        if (columnIndex !== undefined) {
            columnCount[columnIndex]++;
        }
    }

    return Math.max(...columnCount);
};

const containsPrimaries = (colorArray) => {

    function hasPrimary(colorArray, index) {
        let count_hasPrimary = 0;
        for (let color of colors1[index]) {
            if (colorArray.indexOf(color) != -1) {
                count_hasPrimary++;
            }
        }
        return count_hasPrimary;
    }


    let count = 0;

    for (let i = 0; i < 24; i += 4) {
        count += hasPrimary(colorArray, i);
    }
    // console.log('count from inside containsPrimaries', count);
    return count >= 6;
}

// Grading function
const gradeColors = (colorArray, num) => {

    if (!containsPrimaries(colorArray)) {
        console.log("all 6 primary colors not present")
        return -1;
    }
    if (!correctColorOrder(colorArray, num)) {
        console.log("incorrect order")
        return -1;
    }
    if (num === 1)
        return 100 - (12 - findMaxMatches(colorArray, colors1)) * 8.4;
    else
        return 100 - (12 - findMaxMatches(colorArray, colors2)) * 8.4;
};

export { colors1, colors2, containsWhite, hasNoDuplicates, gradeColors };
