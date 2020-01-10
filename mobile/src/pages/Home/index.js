import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { addToCartRequest } from '../../store/modules/cart/actions';
import Background from '../../components/Background';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  ProductList,
  List,
  ProductImage,
  ProductTitle,
  PriceTag,
  AddProductButton,
  CartIcon,
  ButtonTitle,
  ItemNumber,
  ButtonName,
} from './styles';

function Home() {
  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {}),
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('products');
      const apiProducts = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(apiProducts);
    })();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Background>
      <ProductList
        data={products}
        keyExtractor={product => product.id}
        numColumns={2} // Número de colunas
        renderItem={({ item }) => (
          <List>
            <ProductImage
              style={{ width: 100, height: 100 }}
              source={{ uri: item.image }}
              alt={item.title}
            />
            <ProductTitle>{item.title}</ProductTitle>
            <PriceTag>{item.priceFormatted}</PriceTag>
            <AddProductButton onPress={() => handleAddProduct(item.id)}>
              <CartIcon>
                <Icon name="add-shopping-cart" size={18} color="#fff" />
                <ItemNumber>{amount[item.id] || 0}</ItemNumber>
              </CartIcon>
              <ButtonName>
                <ButtonTitle>ADICIONAR</ButtonTitle>
              </ButtonName>
            </AddProductButton>
          </List>
        )}
      />
    </Background>
  );
}
export default Home;
