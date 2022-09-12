const { User } = require("../../models");
const { sendEmail } = require("../../helpers");
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const verificationToken = uuidv4();
  await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Website registration confirmation",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Click to confirm email</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email,
    },
  });
};

module.exports = signup;
