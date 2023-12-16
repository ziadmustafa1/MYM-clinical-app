/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
const FavoriteCard = () => {

  const api_url = 'https://fakestoreapi.com/products';
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
    <div className="mx-8">
      <div className="card grid grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <div className="relative h-52 col-span-2 md:col-span-1 shadow-2xl my-2 p-5 rounded-xl bg-slate-100" key={product.id}>
                <div className="absolute left-0 top-6 card-o px-2 py-1 rounded-lg">
                  50%
                </div>
                <div className="absolute right-2 top-6">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.62 19.8784C11.28 20.0029 10.72 20.0029 10.38 19.8784C7.48 18.8517 1 14.5685 1 7.30892C1 4.10432 3.49 1.5116 6.56 1.5116C8.38 1.5116 9.99 2.42423 11 3.83467C12.01 2.42423 13.63 1.5116 15.44 1.5116C18.51 1.5116 21 4.10432 21 7.30892C21 14.5685 14.52 18.8517 11.62 19.8784Z" fill="#224A46" stroke="#224A46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
                <div className="absolute right-14 md:right-24">
                  <img src={product.image} alt="logo" className="img-card" />
                </div>
                <h1 className="absolute bottom-16">
                {product.title}
                </h1>
                <div className="absolute bottom-2 right-0 left-2">
                  <div className="">
                    <p>{product.price}$</p>
                    <div className="px-2">
                    <button className="btn-cart p-1 w-full">
                    add to cart
                  </button>
                  </div>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteCard;