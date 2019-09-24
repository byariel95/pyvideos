import React from 'react';
import {View,Text, Image,StyleSheet }  from 'react-native';
//import cover from '../../../assets/cover.png'; 

function Suggestion (props){
    
    return (
        <View style= {styles.container}>
            <View style= {styles.left}>
                <Image
                    style={styles.cover}
                    source={{
                        uri: props.medium_cover_image
                    }}
                />
                <View style={styles.genre}>
                    <Text style={styles.genreText} >
                        {props.genres[Math.floor(Math.random()*props.genres.length)]}
                    </Text>
                </View>
            </View>
            <View style= {styles.right}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.year}>{props.year}</Text>
                <Text style={styles.language}>{props.language}</Text>
                <Text style={styles.rating}>{props.rating} Estrellas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
   
    },

    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 18,
        color:'#44546b'
    },
    rating:{
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight:'bold'

    },
    year:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius:5,
        overflow: 'hidden',
        alignSelf: 'flex-start'


    },
    cover:{
        width: 73,
        height: 110,
        resizeMode: 'contain'
    },
    genre:{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7       
    },
    genreText:{
        color: 'white',
        fontSize: 11

    },
    language:{
        color: '#6b6b6b',
        fontSize: 14,

    }

});

export default Suggestion;