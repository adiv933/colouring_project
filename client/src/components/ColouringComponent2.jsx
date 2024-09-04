/* eslint-disable react/prop-types */
import { useState } from "react";
import DesignCanvas from "./DesignCanvas";
import ColourTester from "./ColourTester";
import ColourWheel from "./ColourWheel";

const ColouringComponent2 = () => {
  const [color, setColor] = useState("#fff");

  const handleColorSelect = (color) => {
    setColor(color);
  };

  const colors = [
    ["#ff5e4d", "#ff4031", "#ff0000", "#de0000", "#be0000"],
    ["#f9644d", "#ff4a32", "#ff2200", "#de1c00", "#be1600"],
    ["#fe7350", "#ff5e34", "#ff4400", "#de3a00", "#be3000"],
    ["#fa8651", "#ff7837", "#ff6600", "#de5800", "#be4a00"],
    ["#f7935a", "#ff863d", "#ff7711", "#de670d", "#be5709"],
    ["#ffaf68", "#ffa450", "#ff9933", "#de842b", "#be7023"],
    ["#ffbc63", "#ffb349", "#ffaa22", "#de931c", "#be7d16"],
    ["#ffca61", "#ffc245", "#ffbb11", "#dea205", "#be8a09"],
    ["#f9c660", "#ffc245", "#ffcc00", "#dea20d", "#be8a09"],
    ["#fde464", "#ffe146", "#ffdd00", "#dec000", "#bea400"],
    ["#f4e96d", "#fff048", "#ffee00", "#decf00", "#beb100"],
    ["#feff6b", "#ffff4b", "#ffff00", "#dede00", "#bebe00"],
    ["#bbf364", "#b2f045", "#aaee00", "#93cf00", "#7db100"],
    ["#9ae980", "#6be140", "#55dd00", "#49c000", "#3da400"],
    ["#5acb53", "#42d23c", "#00cc00", "#00b100", "#009700"],
    ["#5ac854", "#3ec338", "#00bb00", "#00a200", "#008a00"],
    ["#57bc51", "#3ab335", "#00aa00", "#009300", "#007d00"],
    ["#53ae4d", "#32982e", "#009900", "#008400", "#007000"],
    ["#57b86a", "#3bb358", "#00aa44", "#00933a", "#007000"],
    ["#5ec99f", "#40c293", "#00bb88", "#00a275", "#008a63"],
    ["#63cac9", "#45d1d1", "#00cbcb", "#00b1b1", "#009797"],
    ["#4a92d0", "#3595e1", "#0088dd", "#0075c0", "#0063a4"],
    ["#3972f5", "#1f5df2", "#0044ee", "#003acf", "#0030b1"],
    ["#2360fc", "#0541ff", "#0000ff", "#0000de", "#0000be"],
    ["#2c59e9", "#193be3", "#1100dd", "#0d00c0", "#0900a4"],
    ["#3c51cd", "#2c35c4", "#2200bb", "#1c00a2", "#16008a"],
    ["#5048b1", "#382790", "#330099", "#2b0084", "#230070"],
    ["#604bbf", "#5130b5", "#5130b5", "#3a0093", "#30007d"],
    ["#6d4dc6", "#6233c4", "#5500bb", "#4900a2", "#3d008a"],
    ["#7e51d8", "#7035d0", "#6600cc", "#5800b1", "#4a0097"],
    ["#7d51d6", "#7236d3", "#6600cc", "#5800b1", "#4a0097"],
    ["#8c53d2", "#8336d3", "#7700cc", "#6700b1", "#570097"],
    ["#9f53d9", "#9337d3", "#8800cc", "#7500b1", "#630097"],
    ["#9a4ebd", "#a437d3", "#9900cc", "#8400b1", "#4e0169"],
    ["#cb519d", "#c53594", "#bb0088", "#a20075", "#8a0063"],
    ["#e65768", "#e43a56", "#b12c55", "#c0003a", "#a40030"],
  ];
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-6 w-full justify-center items-center">
      <ColourTester color={color} />

      <DesignCanvas color={color} />
      <div className="flex-col order-1 lg:order-3 w-fit flex items-center justify-center bg-white rounded-lg">
        <ColourWheel colors={colors} onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
};

export default ColouringComponent2;
