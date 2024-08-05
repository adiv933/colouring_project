import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CustomLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  background: "#ffffff",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#dbaf46",
  },
}));

function LinearProgressWithLabel(props) {
  const { value, messages } = props;
  const stage = Math.floor(value / 25); 

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <CustomLinearProgress variant="determinate" value={value} />
      </Box>
      <Box sx={{ minWidth: 35, mt: 2 }}>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >{`${Math.round(value)}%`}</Typography>
        <Typography variant="body2" color="text.primary" mt={1}>
          {messages[stage]}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function MyProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 25
      );
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Define messages for each stage
  const messages = [
    "Stage 1: Select colour and click on the symbol to apply it",
    "Stage 2: Repeat till you fill all 12 petals",
    "Stage 3: Press the “Reveal” button to learn about harmony",
    "Stage 4: Download your image or go to the next colouring",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} messages={messages} />
    </Box>
  );
}
