import UserModel from 'models/user'

const info = async (req, res) => {
    const { _id } = req.user;
    const user = await UserModel.findOne({ id: _id }, { password: 0 })
    res.json({ message: "success", user })
}

export default info;