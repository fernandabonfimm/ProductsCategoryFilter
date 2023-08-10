interface ImageProps {
  asset: {
    url: string;
  };
}

interface ProductProps {
  name: string;
  shortDescription: string;
  images: ImageProps[];
  id: string;
  category: {
    _id: string;
    name: string;
  };
}
export default ProductProps;