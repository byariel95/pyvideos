import React from 'react'; 
import {TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback,Text,StyleSheet} from 'react-native';


function PlayPause (props) {
    return (
        <TouchableHighlight
        onPress={props.onPress}
        style={styles.container}
        hitSlop={{
            left: 5,
            top: 5,
            bottom: 5,
            right: 5
        }}
        >
            {
                props.paused ? <Text style={styles.buttom}>pause</Text> : <Text style={styles.buttom}>play</Text>
            }

        </TouchableHighlight>

    )
}

export default PlayPause;

const styles = StyleSheet.create({
    button:  {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container:  {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }


});