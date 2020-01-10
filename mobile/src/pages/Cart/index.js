import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';
import Background from '../../components/Background';

import {
  Container,
  ProductList,
  ProductImage,
  ProductTitle,
  PriceTag,
  Item,
  Description,
  DetailedItem,
  ChangeAmount,
  Amount,
  ViewTotal,
  TextTotal,
  BoldText,
  CheckoutButton,
  Text,
  EmptyCartView,
} from './styles';

function Cart() {
  const dispatch = useDispatch();

  const products = useSelector(state => ({
    cart: state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    ),
  }));

  function increment({ id, amount }) {
    dispatch(updateAmountRequest(id, amount + 1));
  }

  function decrement({ id, amount }) {
    dispatch(updateAmountRequest(id, amount - 1));
  }

  function remove(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <Background>
      <Container>
        {products.cart.length ? (
          <>
            <ProductList
              data={products.cart}
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => (
                <>
                  <Item>
                    <ProductImage
                      style={{ width: 50, height: 50 }}
                      source={{ uri: item.image }}
                      alt={item.title}
                    />
                    <Description>
                      <ProductTitle>{item.title}</ProductTitle>
                      <PriceTag>{item.priceFormatted}</PriceTag>
                    </Description>
                    <TouchableHighlight onPress={() => remove(item.id)}>
                      <Icon name="delete-forever" size={26} color="#7159c1" />
                    </TouchableHighlight>
                  </Item>
                  <DetailedItem>
                    <ChangeAmount>
                      <TouchableHighlight onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={26}
                          color="#7159c1"
                        />
                      </TouchableHighlight>
                      <Amount>{item.amount}</Amount>
                      <TouchableHighlight onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={26}
                          color="#7159c1"
                        />
                      </TouchableHighlight>
                    </ChangeAmount>
                    <PriceTag>{item.subtotal}</PriceTag>
                  </DetailedItem>
                </>
              )}
            />
            <ViewTotal>
              <TextTotal>TOTAL</TextTotal>
              <BoldText>{products.total}</BoldText>
              <CheckoutButton>
                <Text>Finalizar</Text>
              </CheckoutButton>
            </ViewTotal>
          </>
        ) : (
          <EmptyCartView>
            <Icon name="remove-shopping-cart" size={50} color="#ddd" />
            <BoldText>Seu carrinho está vazio</BoldText>
          </EmptyCartView>
        )}
      </Container>
    </Background>
  );
}
export default Cart;
