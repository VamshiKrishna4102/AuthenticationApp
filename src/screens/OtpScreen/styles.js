import { StyleSheet, Dimensions } from "react-native";
const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heding: {
    fontWeight: "bold",
    fontSize: 18,
    // font
  },
  image: {
    width: DeviceWidth * 0.6,
    height: DeviceWidth * 0.6,
  },
  sent_msg:{
    fontSize: 15,
    color:'#333',
    textAlign:'center'
  },
mobile:{
    fontWeight: "bold",
    fontSize: 18,
    color:'#333',
    textAlign:'center'
},
  submit: {
    backgroundColor:'#E44532',
    width:DeviceWidth*0.8,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    marginTop:25

  },
  submit_text: {
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  },
  term_text: {
    textAlign:'center',
    marginTop:35,
    color:'#d3d3d3',
    width:DeviceWidth*0.8

  },
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderRadius:9,
    backgroundColor:'#F9F9F9'
    // borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  otp_box:{
    width:DeviceWidth*0.95,
    alignSelf:'center',
    alignItems:'center'
  }
});
export default styles;
