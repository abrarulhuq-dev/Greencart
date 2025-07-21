import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/greencart_assets/assets";
import { toast } from 'react-hot-toast'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(true)
    const [Isseller, setIsseller] = useState(false)
    const [showuserlogin, setshowuserlogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartitems, setCartItems] = useState({});
    const [searchquery, setsearchquery] = useState({});

    const currency = '₹'

    // Getch All Product
    const fetchProducts = async () => {

        setProducts(dummyProducts)

    }

    // Add Product to Cart
    const addToCart = (itemId) => {

        let cartdata = structuredClone(cartitems);

        if (cartdata[itemId]) {

            cartdata[itemId] += 1;

        } else {
            cartdata[itemId] = 1;
        }

        setCartItems(cartdata)
        toast.success('Added to Cart')


    }

    // update Cart Item Qauantity
    const updatecartitem = (itemId, quantity) => {

        let cartdata = structuredClone(cartitems);

        cartdata[itemId] = quantity;

        setCartItems(cartdata)
        toast.success('Cart Updated')

    }

    // Romve Product form Cart
    const removeFromCart = (itemId) => {

        let cartdata = structuredClone(cartitems);
        if (cartdata[itemId]) {

            cartdata[itemId] -= 1;

            if (cartdata[itemId] === 0) {
                delete cartdata[itemId];


            }

        }

        toast.success('Removed from Cart')
        setCartItems(cartdata)
    }

    // GEt cart item count
    const getcartcount = () => {

        let totalcount = 0

        for (const item in cartitems) {

            totalcount += cartitems[item];

        }
        return totalcount;
    }

    // get cart total amount 
    const getcartamount = () => {

        let totalAmount = 0;
        for (const item in cartitems) {

            let iteminfo = products.find((product) => product._id === item);

            if (cartitems[item] > 0) {

                totalAmount += iteminfo.offerPrice * cartitems[item]

            }

            

        }
        return Math.floor(totalAmount * 100) / 100

    }




    useEffect(() => {
        fetchProducts()
    })

    const value = {
        navigate, user, showuserlogin,
        setUser, setIsseller, Isseller,
        products, currency, addToCart,
        updatecartitem, removeFromCart,
        setshowuserlogin, cartitems,
        searchquery, setsearchquery,
        getcartcount, getcartamount,


    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = () => {
    return useContext(AppContext)
}