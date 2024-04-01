import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState,useEffect } from "react";


initializeApp(firebaseConfig);

export function AuthenticationForm(props) {
    const[email,setEmail]=useState('')
    const[validEmail,setValidEmail]=useState(false)
    const[Password,setPassword]=useState('')
    const[validPassword,setValidPassword]=useState(false)
    const [loading , setloading]=useState(false);
    const [errorMessage, setErrorMessage] = useState('');

   
    
    

    useEffect(()=>{
        if(email.indexOf('@')>0 && email.indexOf('.')>0){
            setValidEmail(true)
        }
        else{
            setValidEmail(false)
        }
    },[email])





    return (
        <View style={styles.form}>
            <Text style={styles.title}>{props.title}</Text>
            <Text>Email</Text>
            <TextInput 
                style={(validEmail)? styles.validinput:styles.input} 
                value={email}
                onChangeText={ (text)=> setEmail(text) }
                />
            <Text>Password</Text>
            <TextInput 
            style={styles.input} 
            secureTextEntry={true}
            value={Password}
            onChangeText={ (text)=> setPassword(text) }
            />
            <Pressable style={styles.button}   >
                <Text style={styles.buttonText}>{props.action}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        backgroundColor: "white",
        marginHorizontal: 20,
        padding: 20,
        borderRadius:10,


    },
    title: {
        fontSize: 20

    },
    input: {
        borderBottomColor: "#333333",
        borderBottomWidth: 2,
    },
    validinput:{
        borderBottomColor:"#0ac43c",
        borderBottomWidth:2,
        padding:5,

    },
    button:{
        marginTop:30,
        backgroundColor: "darkblue",
        padding: 10,

    },
    buttonText:{
        color:"white",
        textAlign:"center",
    }

})