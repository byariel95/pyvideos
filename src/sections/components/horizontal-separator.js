import React from 'react';
import {View, StyleSheet} from 'react-native';
 
function HorizontalSeparator () {

    return(
        <View style={styles.separator}
        />
    )
}

export default HorizontalSeparator;

const styles = StyleSheet.create({

    separator:{
        flex: 1,
        marginHorizontal: 6
    }

});
