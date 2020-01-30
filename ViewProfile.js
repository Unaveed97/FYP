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
                                
                            <ScrollView>
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
                                <View>
                                    <Card style={styles.InfoCard}>
                                        {/* Personal Infor Card*/}
                                        <Card style={styles.PersInfo}>
                                            <Text style={styles.HeadText}>Personal Info</Text>
                                            <Card style={styles.DisplayFeild1}>
                                                <TextInput mode='flat' style={styles.inputField} label='First Name'  editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' style={styles.inputField} label='Last Name'   editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' style={styles.inputField} label='Contact Number' editable={false} selectTextOnFocus={false} />
                                                <TextInput mode='flat' style={styles.inputField} label='Address'  editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' style={styles.inputField} label='Email' editable={false} selectTextOnFocus={false}/>
                                            </Card>    
                                        </Card>

                                        {/* Acadmic Infor Card*/}
                                        <Card style={styles.AcadInfo}>
                                            <Text style={styles.HeadText}>Acadmic Info</Text>
                                            <Card style={styles.DisplayFeild2}>
                                                <TextInput mode='flat' style={styles.inputField} label='Bachlors Degree'  editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' style={styles.inputField} label='Institution Name'   editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' style={styles.inputField} label='Duration From' editable={false} selectTextOnFocus={false} />
                                                <TextInput mode='flat' style={styles.inputField} label='Duration To'  editable={false} selectTextOnFocus={false}/>   
                                            </Card>
                                        </Card>
                                        
                                        {/* Job Infor Card*/}
                                        <Card style={styles.SkillInfo}>
                                        <Text style={styles.HeadText}>Profesional Info</Text>
                                            <Card style={styles.DisplayFeild3}>
                                                <TextInput mode='flat' style={styles.inputField} label='Working Experiance'  editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' style={styles.inputField} label='Organization Name'   editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' style={styles.inputField} label='Working Designation' editable={false} selectTextOnFocus={false} />
                                                <TextInput mode='flat' style={styles.inputField} label='Working Duration'  editable={false} selectTextOnFocus={false}/>   
                                                <TextInput mode='flat' multiline={true} style={styles.inputField} label='Skills Discription'  editable={false} selectTextOnFocus={false}/>
                                                <TextInput mode='flat' multiline={true} style={styles.inputField} label='Extra Curlicular Discription'  editable={false} selectTextOnFocus={false}/>
                                            </Card>
                                        </Card>

                                        {/* buttons Card*/}
                                        <View>
                                            <CardItem style={styles.BtnCard}>
                                                    <LinearGradient colors={['#4c669f', '#0f1654', '#3b5998']} style={styles.BtnGradiant}>
                                                        <TouchableOpacity style={styles.BtnEdit}>
                                                            <Text style={styles.BtnsText}>Edit Profile</Text>
                                                        </TouchableOpacity>
                                                    </LinearGradient>
                                                    <LinearGradient colors={['#4c669f', '#0f1654', '#3b5998']} style={styles.BtnGradiant}>
                                                        <TouchableOpacity style={styles.BtnView}>
                                                            <Text style={styles.BtnsText}>View Cv</Text>
                                                        </TouchableOpacity>
                                                    </LinearGradient>   
                                            </CardItem>
                                        </View>
                                    </Card>
                                </View>
                            </ScrollView>
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
    InfoCard: {
        flex: 1,
        alignSelf:'center',
        height: hp('146%'),
        width: wp('92%'),
        marginTop:-140,
        elevation: 20,
        borderRadius:15,
        flexDirection:'column',
    },
    CardItems: {
        flex: 2,
        flexDirection:'column',
    },
    PersInfo: {
        height:hp('40%'),
        width:wp('85%'),
        backgroundColor:'rgb(245,245,245)',
        marginTop:15,
        elevation:10,
        borderRadius:15,
        alignSelf:'center',
    },
    AcadInfo: {
        height:hp('33.5%'),
        width:wp('85%'),
        backgroundColor:'rgb(245,245,245)',
        marginTop:15,
        elevation:10,
        borderRadius:15,
        alignSelf:'center',
    },
    SkillInfo: {
        height:hp('46.5%'),
        width:wp('85%'),
        backgroundColor:'rgb(245,245,245)',
        marginTop:15,
        elevation:10,
        borderRadius:15,
        alignSelf:'center',
    },
    BtnCard: {
        marginTop:15,
        height:hp('15%'),
        width:wp('85%'),
        borderRadius:15,
        backgroundColor:'rgb(245,245,245)',
        elevation:10,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',

    },
    BtnGradiant: {
        height:hp('8%'),
        width:wp('38%'),
        borderRadius:20,
        alignSelf:'center',
    },
    BtnEdit: {
        marginLeft:26,
        marginTop:18,
    },
    BtnView: {
        marginLeft:38,
        marginTop:18,
    },
    BtnsText: {
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    HeadText: {
        marginLeft:15,
        marginTop:10,
        fontSize:15,
        fontWeight:'bold',
        color:'rgba(0,0,0,0.3)'
    },
    DisplayFeild1: {
        height:hp('34%'),
        width:wp('80%'),
        marginTop:5,
        alignSelf:'center',
        elevation:1,
        borderRadius:15,
        backgroundColor:'rgb(245,245,245)',
    },
    DisplayFeild2: {
        height:hp('27.5%'),
        width:wp('80%'),
        marginTop:5,
        alignSelf:'center',
        elevation:1,
        borderRadius:15,
        backgroundColor:'rgb(245,245,245)',
    },
    DisplayFeild3: {
        height:hp('40.5%'),
        width:wp('80%'),
        marginTop:5,
        alignSelf:'center',
        elevation:1,
        borderRadius:15,
        backgroundColor:'rgb(245,245,245)',
    },
    inputField: {
        width:wp('78%'),
        height:hp('6%'),
        fontSize:15,
        marginTop:5,
        marginLeft:5,
        backgroundColor: 'rgba(230,230,230,0.4)',
        borderColor: 'rgba(245,245,245,0.2)',
    }
    
})