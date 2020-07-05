import React,{Component} from 'react';
import {Text, View } from 'react-native';
import {Header,Icon} from 'react-native-elements';
const MyHeader=(props)=>{
    return(
        <Header leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => props.navigation.toggleDrawer()}/>}
        centerComponent={{text:props.title,style:{color:'#90A5A9',fontSize:20,fontWeight:'bold'}}}
        backgroundColor='#EAF8FE'>
        </Header>
    )
}  
export default MyHeader; 

