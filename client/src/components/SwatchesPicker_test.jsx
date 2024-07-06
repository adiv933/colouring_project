/* eslint-disable react/prop-types */
import { SwatchesPicker } from "react-color";

const SwatchesPicker_test = ({ color, onChangeComplete }) => {
  const colors = [
    ["#5047b0", "#402ca4", "#330099", "#2b0084", "#22006f"],
    ["#ff6b4e", "#ff5233", "#ff3300", "#de2b00", "#bd2200"],
    ["#f058a3", "#eb3b99", "#e6008e", "#c7007a", "#ab0068"],
    ["#ff9d5b", "#ff8f41", "#ff8118", "#de6e13", "#bd5e0f"],
    ["#62d6d5", "#45d1d1", "#00cccc", "#00b0b0", "#009696"],
    ["#ffc060", "#ffb846", "#ffae18", "#de9713", "#bd810f"],
    ["#5fd758", "#42d23b", "#00cc00", "#00b000", "#009600"],
    ["#ffd264", "#ffcc47", "#ffc518", "#deac13", "#bd920f"],
    ["#ff8852", "#ff7837", "#ff6600", "#de5700", "#bd4900"],
    ["#92eb5f", "#83e942", "#73e600", "#62c700", "#53ab00"],
    ["#5ac27a", "#3cb96a", "#00b158", "#009a4b", "#008340"],
    ["#ffae68", "#ffa350", "#ff9933", "#de842b", "#bd6f22"],
    ["#52ac4b", "#36a130", "#009600", "#008300", "#006e00"],
    ["#ffd661", "#ffd243", "#ffcc00", "#deb000", "#bd9600"],
    ["#9752da", "#8d36d2", "#8100cc", "#6e00b0", "#5e0096"],
    ["#4991ed", "#2e82ea", "#2e82ea", "#0062c7", "#0053ab"],
    ["#ff5e4d", "#ff4030", "#ff4030", "#de0000", "#bd0000"],
    ["#3a53db", "#2b38d3", "#2b38d3", "#1c00b0", "#160096"],
    ["#58c352", "#3bb937", "#3bb937", "#009a00", "#008300"],
    ["#664dc5", "#5731bc", "#5731bc", "#40009b", "#350084"],
    ["#7e52da", "#7136d2", "#7136d2", "#5700b0", "#490096"],
    ["#fdff6b", "#ffff4a", "#ffff00", "#dede00", "#bdbd00"],
    ["#ad53d9", "#a337d2", "#9900cc", "#8400b0", "#6f0096"],
    ["#215fff", "#0441ff", "#0000ff", "#0000de", "#0000bd"],
  ];

  return (
    <div className="w-full h-full">
      <SwatchesPicker
        color={color}
        colors={colors}
        height="700px"
        width="340px"
        onChangeComplete={onChangeComplete}
      />
    </div>
  );
};

export default SwatchesPicker_test;