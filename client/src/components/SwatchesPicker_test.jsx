/* eslint-disable react/prop-types */
import { SwatchesPicker } from "react-color";

const SwatchesPicker_test = ({ color, colors, onChangeComplete }) => {
  return (
    <div className="w-full h-full">
      <SwatchesPicker
        color={color}
        colors={colors}
        // height="700px"
        // width="340px"
        onChangeComplete={onChangeComplete}
        styles={{
          default: {
            picker: {
              width: "100%",
              height: "fit-content",
              boxSizing: "border-box",
            },
          },
        }}
        height="700px"
      />
    </div>
  );
};

export default SwatchesPicker_test;
