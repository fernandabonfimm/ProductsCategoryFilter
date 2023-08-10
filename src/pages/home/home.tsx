import React from "react";
import Product from "../../components/product/product";
import ProductsData from "../../services/data/products";
import Input from "../../components/input/input";
import CardComponent from "../../components/card/card";
import InputSelect from "../../components/inputSelect/inputSelect";
import ProductProps from "../../interfaces/components/productProps";
import "./styles.css";

const Home: React.FC = () => {
  const productsPerPage = 9;
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [select, setSelect] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    setProducts(ProductsData.data.nodes);
  }, []);

  const options = React.useMemo(() => {
    const options = products.map((product) => product.category);
    return options;
  }, [products]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="divWrap">
      <div className="flexCol">
        <div className="flexRow">
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
        <div className="flexCol">
          <div>
            <h3 className="titleProducts">Produtos</h3>
          </div>
          <div className="productContainer">
            {currentProducts.map((product) => (
              <div key={product.id} className="productColumn">
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
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(products.length / productsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  className={`paginationButton ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
