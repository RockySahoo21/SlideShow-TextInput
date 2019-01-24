import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions, TextInput, Picker } from 'react-native';
import DatePicker from 'react-native-date-picker';

var Device_Width = Dimensions.get('window').width ;

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { mode: '',date: new Date()};
   }


 render() {

   return (

      <View style={styles.MainContainer}>

          <ScrollView 
              horizontal = { true } 
              showsHorizontalScrollIndicator = {true}
              pagingEnabled = { true } >

                <View style = { styles.FirstBlockStyle }>
                  
                  <View style = { styles.FirstView }>

                  <View style = {{justifyContent:'center',marginTop:80}}>
                  
                  
                    <TextInput
                    style={{height: 60,margin:5,color:'#fff'}}
                    placeholder = 'From City'
                    placeholderTextColor = '#fff'
                    underlineColorAndroid = '#fff'
                    />

                    <TextInput
                    style={{height: 60,margin:5,color:'#fff'}}
                    placeholder = 'To City'
                    placeholderTextColor = '#fff'
                    underlineColorAndroid = '#fff'
                    />

                    <View style = {{ flexDirection:'row',margin: 5 }}>

                    <Text style={{color:'#fff',marginTop:40,fontSize:13}}>Travel Date</Text>
                    <DatePicker
                      date={this.state.date}
                      onDateChange={date => this.setState({ date })}
                      style={{height: 60,marginTop:20,marginLeft:5,color:'#fff',width:220}}
                    />
                     
                    </View>

                  </View>

                  </View>

                </View>

                <View style = { styles.SecondBlockStyle }>
                  
                  <View style = { styles.FirstView }>
                    
                    <View style = {{justifyContent:'center',marginTop:80}}>
                  
                  
                    <TextInput
                    style={{height: 60,margin:5,color:'#fff'}}
                    placeholder = 'PNR'
                    placeholderTextColor = '#fff'
                    underlineColorAndroid = '#fff'
                    />

                   <Picker
                    selectedValue={this.state.mode}
                    style={{ height: 60,margin:5,color:'#fff' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({mode: itemValue})}>
                    <Picker.Item label="Mode Of Travel" value="Mode Of Travel" />
                    <Picker.Item label="Flight" value="Flight" />
                    <Picker.Item label="Train" value="Train" />
                    <Picker.Item label="Bus" value="Bus" />
                  </Picker>

                    <TextInput
                    style={{height: 60,margin:5,color:'#fff'}}
                    placeholder = 'Purpose Of Travel'
                    placeholderTextColor = '#fff'
                    underlineColorAndroid = '#fff'
                    />


                  </View>
  

                  </View>
                   
                </View>

          
          </ScrollView>

      </View>

        
   );
 }
}

const styles = StyleSheet.create({

  MainContainer :{

    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  FirstBlockStyle:{

    backgroundColor: '#4a6082',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: Device_Width,

  },

  FirstView:{

    backgroundColor: '#384962',
    height:400,
    width:300,
    margin:5

  },

  SecondBlockStyle:{
    
    backgroundColor: '#4a6082',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: Device_Width 
    
  }


});