// routes/usersRouter.js
const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/create", usersController.usersCreateGet);
usersRouter.post("/create", usersController.usersCreatePost);
usersRouter.get("/:id/update", usersController.usersUpdateGet);
usersRouter.post("/:id/update", usersController.usersUpdatePost);
usersRouter.post("/:id/delete", usersController.usersDeletePost);
//usersRouter.get("/users/search", usersController.usersSearchGet);
usersRouter.post("users/search", usersController.usersSearchPost);



module.exports = usersRouter;
