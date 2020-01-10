import React from 'react';
import { useSelector } from 'react-redux';

import { Image, Text, TouchableHighlight } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from './assets/images/logo.png';

import Home from './pages/Home';
import Cart from './pages/Cart';

const LogoTitle = withNavigation(({ navigation }) => {
  return (
    <TouchableHighlight
      style={{
        marginLeft: 10,
      }}
      onPress={() => navigation.navigate('Home')}>
      <Image source={logo} />
    </TouchableHighlight>
  );
});

const CartButton = withNavigation(({ navigation }) => {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <TouchableHighlight
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate('Cart')}>
      <>
        <Text
          style={{
            color: '#fff',
            borderRadius: 100 / 2,
            backgroundColor: '#7159c1',
            width: 20,
            justifyContent: 'center',
            textAlign: 'center',
            marginRight: 2,
          }}>
          {cartSize || 0}
        </Text>
        <Icon
          style={{
            marginRight: 10,
          }}
          name="shopping-basket"
          size={30}
          color="#fff"
        />
      </>
    </TouchableHighlight>
  );
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#191920',
        },
        headerLeft: <LogoTitle />,
        headerRight: <CartButton />,
      },
    },
  ),
);

export default Routes;
