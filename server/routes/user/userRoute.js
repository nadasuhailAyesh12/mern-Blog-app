const userRouter = require('express').Router()

const fetchAllUsers = require('../../controllers/user/fetchAllUsers')
const authMiddleware = require('../../middlewars/auth/authMiddleware')
const fetchUser = require('../../controllers/user/fetchUser')
const deleteUser = require('../../controllers/user/deleteUser')
const userProfile = require('../../controllers/user/fetchUserProfile')
const updateUserProfile = require('../../controllers/user/updateUserProfile')
const updateProfileValidationSchema = require('../../validation/profileUpdateValidation')
const { passwordValidationSchema } = require('../../validation/authValidation')
const validator = require('../../middlewars/validation/validator')
const updateUserPassword = require('../../controllers/user/updatePassword')
const followingUser = require('../../controllers/user/followingUser')
const unfollowingUser = require('../../controllers/user/unfollowingUser')
const blockUser = require('../../controllers/user/blockUser')
const unblockUser = require('../../controllers/user/unblockUser')

userRouter.get('/', authMiddleware, fetchAllUsers)
userRouter.get('/:id', fetchUser)
userRouter.delete('/:id', deleteUser)
userRouter.get('/profile/:id', authMiddleware, userProfile)
userRouter.put('/profile/:id', authMiddleware, validator(updateProfileValidationSchema), updateUserProfile)
userRouter.put('/password/:id', authMiddleware, validator(passwordValidationSchema), updateUserPassword)
userRouter.put('/follow', authMiddleware, followingUser)
userRouter.put('/unfollow', authMiddleware, unfollowingUser)
userRouter.put('/block/:id', authMiddleware, blockUser)
userRouter.put('/unblock/:id', authMiddleware, unblockUser)

module.exports = userRouter