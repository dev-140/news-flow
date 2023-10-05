import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles } from "../global";

function HomeBtn(props) {
	return (
		<View style={styles.mainWrapper}>
			<View style={styles.mainContainer}>
				<View style={globalStyles.containerFlexColumn}>
					<Image
						source={require("../../assets/home.png")}
						style={styles.icon}
					/>
					<Text>Home</Text>
				</View>
				<View>
					<Image source={require("../../assets/add.png")} />
				</View>
				<View style={globalStyles.containerFlexColumn}>
					<Image
						source={require("../../assets/bookmark.png")}
						style={styles.icon}
					/>
					<Text>Mark</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainWrapper: {
		width: "100%",
		background: "transparent",
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		bottom: 40,
	},
	mainContainer: {
		width: 257,
		height: 54,
		borderColor: "#6F61C0",
		border: "solid",
		borderWidth: 3,
		borderRadius: 24,
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 5,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#ffffff",
	},
});

export default HomeBtn;
