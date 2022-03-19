const logout = async (req, res) => {
    req.logout();
    req.session.destroy();
    return res.status(200).json({ message: "success" })
}

export default logout;