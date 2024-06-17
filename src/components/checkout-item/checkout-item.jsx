import './checkout-item.scss'
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function CheckoutItem({ cartItem }) {
    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { image, name, promotionPrice, quantity } = cartItem

    const clearItem = () => clearItemToCart(cartItem)
    const addItem = () => addItemToCart(cartItem)
    const removeItem = () => removeItemToCart(cartItem)

    return (
        <div className='checkout-item-container'>
            <div className='checkout-item-image'>
                <img src={image} alt="" />
            </div>
            <span className='checkout-item-name'>{name}</span>
            <span className='checkout-quantity'>
                <span className='checkout-item-arrow' onClick={removeItem}>
                    &#10094;
                </span>
                <span className='checkout-item-quantity'>{quantity}</span>
                <span className='checkout-item-arrow' onClick={addItem}>
                    &#10095;
                </span>
            </span>
            <span className='checkout-item-total'>{promotionPrice.toFixed(2).toString().replace(".", ",")}</span>
            <div className='checkout-item-remove' onClick={clearItem}>
                &#10005;
            </div>
        </div>
    )
}