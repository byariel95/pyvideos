import React from 'react';
import {View,StyleSheet,Text,ImageBackground} from 'react-native';
import background from '../../../assets/background.png'

function SuggestionListLayout (props) {

    return (
        <ImageBackground
        style={styles.container}
        source={background}
        >
        <View > 
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>

        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 10,
        flex: 1,

    },
    title:{
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom:10,
        fontWeight: 'bold',
        marginLeft: 10
    }
    

});

export default SuggestionListLayout;
