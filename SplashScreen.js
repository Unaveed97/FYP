import React,{Component} from'react'
import {StyleSheet,View,Image,StatusBar,SafeAreaView,Animated,Easing,Dimensions}from 'react-native'   
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { tsExportAssignment, thisExpression } from '@babel/types'

var {width,height} = Dimensions.get('window'); 
class ImageLoader extends Component {
    state = {
      opacity: new Animated.Value(0),
    }
  
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 0.8,
        delay: 700,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
  
    render() {
      return (
        <Animated.Image
          onLoad={this.onLoad}
          {...this.props}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  })
                },
              ],
            },
            this.props.style,
          ]}
        />
      );
    }
}

export default class Splash extends Component{
    constructor(props){
      super(props);
      this.state={
        fadeValue: new Animated.Value(0),
        xValue: new Animated.Value(0),
      }
    }

    _fadeAnimation = () => {
      Animated.timing(this.state.fadeValue,{
        toValue: 1,
        duration: 3000,
      }).start()
    }

    _moveAnimation = () => {
      Animated.timing(this.state.xValue,{
        toValue: width + 60,
        duration: 1000,
        asing: Easing.elastic(50),
      }).start()
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#3399CC" barStyle="light-content" />
                    <View style={styles.Background}>
                    <Animated.Image source = {require('../Images/SuitCase.png')}
                      style = {[styles.AppLogo,
                        {left:this.state.xValue}
                      ]}> 
                        {this._moveAnimation()}
                      </Animated.Image>
                    <ImageLoader style={styles.AppName} source={require('../Images/AppName.png')}/>
                    </View>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        height: hp('100%'), 
        width: wp('100%'),
        backgroundColor:'#3399CC',
        flexDirection:'column',
        justifyContent: 'center',
    },
    Background: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor:'#3399CC',
        justifyContent:'center',
        flex: 1,
    },
    Applogo: {
        alignSelf: 'center',
        justifyContent:'center',
        height: 240,
        width:240,
    },
    AppName: {
        marginTop: 5,
        height: 70,
        width: 290,
        alignSelf:'center',
    },
    AppLogo: {
      marginLeft:-400,
      height: 195,
      width: 275,
      backgroundColor:'transparent',
    },
})