import UserModel from 'models/user'
import { hashsalt } from 'utils/password';

const create = async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: "error" })

    const user = await UserModel.findOne({ email })
    if (email && password && !user) {
        const passwordProperties = hashsalt(password);
        if (passwordProperties) {
            const user = new UserModel({
                name,
                email,
                password: passwordProperties,
            })
            const savedUser = await user.save()
            return res.status(200).json({ message: "success", user: savedUser })
        }
        else {
            return res.status(500).json({ message: "error" })
        }
    }
    else {
        return res.status(409).json({ message: "error" })
    }
}

export default create;