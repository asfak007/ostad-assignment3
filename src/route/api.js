const express = require('express');
const AuthMiddleware = require('../middleware/AuthMiddleware')
const UserController = require('../controller/UserController')

const router=express.Router();

router.post("/login",UserController.login);
router.post("/registration",UserController.registration);
router.post("/profileUpdate",AuthMiddleware,UserController.profileUpdate)
router.get("/profileDetails",AuthMiddleware,UserController.profileDetails);
router.post("/logout",UserController.logOut);

module.exports=router;