import UserModel from 'models/user'

const login = async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email })
    res.json({ msg: "success", user })
}

export default login;