import React,{Component} from'react'
import {StyleSheet,Text,View,TouchableOpacity,KeyboardAvoidingView,StatusBar,FlatList,Image,ScrollView}from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Container,Card,CardItem,} from 'native-base'
import Drawer from 'react-native-drawer'
import LinearGradient from 'react-native-linear-gradient'
import {TextInput} from 'react-native-paper'


console.disableYellowBox = true;

const menu = [
    { 'title': 'Home' },
    { 'title': 'Wishlist' },
    { 'title': 'About us' },
    { 'title': 'Contact us' },
    { 'title': 'Log out' }
]

export default class ViewProfile extends Component{
 
    renderDrawer() {
        //SlideMenu
        return (
            <Container style={styles.menuContainer}>     
                <View style={styles.overlay}/>
                <View style={styles.DrawerHeader}>
                    <View style={styles.effect}></View>
                   <Image style={styles.DrawerImage} source={require('../Images/BackGround.jpg')}/>
                </View>
                <View style={styles.menuContainer}>
                    <FlatList
                        style={{ flex: 1.0 }}
                        data={menu}
                        extraData={this.state}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.menuTitleContainer}>
                                    <Text style={styles.menuTitle}
                                        key={index}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}/>
                </View>
                <View>
                    <LinearGradient colors={['#4c669f', '#0f1654', '#3b5998']} style={styles.DrawerGradiant}>
                        <View style={styles.DrawerFooter}>
                            <Text style={styles.FooterText}>MatchCatch</Text>
                        </View>
                    </LinearGradient>
                </View>
            </Container>
        )
    }

    openDrawer() {
        this.drawer.open()
    }

    closeDrawer() {
        this.drawer.close()
    }

    render(){
        return(
            <Container style={styles.container}>
                <KeyboardAvoidingView>  
                    <StatusBar backgroundColor="#0f1654" barStyle="light-content" />
                    <View style={styles.container}>
                        <Drawer 
                            ref={(ref) => this.drawer = ref}
                            content={this.renderDrawer()}
                            type='static'
                            tapToClose={true}
                            openDrawerOffset={0.35}
                            styles={drawerStyles}>
                            <View style={styles.headerContainer}>
                                <View style={styles.menuButton}>
                                    <TouchableOpacity
                                        onPress={this.openDrawer.bind(this)}>
                                        <Image style={{width:50, height:34.5, marginTop:20,marginLeft:20}} source={require('../Images/DrawerButton.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* //Top View */}
                            <View style={styles.FullBody}>
                                <View>
                                    <LinearGradient colors={['#0f1654','#4c669f', '#3b5998']} style={styles.linearGradient}>
                                        <View>
                                            <Image source={require('../Images/me.png')} style={styles.MeLogo}/>
                                        </View>
                                    </LinearGradient>
                                </View>
                            </View>
                            {/* //Bottom View */}
                            <View >
                                <Card style={styles.InfoCard}>
                                    <View >
                                        <View>
                                            <CardItem style={styles.FormCard}>
                                                <Text style={styles.HeadText}>Personal Info</Text>
                                                <ScrollView>
                                                    <View style={styles.InputFeilds}>
                                                        <TextInput mode='flat' style={styles.input2} label='First Name'/>
                                                        <TextInput mode='flat' style={styles.input3} label='Last Name'/>
                                                        <TextInput mode='flat' style={styles.input3} label='Contact Number'/>
                                                        <TextInput mode='flat' style={styles.input3} label='Address'/>
                                                        <TextInput mode='flat' style={styles.input3} label='Email'/>
                                                    </View>    
                                                </ScrollView>
                                            </CardItem>
                                        </View>
                                    </View>
                                    {/*Bottom buttons*/}
                                    <View>
                                        <CardItem style={styles.BtnCard}>
                                            <View style={styles.BtnView}>
                                                <View style={styles.BottomBtnProgress}>    
                                                    <LinearGradient colors={['#4c669f', '#0f1654', '#3b5998']} style={styles.BtnGradiant}>
                                                        <TouchableOpacity style={styles.Btn} >
                                                            <Text style={styles.BtnText1}>Edit Profile</Text>
                                                        </TouchableOpacity>
                                                    </LinearGradient>   
                                                    <LinearGradient colors={['#4c669f','#0f1654', '#3b5998']} style={styles.BtnGradiant}>
                                                        <TouchableOpacity style={styles.Btn}>
                                                            <Text style={styles.BtnText2}>View CV</Text>
                                                        </TouchableOpacity>
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                        </CardItem>
                                    </View> 
                                    
                                </Card>
                            </View>
                            
                        </Drawer>

                    </View>
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const drawerStyles = {
    drawer: {
        flex: 1.0,
        backgroundColor: 'rgba(6,9,33,0.2)',
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white'
    }
}

const styles=StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
    },
    TopContainer: {
        height: hp('40%'),
        width: wp('100%'),
        backgroundColor:'#0f1654',
    },
    headerContainer: {
        height:hp('10%'),
        flexDirection: 'row',
        backgroundColor: '#0f1654',
    },
    menuButton: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        tintColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    menuTitleContainer: {
        height: 60,
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
    },
    menuTitle: {
        width:'100%',
        color: '#0f1654',
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'center',
        alignSelf:'center',
    },
    menuContainer: {
        flex: 1.0,
        backgroundColor: 'white',
        elevation:25,
    },
    
    DrawerImage: {
        height: hp('20%'),
        width: wp('100%'),
        opacity:0.5,
        elevation:2,
    },
    effect:{
        height: hp('20%'),
        width: wp('100%'),
        backgroundColor:'#0f1654',
        position: 'absolute'
    },
    DrawerFooter:{
        height: hp('10%'),
        width: wp('100%'),
        justifyContent:'center',
    },
    DrawerGradiant: {
        width: wp('100%'),
        height: hp('10%'), 
    },
    FooterText:{
        color:'white',
        fontWeight:'bold',
        justifyContent:'center',
        fontSize:18,
        marginLeft:150,
    }, 
    linearGradient: {
        width:wp('110%'),
        height:hp('40%'), 
    },
    MeLogo: {
        width:wp('46%'),
        height:hp('22.5%'),
        marginTop:-10,
        marginLeft:-20,
        justifyContent:'center',
        alignSelf:'center',
    },
    InfoCard:{
        height:hp('65%'),
        width:wp('90%'),
        marginTop:-140,
        borderRadius:15,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(250,250,250)',
        elevation:10,
    },
    FormCard: {
        height:hp('50%'),
        width:wp('85%'),
        marginTop:-70,
        backgroundColor:'rgb(245,245,245)',
        borderRadius:15,
        alignSelf:'center',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
    HeadText: {
        fontSize:15,
        fontWeight:'bold',
        color:'rgba(0,0,0,0.5)'
    },
    InputFeilds: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    input3: {
        width:wp('75%'),
        backgroundColor: '#e8eaf6',
        borderColor: 'rgba(0,0,0,0.2)',
        marginTop:15,
    },
    input2: {
        width:wp('75%'),
        backgroundColor: '#e8eaf6',
        borderColor: 'rgba(0,0,0,0.2)',
    },
    BtnCard: {
        marginTop:5,
        marginBottom:-60,
        height:hp('12%'),
        width:wp('85%'),
        borderRadius:15,
        backgroundColor:'rgb(245,245,245)',
        elevation:10,
    },
    BtnView: { 
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    BottomBtnProgress: {
        flexDirection: 'row',
    },
    BtnGradiant: {
        height:hp('8%'),
        width:wp('38%'),
        borderRadius:20,
        marginLeft:7,
        
    },
    Btn: {
        height:hp('8%'),
        width:wp('38%'),
        borderRadius:20,
        justifyContent:'center',
        alignSelf:'center',
    },
    BtnText1: {
        marginLeft:30,
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        borderRadius:15,
    },
    BtnText2: {
        marginLeft:42,
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        borderRadius:15,
    },
})