import React from "react";
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Nav() {
	const navigation = useNavigation();
	return (
		<View style={styles.mainContainer}>
			<Image source={require("../assets/Logo.png")} style={styles.logo} />
			<View style={styles.textInputWrapper}>
				<TextInput style={styles.textInput} />
				<Image
					source={require("../assets/magnifying-glass.png")}
					style={styles.searchIcon}
				/>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate("Login")}>
				<Image
					source={require("../assets/menu.png")}
					style={styles.menu}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 100,
		backgroundColor: "#6F61C0",
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 50,
		paddingBottom: 16,
	},
	logo: {
		height: 42,
		width: 42,
	},
	textInput: {
		height: "100%",
		width: "100%",
	},
	searchIcon: {
		position: "absolute",
		right: 9,
		top: 8,
	},
	textInputWrapper: {
		height: 42,
		width: "70%",
		padding: 5,
		borderWidth: 2,
		borderRadius: 11,
		backgroundColor: "#fff",
		borderColor: "#5C4B99",
		position: "relative",
	},
	menu: {
		height: 35,
		width: 40,
	},
});

export default Nav;
