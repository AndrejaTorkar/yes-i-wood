// ATorkar started writing code
// File formatted with Prettier
// RESOURCES: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// RESOURCES: https://reactnative.dev/docs/flexbox

import { StyleSheet } from "react-native";
import { field_height, field_width } from "./constants";

// Green-orange color scheme
const light = "#E5C287";
const light2 = "#898121";
const logo = "#898121";
const dark = "#FDA403";
const dark2 = "#E8751A";

// // Blue-pink color scheme
// const light = "#EFECEC";
// const light2 = "#FFB0B0";
// const logo = "#0C2D57";
// const dark = "#FC6736";
// const dark2 = "#0C2D57";

// // Blue-red color scheme
// const light = "#FDE767";
// const light2 = "#F3B95F";
// const logo = "#6895D2";
// const dark = "#6895D2";
// const dark2 = "#D04848";


export const styles = StyleSheet.create({
    ///////////////////////////////////////
    ///////// Landing site styles /////////
    ///////////////////////////////////////

      landingContainer: {
      flex: 1,
      justifyContent: "top",
      alignItems: "center",
      padding: 20,
      backgroundColor: light,
    },
    logo: {
      fontSize: Math.min(field_width, field_height) * 0.095,
      fontWeight: "bold",
      marginBottom: 20,
    },
    landingTitle: {
      fontSize: Math.min(field_width, field_height) * 0.045,
      fontWeight: "bold",
      marginBottom: 15,
    },
    industryButtonGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-evenly',
    },
    industryButton: {
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      width: field_width * 0.95,
      height: field_width * 0.4,
    },
    industryButtonText: {
      color: "#000",
      fontSize: Math.min(field_width, field_height) * 0.07,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: light,
    },
    calcButton: {
      backgroundColor: light2,
      width: field_width * 0.95,
      height: field_width * 0.15,
      margin: 10,
      justifyContent: "center",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: dark2,
  },
  calcButtonText: {
    fontSize: Math.min(field_width, field_height) * 0.07,
    fontWeight: "bold",
      textAlign: "center",
  },
    loginRow: {
      flex: 1,
        width: field_width * 0.95,
        flexDirection: "row", 
        justifyContent: "center",
    },
    loginButton: {
      flex: 1,
        alignContent: "center",
        backgroundColor: light2,
        height: field_width * 0.1,
        marginRight: 5,
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: dark2,
    },
    signupButton: {
      flex: 1,
        alignContent: "center",
        backgroundColor: light,
        height: field_width * 0.1,
        marginLeft: 5,
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: dark2,
    },
    buttonText: {
      fontSize: Math.min(field_width, field_height) * 0.05,
      fontWeight: "bold",
        textAlign: "center",
    },
    ///////////////////////////////////////
    ////////// Shops' list styles /////////
    ///////////////////////////////////////
    industryContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: light,
    },
    industryTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    shopCellContainer: {
      width: field_width * 0.95,
      height: Math.min(field_width, field_height) * 0.4,
      borderRadius: 10,
      marginBottom: 15,
    },
    shopCellBackground: {
      flex: 1,
      justifyContent: "flex-end",
      padding: 10,
      opacity: 0.8,
      justifyContent: "top",
    },
    shopCellContent: {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      padding: 10,
      borderRadius: 10,
    },
    shopName: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    shopAddress: {
      fontSize: 16,
      marginBottom: 5,
    },
    tagsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",    
    },
    tag: {
      backgroundColor: "white",
      padding: 5,
      marginRight: 5,
      marginBottom: 5,
    },
    shopDetailContainer: {
      flex: 1,
      padding: 20,
      alignItems: "center",
      backgroundColor: light,
    },
    shopDescription: {
      fontSize: 16,
      marginTop: 15,
      marginBottom: 10,
    },
    shopImage: {
      width: field_width * 0.95,
      height: field_width * 0.5,
      borderRadius: 10,
      marginTop: 10,
    },
    ///////////////////////////////////////
    /////////// Calculator styles /////////
    ///////////////////////////////////////
    calc_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    calcTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#FFF', 
    },
    calcInput: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#FFF',
    },
    dropdownCalcContainer: {
      width: '100%',
      marginBottom: 10,
    },
    calcDropdown: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      justifyContent: 'center',
      backgroundColor: '#FFF',
    },
    dropdownCalcText: {
      fontSize: 16,
    },
    optionsCalcContainer: {
      width: '100%',
      position: 'absolute',
      top: 90,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#FFF',
      zIndex: 1,
    },
    calcOption: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    priceCalcText: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFF', 
    },
    backgroundCalcImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    ///////////////////////////////////////
    ///////////// Login styles ////////////
    ///////////////////////////////////////
    loginPgContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: light,
    },
    loginPgTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    loginPgInput: {
      width: "100%",
      height: 40,
      borderColor: dark2,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    loginPgButton: {
      backgroundColor: dark2,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    loginPgButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    loginPgLink: {
      marginTop: 20,
    },
    loginPgLinkText: {
      color: "#555",
      fontSize: 16,
      fontWeight: "bold",
    },
});

// ATorkar stopped writing code