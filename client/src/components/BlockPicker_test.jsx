import { BlockPicker } from "react-color";

function BlockPicker_test({ color, onChangeComplete }) {
  const colors = [
    "#FF6900",
    "#FCB900",
    "#7BDCB5",
    "#00D084",
    "#8ED1FC",
    "#0693E3",
    "#ABB8C3",
    "#EB144C",
    "#F78DA7",
    "#9900EF",
  ];

  return (
    <BlockPicker
      color={color}
      colors={colors}
      onChangeComplete={onChangeComplete}
    />
  );
}

export default BlockPicker_test;
