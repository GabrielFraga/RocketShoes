import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ProductList = styled.FlatList`
  flex: 1;
  align-content: center;
`;

export const List = styled.View`
  flex: 1;
  margin: 5px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  max-width: 250px;
`;

export const ProductTitle = styled.Text`
  flex: 1;
  text-align: left;
`;

export const PriceTag = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const AddProductButton = styled(RectButton)`
  flex-direction: row;
  background-color: #7159c1;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-radius: 4px;
`;

export const CartIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #584694;
  color: #fff;

  padding: 5px;
`;

export const ItemNumber = styled.Text`
  color: #fff;
  padding: 5px;
`;
export const ButtonTitle = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonName = styled.View`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
