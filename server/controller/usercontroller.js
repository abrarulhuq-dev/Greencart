import User from "../models/usermodel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//  Rsgidter User : /api/user/register
export const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.json({ success: false, message: " Missing details" })

        }

        const existinguser = await User.findOne({ email })

        if (existinguser) return res.json({ success: false, message: 'User already exists' })

        const hashpassword = await bcrypt.hash(password, 10)

        const user = await User.create({ name, email, password: hashpassword })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httponly: true, //prevent javascript to access cookie
            secure: process.env.NODE_ENV === 'production', // use secure cookie in production 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 1000, // cookie expiration time
        })

        return res.json({ success: true, user: { email: user.email, name: user.name } })


    } catch (error) {

        console.log(error.massage);

        res.json({ success: false, message: error.massage })

    }

}


// Login User : /api/user/login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.json({ success: false, message: "Email and password are required" });

        const user = await User.findOne({ email });

        if (!user) return res.json({ success: false, message: "Invalid email or password" });


        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch)
            return res.json({ success: false, message: "Invalid email or password" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.json({ success: true, user: { email: user.email, name: user.name } })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Check auth: /api/user/is-auth
export const isAuth = async (req, res) => {
    try {

       
        const user = await User.findById(req.user.id).select("-password");
        res.json({ success: true, user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};


// Logout user: /api/user/logout
export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({ success: true, message: "Logged Out" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}