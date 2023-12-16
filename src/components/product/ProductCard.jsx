import fv from "../../assets/fv.svg";
import add from "../../assets/Cartadd.svg";
import { useEffect, useState } from "react";
const ProductCard = () => {

  const api_url = 'https://fakestoreapi.com/products?limit=4';
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="">
      <div className="card grid grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <div className="relative h-48 col-span-2 md:col-span-1 shadow-2xl my-2 p-5 rounded-xl bg-slate-100" key={product.id}>
                <div className="absolute left-0 top-6 card-o px-2 py-1 rounded-lg">
                  50%
                </div>
                <div className="absolute right-2 top-6">
                  <img src={fv} alt="logo" />
                </div>
                <div className="absolute right-14 md:right-24">
                  <img src='https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reskin/ar_AE/adult/Panadol%20Advance%20455x455.jpg.rendition.455.455.jpg?auto=format' alt="logo" className="img-card" />
                </div>
                <h1 className="absolute bottom-10">
                Vitaferrol B12 Vitaferrol B12
                </h1>
                <div className="absolute bottom-2 right-0 left-2">
                  <div className="flex justify-between">
                    <p>{product.price}$</p>
                    <img src={add} alt="logo" className="" />
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
