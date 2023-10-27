// import express from 'express'
const express = require('express')
const router = express.Router()

// import userController from '../controller/User.js'
const userController = require('../controller/User')

router.get('/',userController.getUser)
router.get('/:id',userController.getUserById)
router.post('/',userController.createUser)
router.put('/:id',userController.editUserById)
router.delete('/:id',userController.deleteUserById)


// export default  router
module.exports = router