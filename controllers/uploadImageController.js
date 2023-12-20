// uploadImageController.js
const handleImageUpload = async (req, res) => {
    try {
      // Process the uploaded image (save to database, etc.)
      // Access the file via req.file
  
      // Example: Save the image to the database and get the image URL
      const imageUrl = await saveImageToDatabase(req.file);
  
      res.status(200).json({ imageUrl });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Error uploading image' });
    }
  };
  
  const saveImageToDatabase = async (file) => {
    // Your logic to save the image to the database
    // This is just a placeholder, replace it with your actual database code
    // Return the URL of the saved image
    return `http://localhost:5000/uploads/${file.originalname}`;
  };
  
  export { handleImageUpload };
  
// 
// ../backend/controllers/uploadImageController.js
// import multer from 'multer';

// // Set up multer for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const uploadImageController = upload.single('image');

// const handleFileUpload = async (file) => {
//   // Perform necessary actions with the file, such as saving to disk or storing in a database
//   // In this example, we are logging the file details to the console
//   console.log('Uploaded file:', {
//     originalname: file.originalname,
//     mimetype: file.mimetype,
//     size: file.size,
//   });

//   // You can return the uploaded file details or a success message
//   return { message: 'Image uploaded successfully' };
// };

// const handleError = (error, req, res, next) => {
//   res.status(500).json({ error: error.message });
// };

// export default (req, res, next) => {
//   uploadImageController(req, res, async (error) => {
//     if (error instanceof multer.MulterError) {
//       // A Multer error occurred during the file upload process
//       res.status(400).json({ error: 'File upload error' });
//     } else if (error) {
//       // An unknown error occurred
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       // Handle the uploaded file
//       const result = await handleFileUpload(req.file);
//       res.status(200).json(result);
//     }
//   });

//   // Handle errors
//   uploadImageController(req, res, (err) => {
//     handleError(err, req, res, next);
//   });
// };
