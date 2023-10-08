import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import SuccessModal from "../../components/successModal";
const OtpScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.heding}>OTP Verify</Text>
        <Image
          source={require("../../assets/images/hero_image.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.sent_msg}>OTP Sent to</Text>
          <Text style={styles.mobile}>+91 12345 67899</Text>
        </View>
        <View style={styles.otp_box}>
        <OTPInputView
          pinCount={4}
          style={{ width: "80%", height: 100}}
          codeInputFieldStyle={styles.underlineStyleBase}
        />
        </View>
        <TouchableOpacity style={styles.submit} onPress={()=>setModalVisible(!modalVisible)}>
          <Text style={styles.submit_text}>Verify OTP</Text>
        </TouchableOpacity>
        <Text style={styles.term_text}>
          By signing up, you agree with our Terms and conditions
        </Text>
      </View>
      {/* -----success modal ----- */}
      <SuccessModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;
