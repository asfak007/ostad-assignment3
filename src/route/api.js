const express = require('express');
const AuthMiddleware = require('../middleware/AuthMiddleware')
const UserController = require('../controller/UserController');
const TodoController = require('../controller/TodoController');

const router=express.Router();

router.post("/login",UserController.login);
router.post("/registration",UserController.registration);
router.post("/profileUpdate",AuthMiddleware,UserController.profileUpdate)
router.get("/profileDetails",AuthMiddleware,UserController.profileDetails);
router.post("/logout",UserController.logOut);

// todo Todo route

router.post('/addTodo',AuthMiddleware,TodoController.create)
router.get('/viewTodo',AuthMiddleware,TodoController.read);
router.post('/updateTodo/:id',AuthMiddleware,TodoController.update)
router.post('/deleteTodo/:id',AuthMiddleware,TodoController.delete)
router.post('/changeTodoStatus/:id',AuthMiddleware,TodoController.chaneStatus)


module.exports=router;