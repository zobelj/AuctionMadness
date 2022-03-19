import UserModel from 'models/user'

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email })
    if (email && password && !user) {
        const user = new UserModel({
            name,
            email,
            password,
        })
        const savedUser = await user.save()
        res.send({ msg: "success", user: savedUser })
    }
    else {
        res.send({ msg: "error" })
    }
}

export default register;