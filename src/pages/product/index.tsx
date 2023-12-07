import { singleProduct } from "../../data";
import { Single } from "../home/components/single";

export function Product() {
  return (
    <div className="product">
       <Single {...singleProduct}/>
    </div>
  )
}