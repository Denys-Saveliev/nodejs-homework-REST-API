/* eslint-disable no-useless-catch */
const sgEmail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgEmail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "denda084@gmail.com" };
    await sgEmail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
