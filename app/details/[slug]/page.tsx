import { getProductDetailsBySlug } from "@/sanity/sanity-utils";
import Details from "../../components/Details"
import Header from "../../components/Header"

const DetailPage = async ({params}) => {
  const {slug} = params;
  const product = await getProductDetailsBySlug(slug);
  return (
    <div>
        <Header/>
        <div>
            <Details product={product[0]}/>
        </div>
    </div>
  )
}

export default DetailPage;