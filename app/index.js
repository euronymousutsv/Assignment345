import {View,Text,SafeAreaView, StyleSheet} from "react-native"
import { AuthenticationForm } from "../components/AuthenticationForm"
import {Link} from "expo-router"

export default function Home(){
return(
    <SafeAreaView style={styles.container}>
         <AuthenticationForm title="Register for an account" action = "Sign Up"/>
    </SafeAreaView>
)


}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "lightblue",
    justifyContent:"center",
     }
})