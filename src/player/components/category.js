import React from 'react';
import {View,Text,ImageBackground,StyleSheet} from 'react-native';

 function Category (props ){

    return(
        <ImageBackground
        style={styles.wrapper} 
        source={{
            uri: props.background_image
        }}
        >
            <Text style={styles.genre}>
                {props.genres[0]}
            </Text>
        </ImageBackground>
        )

 };

 export default Category;

const styles = StyleSheet.create(
    {
        wrapper: {
            height: 120,
            width:250,
            borderRadius: 15,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center'


        },
        genre:{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            textShadowColor: 'rgba(0,0,0, .75)',
            textShadowOffset: {
                width: 2,
                height: 2
            },
            textShadowRadius : 0


        }

    }
)