import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import logo from '../../../assets/logo.jpg';

function Header(props) {
  return (
    <View>
      <View style={styles.areasafe}>
        <View style={styles.container}>
          <Image source={logo} style={styles.image} />
          <View style={styles.right}>
            {props.children}
          </View>
        </View>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  areasafe: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#2d387c',
    //flex: 1, 
    padding: 10,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  image: {
    width: 80,
    height: 55,
    resizeMode: 'contain'
  },
  container: {

    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});


export default Header;
