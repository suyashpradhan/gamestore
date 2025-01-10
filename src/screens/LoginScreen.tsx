import React from "react";
import {View} from "react-native";
import {Button, Checkbox, Text, TextInput} from "react-native-paper";
import {Header} from "../components/Header.";

const LoginScreen = () => {
    const [togglePassword, setTogglePassword] = React.useState(false);
    const [termsAndCondition, setTermsAndCondition] = React.useState(false);
    return (
        <View style={{backgroundColor: "#303030", display: "flex", flex: 1}}>
            <Header title="GameStore"/>
            <View style={{paddingHorizontal: 10, marginVertical: 40}}>
                <View style={{marginBottom: 16}}>
                    <TextInput
                        label="Email"
                        mode="outlined"
                    />
                </View>

                <View>
                    <TextInput
                        label="Password"
                        mode="outlined"
                        secureTextEntry={!togglePassword}
                    />
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginVertical: 8,
                        width: "auto",
                        alignItems: "center"
                    }}>
                    <Checkbox
                        status={togglePassword ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setTogglePassword(!togglePassword);
                        }}
                        color="white"
                        uncheckedColor="#efefef"
                    />
                    <Text style={{color: "white"}}>Show Password</Text>

                </View>

                <View style={{marginTop: 16}}>
                    <Button mode="contained"
                            style={{backgroundColor: "#256eff", borderRadius: 8}}
                            disabled={!termsAndCondition}>
                        Submit
                    </Button>
                    <Text style={{textAlign: "center", color: "#efefef"}}>By login you accept the terms and condition
                        <Checkbox
                            status={termsAndCondition ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setTermsAndCondition(!termsAndCondition);
                            }}
                            color="white"
                            uncheckedColor="#efefef"
                        />
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default LoginScreen;

function axios(arg0: { method: string; url: string; responseType: string; }) {
    throw new Error("Function not implemented.");
}
