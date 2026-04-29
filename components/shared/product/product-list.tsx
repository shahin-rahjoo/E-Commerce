import ProductCard from "./product-card";
{
  /*tis ccomponent is TAKING(recieve from HomePge component ) some props: data and title*/
}

const ProductList = ({ data, title }: { data: any; title?: string }) => {
  return (
    <div className="my-10">
      <h2 className="font-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product: any) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <p className="text-red-400">oops, No Product Found </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
