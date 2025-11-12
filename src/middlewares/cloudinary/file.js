const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    let folder = 'project10/general'

    if (file.fieldname === 'profileImg') folder = 'project10/profile_pictures'
    if (file.fieldname === 'eventImg') folder = 'project10/events_pictures'
    if (file.fieldname === 'locationImg') folder = 'project10/location_pictures'

    return {
      folder,
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    }
  }
})
const upload = multer({ storage: storage })
module.exports = upload
