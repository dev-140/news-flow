import React from "react";
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Text,
	SafeAreaView,
} from "react-native";

import { globalStyles } from "./global";

function Login({ navigation }) {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Image source={require("../assets/Logo.png")} style={styles.logo} />
			<TouchableOpacity
				style={globalStyles.button}
				onPress={() => navigation.navigate("Home")}
			>
				<Text style={globalStyles.buttonText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={globalStyles.button}
				onPress={() => navigation.navigate("Home")}
			>
				<Text style={globalStyles.buttonText}>Sign in</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		backgroundColor: "#6F61C0",
	},
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	logo: {
		height: 100,
		width: 100,
	},
});

export default Login;
