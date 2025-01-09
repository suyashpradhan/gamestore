import React from "react";
import {View} from "react-native";
import {Button, Card, Checkbox, Text, TextInput} from "react-native-paper";

const LoginScreen = () => {
    const [togglePassword, setTogglePassword] = React.useState(false);
    const [termsAndCondition, setTermsAndCondition] = React.useState(false);
    return (
        <View style={{backgroundColor: "#303030", height: "100%"}}>
            <Card mode="elevated" style={{height: "auto", backgroundColor: "black", borderRadius: "none"}}>
                <Text variant="displayMedium"
                      style={{textAlign: "center", paddingVertical: 150, color: "white"}}>GameStore</Text>
            </Card>
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