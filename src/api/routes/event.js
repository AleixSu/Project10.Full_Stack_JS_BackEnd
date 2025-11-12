const { isAuth, allowRoles } = require('../../middlewares/authorization/auth')
const upload = require('../../middlewares/cloudinary/file')
const {
  getEvents,
  getEventByID,
  createEvent,
  updateEventInfo,
  deleteEvent,
  signUpToEvent,
  getEventByLocation,
  cancelEventSignUp
} = require('../controllers/event')

const eventRoutes = require('express').Router()

eventRoutes.get('/', getEvents)
eventRoutes.get('/:id', getEventByID)
eventRoutes.get('/location/:location', getEventByLocation)
eventRoutes.post(
  '/',
  [isAuth, allowRoles('admin'), upload.single('eventImg')],
  createEvent
)
eventRoutes.patch(
  '/:id',
  [isAuth, allowRoles('admin'), upload.single('eventImg')],
  updateEventInfo
)
eventRoutes.patch('/:id/sign_up', isAuth, signUpToEvent)
eventRoutes.patch('/:id/unsign_up', isAuth, cancelEventSignUp)
eventRoutes.delete('/:id', [isAuth, allowRoles('admin')], deleteEvent)

module.exports = eventRoutes
