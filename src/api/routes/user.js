const { isAuth, allowRoles } = require('../../middlewares/authorization/auth')
const upload = require('../../middlewares/cloudinary/file')
const {
  getUserByID,
  getUsers,
  login,
  register,
  updateUserInfo,
  deleteUser
} = require('../controllers/user')

const userRoutes = require('express').Router()

userRoutes.post('/login', login)
userRoutes.post('/register', upload.single('profileImg'), register)
userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUserByID)
userRoutes.patch('/:id', [isAuth, upload.single('profileImg')], updateUserInfo)
userRoutes.delete('/:id', isAuth, deleteUser)

module.exports = userRoutes
