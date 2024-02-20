interface Product{
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
  createdAt: string;

}

interface StateInterface{
    cart:Product[]; 
    cartTotal:number; 
    totalItems: number;
    addToCart: () => null;
    removeFromCart: () => null;
    clearCart: () => null;
}
