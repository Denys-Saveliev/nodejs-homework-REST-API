const {
  Contact,
  joiContactSchema,
  favoriteJoiContactSchema,
} = require("./contact");
const {
  User,
  joiUserSchema,
  subscriptionUserSchema,
  joiVerifyEmailSchema,
} = require("./user");

module.exports = {
  Contact,
  joiContactSchema,
  favoriteJoiContactSchema,
  joiVerifyEmailSchema,
  User,
  joiUserSchema,
  subscriptionUserSchema,
};
