import UserModel from 'models/user'

const create = async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: "error" })

    const user = await UserModel.findOne({ email })
    if (email && password && !user) {
        const user = new UserModel({
            name,
            email,
            password,
        })
        const savedUser = await user.save()
        return res.status(200).json({ message: "success", user: savedUser })
    }
    else {
        return res.status(409).json({ message: "error" })
    }
}

export default create;