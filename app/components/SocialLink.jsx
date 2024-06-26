import SocialLinkItems from "./SocialLinkItems";

const SocialLink = ({ path_name, product_name, product_thumbnail }) => {
  console.log(
    `https://next-store-self-five.vercel.app/products/get-product-details?${path_name}`
  );

  const socialLinkItem = [
    {
      image: "/images/facbook.svg",
      alt: "Facebook",
      path: `https://www.facebook.com/sharer/sharer.php?u=https://next-store-self-five.vercel.app/products/get-product-details?${path_name}&title=${product_name}&picture=${product_thumbnail}`,
    },
    {
      image: "/images/twitter.svg",
      alt: "Twitter",
      path: `https://twitter.com/intent/tweet?url=https://next-store-self-five.vercel.app/products/get-product-details?${path_name}&title=${product_name}&picture=${product_thumbnail}`,
    },
    {
      image: "/images/linkedin.svg",
      alt: "LinkedIn",
      path: `https://www.linkedin.com/shareArticle?mini=true&url=https://next-store-self-five.vercel.app/products/get-product-details?${path_name}&title=${product_name}&source=LinkedIn`,
    },
    {
      image: "/images/youtube.svg",
      alt: "YouTube",
      path: "https://www.youtube.com",
    },
    {
      image: "/images/instagram.svg",
      alt: "Instagram",
      path: "https://www.instagram.com",
    },
  ];

  return (
    <div className="nh-social-link d-flex align-items-center">
      {socialLinkItem.map((item) => {
        const { image, alt, path } = item;
        return <SocialLinkItems key={alt} img={image} alt={alt} path={path} />;
      })}
    </div>
  );
};

export default SocialLink;
