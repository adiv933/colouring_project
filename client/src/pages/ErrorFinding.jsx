// import { useEffect, useState } from "react";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   Dialog,
//   DialogContent,
//   IconButton,
//   Typography,
//   CardContent,
// } from "@mui/material";
// import Navbar from "../components/Navbar";
// import PageHeading from "../components/PageHeading";

// const ErrorFinding = () => {
//   const [images, setImages] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const imageContext = import.meta.glob("/public/errors/*"); // Adjust pattern if necessary
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
//       <section className="min-h-screen w-full flex flex-col items-center hero gap-y-4 p-4 sm:px-12 pt-20 sm:pt-16 justify-center">
//         <PageHeading>Error Finding</PageHeading>
//         <div className="w-full text-justify bg-white p-2 sm:p-8 rounded-lg">
//           <p className="text-lg text-black ">
//             1. Can you bring a colouring you see below closer to harmony? <br />
//             2. Correct a colouring and send it to us for (anonymous) publishing{" "}
//             <br />
//             3. Do not forget to tell us which colouring you are correcting
//             (number reference below the image) <br />
//             4. You may share any comments or clarification, e.g. how you got to
//             the correction via:{" "}
//             <a
//               href="mailto:themotherssymbol@gmail.com"
//               className="text-[#dbaf46] hover:underline text-md sm:text-lg md:text-xl mt-4"
//             >
//               themotherssymbol@gmail.com
//             </a>
//           </p>
//         </div>
//         <Grid container spacing={2} className="mt-4 sm:mt-8 lg:mt-12">
//           {images.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   alt={`Image ${index + 1}`}
//                   image={image}
//                   title={`Image ${index + 1}`}
//                   className="object-cover w-full h-64 sm:h-72 cursor-pointer"
//                   onClick={() => handleClickOpen(image)}
//                 />
//                 <CardContent>
//                   <Typography
//                     variant="body2"
//                     component="p"
//                     className="text-center"
//                   >
//                     {`Picture ${index + 1}`}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//           <DialogContent
//             sx={{
//               p: 0,
//               position: "relative",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <IconButton
//               edge="end"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//               sx={{ position: "absolute", top: 8, right: 8 }}
//             >
//               x
//             </IconButton>
//             {selectedImage && (
//               <img
//                 src={selectedImage}
//                 alt="Selected"
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "calc(100vh - 64px)",
//                   objectFit: "contain",
//                 }}
//               />
//             )}
//           </DialogContent>
//         </Dialog>
//       </section>
//     </div>
//   );
// };

// export default ErrorFinding;
import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";

const ErrorFinding = () => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const imageContext = import.meta.glob("/public/errors/*"); // Adjust pattern if necessary
      const imagePaths = Object.keys(imageContext).map((key) =>
        imageContext[key]().then((module) => module.default)
      );

      // Await all image paths to resolve
      const resolvedImages = await Promise.all(imagePaths);

      // Sort images: "Picture" first, then "Wheel"
      const sortedImages = resolvedImages.sort((a, b) => {
        const nameA = a.split("/").pop().toLowerCase(); // Extract file name and make it lowercase
        const nameB = b.split("/").pop().toLowerCase();

        if (nameA.startsWith("picture") && !nameB.startsWith("picture")) {
          return -1; // "Picture" comes first
        }
        if (!nameA.startsWith("picture") && nameB.startsWith("picture")) {
          return 1; // "Wheel" comes after "Picture"
        }
        return 0; // Keep order for other cases
      });

      setImages(sortedImages);
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
      <section className="min-h-screen w-full flex flex-col items-center hero gap-y-4 p-4 sm:px-12 pt-20 sm:pt-16 justify-center">
        <PageHeading>Error Finding</PageHeading>
        <div className="w-full text-justify bg-white p-2 sm:p-8 rounded-lg">
          <p className="text-lg text-black ">
            1. Can you bring a colouring you see below closer to harmony? <br />
            2. Correct a colouring and send it to us for (anonymous) publishing{" "}
            <br />
            3. Do not forget to tell us which colouring you are correcting
            (number reference below the image) <br />
            4. You may share any comments or clarification, e.g. how you got to
            the correction via:{" "}
            <a
              href="mailto:themotherssymbol@gmail.com"
              className="text-[#dbaf46] hover:underline text-md sm:text-lg md:text-xl mt-4"
            >
              themotherssymbol@gmail.com
            </a>
          </p>
        </div>
        <Grid container spacing={2} className="mt-4 sm:mt-8 lg:mt-12">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={`Image ${index + 1}`}
                  image={image}
                  title={`Image ${index + 1}`}
                  className="object-cover w-full h-64 sm:h-72 cursor-pointer"
                  onClick={() => handleClickOpen(image)}
                />
                <CardContent>
                  {index < 22 && (
                    <Typography
                      variant="body2"
                      component="p"
                      className="text-center"
                    >
                      {`Picture ${index + 1}`}
                    </Typography>
                  )}
                </CardContent>
              </Card>
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

export default ErrorFinding;
