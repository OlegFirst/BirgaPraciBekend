const express = require("express");
const router = express.Router();

const {joiSchema} = require("../../../schemas/user");
const {validation, controllerWrapper} = require("../../../middlewares");
const ctrl = require("../../../controllers/auth");

router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));
router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
router.post("/logout", ctrl.logout);
router.get("/users", validation(joiSchema), controllerWrapper(ctrl.getAllUsers));

module.exports = router;