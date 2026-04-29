import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
const Homepage = () => {

  return <>
  {/* the ProductList below is sending data and title to the product-list component*/}
  <ProductList data={sampleData.products} title={'Our Newest Collection'}/>
  </>;
};

export default Homepage;
