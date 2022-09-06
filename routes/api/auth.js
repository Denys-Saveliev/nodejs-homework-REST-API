const { users: ctrl } = require("../../controllers");
const {
  userAuth,
  validation,
  ctrlWrapper,
  upload,
} = require("../../middlewares");
const { joiUserSchema } = require("../../models");

const express = require("express");

const router = express.Router();

router.post("/signup", validation(joiUserSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiUserSchema), ctrlWrapper(ctrl.login));

router.get(
  "/logout",
  userAuth,
  validation(joiUserSchema),
  ctrlWrapper(ctrl.logout)
);

router.patch(
  "/avatars",
  userAuth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
