import React from 'react';
import {View,StyleSheet,Text,ImageBackground} from 'react-native';
import background from '../../../assets/background.png'

function CategoryListLayout (props) {

    return (
        <ImageBackground
                source={background}
                style={styles.container}
            >
            <View> 
                <Text style={styles.title}>{props.title}</Text>
                {props.children}
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 10,
        paddingHorizontal: 10
      
    },
    title:{
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom:10,
        fontWeight: 'bold',
       
    }
    

});

export default CategoryListLayout;
