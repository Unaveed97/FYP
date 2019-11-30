import React,{Component } from'react';
import {StyleSheet,Text,View,Image,
    TouchableWithoutFeedback,StatusBar
    ,TextInput,SafeAreaView,Keyboard
    ,TouchableOpacity,KeyboardAvoidingView,Navigator,Animated}from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Icon,Button,Container,Header,Content,Left,Card,CardItem,Title} from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
 

export default class Login2 extends Component{
    render(){
        return(
            <Container>
                <StatusBar backgroundColor="#0f1654" barStyle="light-content" /> 
                <SafeAreaView style={styles.container}>
                    <View style={styles.Background}>
                        <Card style={styles.cardstyle}>
                            <CardItem header style={styles.CardItemstyle}>
                                <View style={styles.CardItemstyle}>
                                    <Text style={styles.CardText}>
                                        Please Select Registration Mode
                                    </Text>
                                </View>
                            </CardItem>
                        </Card>
                       <Card style={styles.cardstyle2}>
                           <CardItem style={styles.RecItem}>
                               <View>
                                    <TouchableOpacity style={styles.recuriterLogin}>
                                        <Image source = {require('../Images/Builsing.png')}
                                            style={styles.loginImage1}> 
                                        </Image>
                                    </TouchableOpacity>
                                    <Text style={styles.recText}>Login as job {"\n"}  Recuriter</Text>
                               </View>
                           </CardItem>
                           <CardItem style={styles.SeekItem}>
                               <View>
                                    <TouchableOpacity style={styles.seekerLogin}>
                                        <Image source = {require('../Images/jobseeker.png')}
                                            style={styles.loginImage1}> 
                                        </Image>
                                    </TouchableOpacity>
                                    <Text style={styles.recText}>Login as job {"\n"}     Seeker</Text>
                               </View>
                           </CardItem>
                       </Card>
                    </View>
                    <Text style={styles.textRegister}> ───────────────  Or  ───────────────</Text>
                    <TouchableOpacity
                        style={styles.SignUpBtn}>
                        <Text style={styles.BtnText}> Sign Up </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp('100%'), 
        width: wp('100%'),
    },
    cardstyle: {
        marginTop:-1,
        marginLeft:0,
        marginRight:0,
        width: wp('100%'),
        height: hp('40%'),
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#0f1654',
    },
    CardItemstyle: {
        backgroundColor:'#0f1654',
    },
    cardstyle2: {
        width: wp('90%'),
        height: hp('48%'),
        marginTop:-50,
        marginLeft:20,
        borderRadius:20,
        elevation:10,
        flexDirection: 'row',
    },
    CardText: {
        marginTop:150,
        fontSize:19,
        fontFamily:'lucida grande',
        color:'white',
    },
    SignUpBtn: {
        marginTop:20,
        width:wp('90%'),
        height:hp('7%'),
        alignSelf:'center',
        borderRadius:50,
        backgroundColor:'#0f1654',
        fontFamily:'Roboto',
    },
    BtnText: {
        marginTop:8,
        alignSelf:'center',
        justifyContent:'center',
        fontSize:25,
        color:'white',
    },
    seekerLogin: {
        width:120,
        height:120,
        backgroundColor:'#0f1654',
        borderRadius:20,
        elevation:10,
        alignItems:'center',
        justifyContent:'center',
    },
    recuriterLogin: {
        width:120,
        height:120,
        backgroundColor:'#0f1654',
        borderRadius:20,
        elevation:10,
        alignItems:'center',
        justifyContent:'center',
    },
    textRegister: {
        marginTop:15,
        alignSelf:'center',
        opacity:0.2,
    },
    loginImage1: {
        alignSelf: 'center',
        justifyContent:'center',
        marginBottom:6,
        height: 80,
        width: 80,
    },
    RecItem: {
        alignSelf:'center',
        marginLeft:10,
    },
    recText: {
        alignSelf:'center',
        fontSize:15,
        marginTop:10,
        fontFamily:'Roboto',
    },
    SeekItem: {
        alignSelf:'center',
        marginLeft:10,
    },
})