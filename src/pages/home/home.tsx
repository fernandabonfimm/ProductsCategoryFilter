import React from "react";
import Product from "../../components/product/product";
import ProductsData from "../../services/data/products";
import Input from "../../components/input/input";
import CardComponent from "../../components/card/card";
import InputSelect from "../../components/inputSelect/inputSelect";
import ProductProps from "../../interfaces/components/productProps";

const Home: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [select, setSelect] = React.useState<string>("");

  React.useEffect(() => {
    setProducts(ProductsData.data.nodes);
  }, []);

  const options = React.useMemo(() => {
    const options = products.map((product) => product.category);
    return options;
  }, [products]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-wrap bg-gray-100 justify-center">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <CardComponent>
            <Input
              label="Pesquisar Produto"
              name="search"
              type="text"
              placeholder="Digite o nome do produto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </CardComponent>
          <CardComponent>
            <InputSelect
              label="Filtrar por categoria"
              name="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              options={options}
            />
          </CardComponent>
        </div>
        <div className="flex flex-row gap-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex m-4">
              <Product
                name={product.name}
                shortDescription={product.shortDescription}
                images={product.images}
                id={product.id}
                category={{
                  _id: product.category._id,
                  name: product.category.name,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
