import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProducPrice from "./product-price";
{
  /*the ProductCard bellow  taking IN(recieving) {product} from product-list component */
}
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            width={300}
            height={300}
            alt={product.name}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4 ">
        <div className="text-xs"> {product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="font-bold">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p className="font-bold">{product.rating}</p>
          {product.stock > 0 ? (
           <ProducPrice value={product.price}/>
          ) : (
            <p className="text-red-500">Sold Out</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
