import React,{Component} from'react'
import {StyleSheet,Text,View,TouchableOpacity,KeyboardAvoidingView,StatusBar,Image}from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Container } from 'native-base'
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';


export default class UploadCv extends Component{
  state={FileSource:null}

  constructor(props) {
    super(props);
    //Initialization of the state to store the selected file related attribute
    this.state = {
      singleFile: '',
    };
  }

  async selectOneFile() {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      //Setting the state to show single file attributes
      this.setState({ 
        FileSource:res.uri,
        singleFile: res });
        FileViewer.open(res.uri)
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }
  async ShowFile() {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.show({
        type: [DocumentPicker.types.allFiles],
      });
      //Setting the state to show single file attributes
      this.setState({ 
        FileSource:res.uri,
        singleFile: res });
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }


    render(){
        return(
                <Container style={styles.container}>
                    <KeyboardAvoidingView>
                    <StatusBar backgroundColor="#0f1654" barStyle="light-content" />
                        <View>
                            <Text style={styles.MainText}>Hello World</Text>
                            <TouchableOpacity 
                              style={styles.UploadBtn}
                              onPress={this.selectOneFile.bind(this)}>
                                <Text style={styles.BtnText}>Click Me To Upload File</Text>
                            </TouchableOpacity>
                            {/*Showing the data of selected Single file*/}
                            <Text style={styles.textStyle}>
                                File Name:{' '}
                                {this.state.singleFile.name ? this.state.singleFile.name : ''}
                                {'\n'}
                                Type: {this.state.singleFile.type ? this.state.singleFile.type : ''}
                                {'\n'}
                                File Size:{' '}
                                {this.state.singleFile.size ? this.state.singleFile.size : ''}
                                {'\n'}
                                URI: {this.state.singleFile.uri ? this.state.singleFile.uri : ''}
                                {'\n'}
                            </Text>
                            <View style={{ backgroundColor: 'grey', height: 2, margin: 10 }} />
                            <View>
                              {
                                this.state.FileSource && <Image source={{uri:this.state.FileSource}} style={{width:250,height:250,marginLeft:-10,justifyContent:'center',alignSelf:'center',borderWidth:4,borderColor:'white' }}/>
                              }
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Container>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        height:hp('100%'),
        width:wp('100%'),
        justifyContent:'center',
        alignItems:'center',
    },
    MainText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent:'center',
        alignSelf:'center',
    },
    UploadBtn: {
        height:hp('8%'),
        width:wp('80%'),
        borderRadius:20,
        backgroundColor:'blue',
        justifyContent:'center',
        alignSelf:'center',
    },
    BtnText: {
        color:'white',
        fontWeight:'bold',
        fontSize:15,
        alignSelf:'center',
    },
    imageIconStyle: {
      height: 20,
      width: 20,
      resizeMode: 'stretch',
    },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
})