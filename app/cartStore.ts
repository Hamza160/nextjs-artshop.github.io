import {create} from 'zustand';

const useCartStore: StateInterface  = create((set) => ({
    cart: [],
    cartTotal: 0,
    totalItems: 0,
    addToCart: ({product, quantity}: {product:Product, quantity: number}) => {
        set((state: StateInterface) => {
            const existingProductIndex = state.cart.findIndex((item) => item._id === product._id);
            const newQuantity = parseInt(quantity, 10);

            // If Product Quantity is 0 Than Remove Product From Cart
            if(newQuantity <= 0){
                const updatedCart = state.cart.filter((item) => item._id !== product._id);
                return {
                    cart: updatedCart,
                    cartTotal: calculateCartTotal(updatedCart),
                    totalItems: calculateTotalItems(updatedCart)
                }
            }

            if(existingProductIndex !== -1){
                // If Product Exists
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity = newQuantity

                return {
                    cart: updatedCart,
                    cartTotal: calculateCartTotal(updatedCart),
                    totalItems: calculateTotalItems(updatedCart)
                }
            }else{
                // If Product Not Exists
                return {
                    cart: [...state.cart, {...product, quantity: newQuantity}],
                    cartTotal: calculateCartTotal([...state.cart, {...product, quantity: newQuantity}]),
                    totalItems: calculateTotalItems([...state.cart, {...product, quantity: newQuantity}]) 
                }
            }

        });
    },
    removeFromCart: (productId: string) => {
        set((state: StateInterface) => {
            const updatedCart = state.cart.filter((item) => item._id !== productId);
            return {
                    cart: updatedCart,
                    cartTotal: calculateCartTotal(updatedCart),
                    totalItems: calculateTotalItems(updatedCart)
                }
        });
    },
    clearCart: () => set({cart:[], cartTotal:0, totalItems:0})
}));

function calculateCartTotal(cart){
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalItems(cart){
    return cart.reduce((total, item) => total + 1, 0);
}

export default useCartStore;