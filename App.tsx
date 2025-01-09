import {PaperProvider} from 'react-native-paper';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <LoginScreen/>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})