import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import EmployeeButton from "./custom/EmployeeButton";
import MaterialUnderlineTextbox from "../components/custom/MaterialUnderlineTextbox";
import MaterialButtonPink from "../components/custom/MaterialButtonPink";

function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <EmployeeButton
                style={styles.employeeButton}

            ></EmployeeButton>
            <View>
                <Image
                    source={require("../assets/images/HandsDown.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
            </View>
            <TextInput
                value={"Table Number"}
                onChangeText={text => onChangeText(text)}
                keyboardType={"number-pad"}
                style={styles.inputStyle}
            ></TextInput>
            <MaterialButtonPink
                style={styles.materialButtonPink}
            ></MaterialButtonPink>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: "rgba(6,6,21,0.84)"
    },
    employeeButton: {
        alignSelf: "flex-end",
        width: 100,
        height: 36,
        marginTop: 20,
        marginLeft: 256
    },
    materialUnderlineTextbox: {
        width: 190,
        height: 97,
        marginTop: 371,
        alignSelf: "center"
    },
    materialButtonPink: {
        width: 189,
        height: 54,
        marginTop: 57,
        alignSelf: "center"
    },
    inputStyle: {
        alignSelf: "center",
        fontSize: 30,
        color:"#f00",
        fontFamily: "roboto-regular",
        borderBottomWidth: 1,
        borderBottomColor: "#f00",
        textAlign: "center",
        width: 200,
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: "center"
    },
});

export default WelcomeScreen;
