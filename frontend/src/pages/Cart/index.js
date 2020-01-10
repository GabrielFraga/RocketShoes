import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";
import { formatPrice } from "../../util/format";
import {
  updateAmountRequest,
  removeFromCart
} from "../../store/modules/cart/actions";

import { Container, ProductTable, Total } from "./styles";

function Cart() {
  const products = useSelector(state => ({
    cart: state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount)
    })),
    total: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  }));

  const dispatch = useDispatch();

  function increment({ id, amount }) {
    dispatch(updateAmountRequest(id, amount + 1));
  }
  function decrement({ id, amount }) {
    dispatch(updateAmountRequest(id, amount - 1));
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar</button>
        <Total>
          <span>TOTAL</span>
          <strong>{products.total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
