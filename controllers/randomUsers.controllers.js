const randomUsers = require("../fakeData/tools.json");

////get all users or get specific users from users fake db
module.exports.getAllUsers = (req, res) => {
  const { limit } = req.query;
  if (limit) {
    if (limit > 0) {
      const users = randomUsers.users.slice(0, limit);
      res
        .status(200)
        .json({ success: true, message: "Limit User Found", user: users });
    }
    res.status(400).json({
      success: false,
      error: "limit value is wrong at least value is 1",
      user: {},
    });
  }
  res.status(200).json({
    success: true,
    message: "All Random Users Found",
    users: randomUsers.users,
  });
};

////save new users in fake random users db
module.exports.saveUser = (req, res) => {
  const user = req.body;
  if (!user) {
    res
      .status(400)
      .json({ success: false, error: "User Data Not Found", user: {} });
  }
  if (
    !user.id ||
    !user.gender ||
    !user.name ||
    !user.contact ||
    !user.address ||
    !user.photoUrl
  ) {
    res
      .status(400)
      .json({ success: false, error: "User Any Item Missing", user: user });
  } else {
    const { id } = user;

    const userFound = randomUsers.users.find((user) => user.id == id);
    if (userFound) {
      res
        .status(400)
        .json({ success: false, error: "User Id Already exist", user: {} });
    }
    randomUsers.users.push(user);
    res.status(200).json({
      success: true,
      message: "User Successfully Save in DB",
      user: id,
    });
  }
};

////delete specific user data from users fake db
module.exports.delete = (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.status(400).json({ success: false, error: "id Not Found", user: {} });
  }
  const userFind = randomUsers.users.find((user) => user.id === Number(id));
  if (!userFind) {
    res.status(400).json({ success: false, error: "User Not Found", user: {} });
  }
  randomUsers.users.filter((user) => user.id !== Number(id));
  res.status(200).json({
    success: true,
    message: "User Delete Successfully",
    user: id,
  });
};

////find single users from random users
module.exports.user = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ success: false, error: "id Not Found", user: {} });
  }
  try {
    const user = randomUsers.users.find((user) => user?.id === Number(id));
    if (!user) {
      res
        .status(400)
        .json({ success: false, error: "User Not Founds", user: {} });
    }
    res.json({ success: true, message: "user Founded", user: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

////update users data in users fake db data
module.exports.update = (req, res) => {
  const updatedUser = req.body;
  const { id } = req.params;

  if (!id) {
    res.status(400).json({
      success: false,
      error: "Updated Id is not found",
    });
  }
  const users = randomUsers.users.map((item) => {
    if (item?.id === Number(id)) {
      return { ...item, ...updatedUser };
    }
    return item;
  });

  randomUsers.users = users;

  res
    .status(200)
    .json({ success: true, message: "User Updated Successfully", users });
};

////multiple users data update in users fake db data
module.exports.bulkUpdate = (req, res) => {
  const { users } = req.body;

  if (!Array.isArray(users)) {
    res.status(400).json({
      success: false,
      error: "Please provided array for updated Users",
      user: users,
    });
  }

  const randomUser = randomUsers.users.map((item, index) => {
    if (item?.id === users[index]?.id) {
      return { ...item, ...users[index] };
    }
    return item;
  });

  randomUsers.users = randomUser;

  res.status(200).json({
    success: true,
    message: "User Updated Successfully",
    users,
  });
};
