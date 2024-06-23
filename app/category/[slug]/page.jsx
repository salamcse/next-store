import Service from "@/app/components/Service";
import CategoryLeftSide from "@/app/components/productCategory/CategoryLeftSide";
import CategoryRightSide from "@/app/components/productCategory/CategoryRightSide";
import Breadcrumb from "@/app/components/productDetail/Breadcrumb";
import {getCategorydetailBySlug} from "@/app/services/getCategorydetailBySlug";

const DynamicCategoryPage = async ({ params }) => {
  const { slug } = params;
  const categoryBySlugData = await getCategorydetailBySlug(slug);
  const categoryByResult = categoryBySlugData?.results;
  const categoryByProduct = categoryByResult?.products?.data;
  const categoryByBrand = categoryByResult?.brands;
  const categoryByColor = categoryByResult?.colors;
  const categoryBySize = categoryByResult?.sizes;
  const subCategoryTitle = categoryByResult?.category?.children;
  const categoryByMinPrice = categoryByResult?.min_price;
  const categoryByMaxPrice = categoryByResult?.max_price;

  const serviceItems = [
    {
      imageurl: "/images/pickup.svg",
      altText: "pickup image",
      title: " Fast Delivery",
      subTitle: "Free For All Type Order",
    },
    {
      imageurl: "/images/gift-cart.svg",
      altText: "gift cart",
      title: " Best Quality",
      subTitle: "Best Product Peices",
    },
    {
      imageurl: "/images/gift-box.svg",
      altText: "gift box",
      title: " Exchange Offer",
      subTitle: "One Day To Changes",
    },
    {
      imageurl: "/images/headphone.svg",
      altText: "headphone",
      title: "  Help Center",
      subTitle: "Support System 24/7",
    },
  ];
  return (
    <section className="product-category-wrapper">
      <div className="container">
        <Breadcrumb />
        <div className="row product-category-details-row">
          <div className="col-md-12">
            <div className="product-category-details">
              <CategoryLeftSide
                categoryByBrand={categoryByBrand}
                categoryByColor={categoryByColor}
                categoryBySize={categoryBySize}
                subCategoryTitle={subCategoryTitle}
                categoryByMinPrice={categoryByMinPrice}
                categoryByMaxPrice={categoryByMaxPrice}
              />
              <CategoryRightSide categoryByProduct={categoryByProduct} />
            </div>
          </div>
        </div>
        <Service serviceItems={serviceItems} />
      </div>
    </section>
  );
};

export default DynamicCategoryPage;