import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import logo from './assets/logo.png';

const Separator = () => (
	<View style={styles.separator}/>
);

export default function App() {
  return (
    <View style={styles.container}>
		<Separator/>
		<Image source={logo} style={{width:150, height:75}}/>
		
		
		<Separator/>
		
		
		<Text style={styles.title}>Login</Text>
		
		<Text>Sign in with your data that you entered during your registration.</Text>
		<Separator/>
		

		<Text>Email/Phone Number</Text>
		
		<TextInput
		style={{
			height:40,
			borderColor: 'gray',
			borderWidth: 1
		}}/>
		
		<Separator/>
		
		<Text>Password</Text>
		
		<TextInput
		style={{
			height:40,
			borderColor: 'gray',
			borderWidth: 1
		}}/>
		
		
		
		<Separator/>
		
		<TouchableOpacity
			style={{
				backgroundColor:'#4E60FF', alignItems:'center'
			}}
			onPress={() => Alert.alert('Login Button pressed')}>
			<Text style={{fontSize:20, color:'#fff'}}>Login</Text>
		</TouchableOpacity>
		
		
		<Separator/>
		
		<TouchableOpacity
			style={{
				alignItems:'center'
			}}
			onPress={() => Alert.alert('forgot password pressed')}>
			<Text style={styles.purp}>Forgot your password?</Text>
		</TouchableOpacity>
		
		<Separator/>
		<Separator/>
		<Separator/>
		<Separator/>
		<Separator/>
		<Separator/>
		
		<TouchableOpacity
			style={{
				alignItems:'center'
			}}
			onPress={() => Alert.alert('forgot password pressed')}>
			<Text>
				Don't have an account?
					<Text style={styles.purp}> Sign up</Text>
			</Text>
		</TouchableOpacity>
		
	</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  title: {
	  fontSize: 50,
	  fontWeight: 'bold',
  },
  separator:{
	  marginVertical: 12,
  },
  purp:{
	  color:'#4E60FF',
  },
  
});

