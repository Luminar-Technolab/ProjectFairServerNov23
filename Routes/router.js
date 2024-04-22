const express = require('express')
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

const router = new express.Router()

//register route
router.post('/register',userController.register)
//lpgin route
router.post('/login',userController.login)
//addproject route
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)
//getallprojects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)
//getuserprojects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)
//gethomeprojects
router.get('/home-projects',projectController.getHomeProjects)
//edit project
router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)
//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)
//edituser
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

//export router
module.exports = router