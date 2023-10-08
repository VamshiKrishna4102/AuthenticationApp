import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import styles from "./styles";
import { ChevronDownIcon} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.heding}>Login</Text>
        <Image
          source={require("../../assets/images/hero_image.png")}
          style={styles.image}
        />
        <View style={styles.input_box}>
          <TouchableOpacity style={styles.country_code}>
            <Text style={styles.country_code_text}>+91</Text>
            <ChevronDownIcon size={15} style={styles.icon} />
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder="Phone Number" />
        </View>
        <TouchableOpacity style={styles.submit} onPress={()=>navigation.navigate('Otp')}>
          <Text style={styles.submit_text}>Get OTP</Text>
        </TouchableOpacity>
        <Text style={styles.term_text}>
          By signing up, you agree with our Terms and conditions
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
