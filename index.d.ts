interface Product{
  _id: string,
  name: string,
  slug: string,
  description: string,
  price: number,
  image: string,
  createdAt: string,

}

interface StateInterface{
    cart:Product[], 
    cartTotal:number, 
    totalItems: number,
    addToCart: () => null,
    removeFromCart: () => null,
    clearCart: () => null,
}
