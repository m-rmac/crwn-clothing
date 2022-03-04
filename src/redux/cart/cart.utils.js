// utility functions allow us to keep our files clean and organise
// functions that we may need in more than one location

export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

        if(existingCartItem){
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
                )
        }

        return [...cartItems, {...cartItemToAdd, quantity: 1}]
};