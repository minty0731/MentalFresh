import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StyleSheet, Alert} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);


const MainMenu = () => {
  return ( 
  <ScrollView>
    <View>
    <Image
      source={{
        uri: 'https://drive.google.com/file/d/1Y-u7QZbZgqbsoBy-TVK_AJmBVRgzaHdI/view?usp=sharing',
      }}
      style={{ width: 100, height: 50}}
    />

    
    <Text style={styles.title}>Login</Text>
    
    <Text>Sign in with your data that you entered during your registration.</Text>
    </View>
    
    <Separator/>
    
    <View>
    <Text>Email / Phone Number</Text>

    
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      defaultValue="Enter your email/phone number here"
    />
    </View>
    
        <Separator/>
    <Text>Password</Text>

    <TextInput
      style={{
        height: 40,
        borderColor: 'blue',
        borderWidth: 1
      }}
      defaultValue="Enter your password here"
    />
    <View>
    <Separator/>
    <Button
      title="Login"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
    </View>
  </ScrollView>
);
};


const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 12,
  },
});


export default MainMenu;