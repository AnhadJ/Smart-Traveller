import React, { useCallback } from 'react';
import {Image, StyleSheet, TextInput, View, Text, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { useForm } from "react-hook-form";


var num;
var pass;
var name;
function Signup({navigation}){
  const { setValue, handleSubmit } = useForm();
  const onSubmit = useCallback(formData => {
  num = formData['number'];
  pass = formData['password']
    }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );
  return(
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Signup')} ><Image style={styles.img} source={require('./assets/ico-back.png')}></Image></Pressable>
        <Text style={styles.head}>Register</Text>
        <TextInput  style={styles.input}
          keyboardType='numeric'
          placeholder="Mobile Number"
          textContentType='telephoneNumber'
          onChangeText={onChangeField('number')}
        />
        <Text style={styles.content}>Send OTP</Text>
        <TextInput  style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Password"
          onChangeText={onChangeField('password')}
        />
        <View style={styles.content}></View>
        <Pressable style={styles.sub} onPressIn={handleSubmit(onSubmit)} onPress={() => navigation.navigate('Register')}>{({ pressed }) => (<Text style={styles.nex}>Next</Text>)}</Pressable>
    </View>
  );
}

function Register({navigation}){
  const { handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {
      name=formData['name']
      console.log(name,num,pass);
  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );
  return(
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Signup')} ><Image style={styles.img} source={require('./assets/ico-back.png')}></Image></Pressable>
        <Text style={styles.head}>Register</Text>
        <TextInput  style={styles.input}
          autoCompleteType="text"
          placeholder="Username"
          onChangeText={onChangeField('name')}
        />
        <View style={styles.content}></View>
        <Pressable style={styles.sub} onPressIn={handleSubmit(onSubmit)} onPress={() => navigation.navigate('Signup')}>{({ pressed }) => (<Text style={styles.nex}>Signup</Text>)}</Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  head:{
    fontSize: 30,
    fontFamily: "Roboto",
    marginBottom: 40,
  },
  input: {
    borderColor: "black",
    width: "100%",
    borderWidth: 2,
    borderRadius: 0,
    padding: 10,
  },
  sub: {
    marginTop: 10,
    backgroundColor: "black",
    borderRadius: 3,
    height: 40,
  },
  content: {
    paddingTop: 10,
    paddingBottom: 10,
    textDecorationLine: "underline",
  },
  img: {
    width:20,
    height:20,
    marginBottom:20,
    marginTop: 50,
  },
  nex: {
    color: "white",
    alignSelf: "center",
    padding: 10,
  }
});
