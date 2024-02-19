import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { getUsersByEmail, createUser, getAllProducts } from "@/sanity/sanity-utils"
import { currentUser } from "@clerk/nextjs"

const HomePage = async () => {
  const user = await currentUser();

  if(!user) return <div>Your are not loggedin</div>
  
  const existingUser = await getUsersByEmail(user?.emailAddresses[0]?.emailAddress);
  
  if(existingUser?.length === 0){
    await createUser({name:user?.firstName, email:user?.emailAddresses[0]?.emailAddress})
  }
  
  const products: Product[] = await getAllProducts();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#5B20B6] text-center">Get artistic prints</h1>
        <p className="text-center text-xl text-gray-500">Elavate Your Space with stunning art prints, transform your surroundings.</p>
      </div>

      <div className="flex p-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <Card product={product} key={product._id}/>
          ))}
          
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage