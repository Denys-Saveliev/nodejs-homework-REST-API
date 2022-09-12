const signup = require("./signup");
const { login } = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const encryptedKey = require("./login");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  encryptedKey,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
