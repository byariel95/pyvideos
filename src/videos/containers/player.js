import React, {Component} from 'react';
import {StyleSheet,ActivityIndicator} from 'react-native';
import { Video}  from 'expo-av';
//import {Video} from 'react-native-video';
import Layout from '../components/layout-video';
import ControlLayout from '../components/control-layout';
import PlayPausa from '../components/play-pause';

 class Player extends Component {

    state = {
        loading: true,
        paused : true
    }
   
    
    onLoadStart = () => {

        this.setState({
            loading: false
        })
        
    };

    playPausa = ()=>{
        this.setState({
            paused: !this.state.paused
        })
    }
     render() {
         return(
            <Layout
             loading={this.state.loading}
             video={
                 <Video
                 style={styles.video}
                 source={{uri:'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4'}}
                 resizeMode="contain" 
                // onBuffer={this.onBuffer}
                 onLoad={this.onLoadStart}
                 //paused={this.state.paused}
                 shouldPlay={this.state.paused}
                
                 />
                 
                }
            loader={
                <ActivityIndicator color='white' size='large' />
            }
            controls={
                <ControlLayout>
                    <PlayPausa
                    onPress={this.playPausa}
                    paused={this.state.paused}
                    >

                    </PlayPausa>
                </ControlLayout>
            }
            >
            </Layout>
         )
         
        
     };
 };


 const styles = StyleSheet.create({
	video:{
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0
	}
})



 export default Player