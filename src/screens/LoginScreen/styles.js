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
  input_box: {
    marginTop:50,
    flexDirection:'row',
    backgroundColor:'#F9F9F9',
    width:DeviceWidth*0.8,
    height:45,
    alignItems:'center',
    paddingHorizontal:25,
    borderRadius:25,
    borderColor:'#D5D5D5',
    borderWidth:2,
  },
  country_code: {
    marginRight:25,
    flexDirection:'row',
    alignItems:'center'
  },
  country_code_text: {
    fontSize:15
  },
  input: {
    fontSize:15
  },
  icon:{
    color:'#202020',
    marginLeft:10
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
});
export default styles;
