// import { useEffect, useState } from "react";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   Dialog,
//   DialogContent,
//   IconButton,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Navbar from "../components/Navbar";
// import PageHeading from "../components/PageHeading";

// const StyledCard = styled(Card)({
//   position: "relative",
//   height: "100%",
//   overflow: "hidden",
//   borderRadius: "0.5rem",
// });

// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const imageContext = import.meta.glob("/public/compressed-gallery/*.jpg"); // Adjust pattern if necessary
//       const imagePaths = Object.keys(imageContext).map((key) =>
//         imageContext[key]().then((module) => module.default)
//       );
//       const resolvedImages = await Promise.all(imagePaths);
//       setImages(resolvedImages);
//     };

//     fetchImages();
//   }, []);

//   const handleClickOpen = (image) => {
//     setSelectedImage(image);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div className="w-full min-h-screen gradient-background">
//       <Navbar />
//       <section className="min-h-screen w-full flex flex-col items-center hero p-20 justify-center">
//         <PageHeading>Gallery</PageHeading>
//         <Grid container spacing={2} className="mt-8">
//           {images.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//               <StyledCard>
//                 <CardMedia
//                   component="img"
//                   alt={`Image ${index + 1}`}
//                   height="140"
//                   image={image}
//                   title={`Image ${index + 1}`}
//                   className="object-cover w-full h-full"
//                   onClick={() => handleClickOpen(image)}
//                 />
//               </StyledCard>
//             </Grid>
//           ))}
//         </Grid>

//       </section>
//     </div>
//   );
// };

// export default Gallery;
import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";

const StyledCard = styled(Card)({
  position: "relative",
  height: "100%",
  overflow: "hidden",
  borderRadius: "0.5rem",
});

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const imageContext = import.meta.glob("/public/compressed-gallery/*.jpg"); // Adjust pattern if necessary
      const imagePaths = Object.keys(imageContext).map((key) =>
        imageContext[key]().then((module) => module.default)
      );
      const resolvedImages = await Promise.all(imagePaths);
      setImages(resolvedImages);
    };

    fetchImages();
  }, []);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="w-full min-h-screen gradient-background">
      <Navbar />
      <section className="min-h-screen w-full flex flex-col items-center hero p-4 sm:p-8 lg:p-16 justify-center">
        <PageHeading>Gallery</PageHeading>
        <Grid container spacing={2} className="mt-4 sm:mt-8 lg:mt-12">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  alt={`Image ${index + 1}`}
                  image={image}
                  title={`Image ${index + 1}`}
                  className="object-cover w-full h-full cursor-pointer"
                  onClick={() => handleClickOpen(image)}
                />
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent
            sx={{
              p: 0,
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              x
            </IconButton>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  maxWidth: "100%",
                  maxHeight: "calc(100vh - 64px)",
                  objectFit: "contain",
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default Gallery;
