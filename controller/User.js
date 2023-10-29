const userModel = require("../model/User");
const Auth = require("../common/Auth");

const getUser = async (req, res) => {
  try {
    let user = await userModel.find({}, { Password: 0 });
    res.status(200).send({
      message: "Data Fetched Successfully",
      count: user.length,
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const getUserById = async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.id });
  try {
    if (user) {
      res.status(200).send({
        message: "User Fetched Successfully",
        user,
      });
    } else {
      res.status(400).send({
        message: "Invalid ID",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      req.body.Password = await Auth.hashPassword(req.body.Password);
      await userModel.create(req.body);
      res.status(201).send({
        message: "User Created Successfully",
      });
    } else {
      res.status(400).send({
        message: `User with ${req.body.email} Already Exists`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const editUserById = async (req, res) => {
  try {
    let user = await userModel.findOne({ _id: req.params.id });
    if (user) {
      let { firstName, lastName, email, Password, status, role } = req.body;

      user.firstName = firstName ? firstName : user.firstName;
      user.lastName = lastName ? lastName : user.lastName;
      user.email = email ? email : user.email;
      user.Password = Password ? Password : user.Password;
      user.status = status ? status : user.status;
      user.role = role ? role : user.role;

      await user.save();

      res.status(200).send({
        message: "User Edited Successfully",
      });
    } else {
      res.status(400).send({ message: "Invalid User ID" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteUserById = async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.id });
  try {
    if (user) {
      await userModel.deleteOne(user);
      res.status(200).send({
        message: "User Deleted Successfully",
      });
    } else {
      res.status(400).send({
        message: "Invalid User",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      let hashCompare = await Auth.hashCompare(
        req.body.Password,
        user.Password
      );
      if (hashCompare) {
        let token = await Auth.createToken({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        });
        res.status(200).send({
          message: "Login Successfully",
          token,
        });
      } else {
        res.status(400).send({
          message: "Invalid Password",
        });
      }
    } else {
      res.status(400).send({
        message: `User with ${req.body.email} does not exists`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  editUserById,
  deleteUserById,
  login,
};
