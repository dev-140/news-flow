import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	mainContainer: {
		padding: 20,
		backgroundColor: "#ffffff",
		display: "flex",
		flexDirection: "column",
		height: "100%",
	},
	button: {
		backgroundColor: "#3D246C",
		padding: 10,
		borderRadius: 5,
		marginTop: 22,
		width: 152,
		height: 48,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 20,
	},
	cardContainer: {
		borderRadius: 11,
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		paddingTop: 4,
		width: "100%",
	},
	cardDate: {
		backgroundColor: "#3D246C",
		width: "50%",
		height: 30,
		borderRadius: 100,
		padding: 5,
		marginLeft: 5,
	},
	cardDateText: {
		color: "#ffffff",
		textAlign: "center",
		fontWeight: "bold",
	},
	cardTitleWrapper: {
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		padding: 5,
		height: 50,
	},
	cardTitleText: {
		color: "#ffffff",
	},
	containerFlexColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	marginTop: {
		marginTop: 31,
	},
});
