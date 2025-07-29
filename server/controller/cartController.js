import User from "../models/usermodel.js";


// Update User CartData: /api/cart/update

export const updateCart = async (req, res) => {
    try {
        const { cartitems } = req.body;
        const userId = req.user.id;
        await User.findByIdAndUpdate(userId, { cartitems })
        res.json({ success: true, message: "Cart Updated" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
