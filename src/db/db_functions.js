const { User, sequelize } = require("./sequelize");

const registerUser = async (username, email, password) => {
    try {
        let user = await User.create({
            username: username,
            email: email,
            password: password,
        });
        return user;
    } catch (e) {
        console.log(e);
        return 'error';
    }
}

module.exports = {
    "registerUser": registerUser,
}