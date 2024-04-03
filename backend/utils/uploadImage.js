const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'cloudinary',
  api_key: '512852044135942',
  api_secret: 'akkdewdpwjeiendowdmpdkke',
});

async function uploadImage(image) {
  try {
    const result = await cloudinary.uploader.upload(image, { folder: 'kanban_board_avatars' });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    return null;
  }
}

module.exports = uploadImage;
