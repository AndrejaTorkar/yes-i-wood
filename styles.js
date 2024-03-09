import { StyleSheet } from "react-native";
import { field_height, field_width } from "./constants";

export const styles = StyleSheet.create({
    landingContainer: {
      flex: 1,
      justifyContent: "top",
      alignItems: "center",
      padding: 20,
    },
    landingTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    industryButtonGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-evenly',
    },
    industryButton: {
      backgroundColor: "#2B3499",
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      width: field_width * 0.4,
      height: field_width * 0.4 * 0.8
    },
    industryButtonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center"
    },
    loginRow: {
        flexDirection: "row", 
        justifyContent: "center"
    },
    loginButton: {
        alignContent: "center",
        backgroundColor: "yellow",
        width: field_width * 0.3,
        margin: 10,
    },
    signupButton: {
        alignContent: "center",
        backgroundColor: "pink",
        width: field_width * 0.3,
        margin: 10
    },
    buttonText: {
        textAlign: "center"
    },

    industryContainer: {
      flex: 1,
      padding: 10,
    },
    industryTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    shopCellContainer: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      padding: 10,
      marginBottom: 15,
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
    shopDetailContainer: {
      flex: 1,
      padding: 20,
    },
    shopDescription: {
      fontSize: 16,
    },
});
