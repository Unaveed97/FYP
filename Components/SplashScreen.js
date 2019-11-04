/** Splash Screen*/
import React,{Component} from'react';
import {StyleSheet,Text,View,Image}from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Splash extends Component{
    /** Renders our interface*/
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.LogoContainer}>
                    <Image style={styles.logo} source={require('../Images/MatchCatchLogo.png')}></Image>
                    <Text style={styles.title}>Finding Your Dream Job.</Text>
                </View>
            </View>
        )
    }
}

/** Style sheet for the app */
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#333366',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('100%'), 
        width: wp('100%'),
    },
    title: {
        fontWeight:'bold',
        fontSize: 25,
        color:'black',
    },
    LogoContainer: {
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    logo: {
        width:300,
        height:215,
    },
    title: {
        fontWeight:'bold',
        fontSize: 30,
        color:'gray',
        textAlign:'center',
        marginTop: 5,
        opacity: 0.9
    },
})
 
