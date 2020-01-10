import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCartRequest } from "../../store/modules/cart/actions";
import { formatPrice } from "../../util/format";

import api from "../../services/api";

import { ProductList } from "./styles";

function Home() {
  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("products");
      const apiProducts = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));

      setProducts(apiProducts);
    })();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
export default Home;
