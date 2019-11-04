import React,{Component} from'react';
import {StyleSheet,Text,View,Image,
    TouchableWithoutFeedback,StatusBar
    ,TextInput,SafeAreaView,Keyboard
    ,TouchableOpacity,KeyboardAvoidingView}from 'react-native';

export default class Login extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>  
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior="padding" style={styles.container} style={{ flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
                    <TouchableWithoutFeedback  style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.container}>
                                <View style={styles.LogoContainer}>
                                    <Image style={styles.logo} source={require('../Images/MatchCatchLogo.png')}></Image>
                                    <Text style={styles.title}>We make Your Career.</Text>
                                </View>
                                <View style={styles.InfoContainer}>
                                    <TextInput style={styles.input}
                                        placeholder="Enter UserName/Email"
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        keyboardType='email-address'
                                        returnKeyType='next'
                                        autoCorrect={false}
                                        onSubmitEditing={()=> this.ref.txtPassword.focus()}
                                    />
                                    <TextInput style={styles.input}
                                        placeholder="Enter Password"
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        returnKeyType='go'
                                        secureTextEntry
                                        autoCorrect={false}
                                        ref={"txtPassword"}
                                    />
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>LogIn</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
/** Style sheet for the app */
const styles = StyleSheet.create({
    container: {
        height:"100%",
        width:"100%",
        flex: 1,
        backgroundColor:'rgb(235,235,235)',
        flexDirection:'column',
    },
    title: {
        fontWeight:'bold',
        fontSize: 18,
        color:'gray',
        textAlign:'center',
        marginTop: 5,
        opacity: 0.9
    },
    LogoContainer: {
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    logo: {
        width:225,
        height:160,
    },
    InfoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 230,
        padding:20,
    },
    input: {
        height:40,
        backgroundColor:'rgba(102,102,153,0.5)',
        borderRadius:15,
        color:'#FFF',
        marginBottom:15,
        paddingHorizontal:10,
    },
    buttonContainer: {
        backgroundColor:"#666699",
        borderRadius:15,
        paddingVertical: 15,
    },
    buttonText: {
        textAlign:'center',
        color:'rgb(255,255,255)',
        fontWeight:'bold',
        fontSize:18,
    },
})