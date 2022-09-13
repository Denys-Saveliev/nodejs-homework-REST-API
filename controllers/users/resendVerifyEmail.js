const { User, joiVerifyEmailSchema } = require("../../models");
const { sendEmail } = require("../../service");
const { BadRequest } = require("http-errors");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const { error } = joiVerifyEmailSchema.validate(req.body);
  if (error) {
    throw new BadRequest("missing required field email");
  }
  const user = await User.findOne({ email });
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Website registration confirmation",
    html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}" target="_blank">Click to confirm email</a>`,
  };
  await sendEmail(mail);
  res.status(200).json({
    status: "success",
    code: 200,
    user: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
