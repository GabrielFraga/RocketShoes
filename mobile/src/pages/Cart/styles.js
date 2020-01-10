import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 5px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  justify-content: space-evenly;
`;
export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Item = styled.View`
  flex-direction: row;
`;

export const Description = styled.View`
  flex: 1;
`;

export const ProductImage = styled.Image`
  align-self: center;
  padding: 50px;
`;

export const ProductTitle = styled.Text``;

export const PriceTag = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
`;

export const DetailedItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  background: #ececec;
  border-radius: 4px;
  margin-bottom: 55px;
  align-items: center;
`;

export const ChangeAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.Text`
  width: 50px;
  height: 25px;
  background: #fff;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 4px;
`;

export const ViewTotal = styled.View`
  margin-bottom: 20px;
  align-items: center;
  border-top-color: #ccc;
`;

export const TextTotal = styled.Text`
  font-weight: bold;
  color: #ccc;
  font-size: 18px;
`;

export const BoldText = styled.Text`
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

export const CheckoutButton = styled(RectButton)`
  background-color: #7159c1;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  padding: 10px 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;
export const EmptyCartView = styled.View`
  /* flex: 1; */
  align-items: center;
  padding: 20px;
`;
