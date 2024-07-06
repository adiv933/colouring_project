/* eslint-disable react/prop-types */
import { SketchPicker } from "react-color";

const ColorPicker_test = ({ color, onChangeComplete }) => {
  return (
    <div className="w-full">
      <SketchPicker
        color={color}
        onChangeComplete={onChangeComplete}
        styles={{
          default: {
            picker: {
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
            },
          },
        }}
      />
    </div>
  );
};

export default ColorPicker_test;
