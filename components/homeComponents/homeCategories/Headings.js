import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";

function Headings(props) {
	const [selectedCategory, setSelectedCategory] = useState("Business");

	return (
		<View style={styles.categoriesMainConatiner}>
			<View style={styles.headingWrapper}>
				<View style={styles.mainHeadingWrapper}>
					<Text style={styles.headingText}>{props.heading}</Text>
				</View>
				<View style={styles.sideHeadingWrapper}>
					<Text style={styles.sideHeadingText}>
						{props.subHeading}
					</Text>
					<Text style={styles.sideHeadingTextBot}>
						{selectedCategory}
					</Text>
				</View>
			</View>

			<View style={styles.categoriesContainer}>
				<ScrollView
					style={styles.ScrollView}
					horizontal
					snapToAlignment="center"
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
				>
					<TouchableOpacity
						onPress={() => {
							props.onChangeCategory("business");
							setSelectedCategory("business");
						}}
					>
						<Text style={styles.categoryTab}>business</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							props.onChangeCategory("entertainment");
							setSelectedCategory("entertainment");
						}}
					>
						<Text style={styles.categoryTab}>entertainment</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							props.onChangeCategory("health");
							setSelectedCategory("health");
						}}
					>
						<Text style={styles.categoryTab}>health</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							props.onChangeCategory("science");
							setSelectedCategory("science");
						}}
					>
						<Text style={styles.categoryTab}>science</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							props.onChangeCategory("sports");
							setSelectedCategory("sports");
						}}
					>
						<Text style={styles.categoryTab}>sports</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							props.onChangeCategory("technology");
							setSelectedCategory("technology");
						}}
					>
						<Text style={styles.categoryTab}>technology</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	categoriesMainConatiner: {
		marginTop: 10,
		marginBottom: 10,
		overflow: "visible",
	},
	headingWrapper: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
	},
	mainHeadingWrapper: {
		width: 135,
		height: 45,
		backgroundColor: "#3D246C",
		borderRadius: 11,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	headingText: {
		color: "#ffffff",
		fontSize: 20,
		fontWeight: "bold",
	},
	sideHeadingWrapper: {
		display: "flex",
		flexDirection: "column",
		marginLeft: 10,
		overflow: "visible",
	},
	sideHeadingText: {
		color: "#3D246C",
		fontWeight: "bold",
		fontSize: 20,
	},
	sideHeadingTextBot: {
		color: "#3D246C",
		fontSize: 15,
		textAlign: "center",
		textTransform: "capitalize",
		fontWeight: "bold",
	},
	categoriesContainer: {
		marginTop: 12,
		display: "flex",
		flexDirection: "row",
		overflow: "visible",
		paddingLeft: 20,
	},
	categoryTab: {
		paddingLeft: 11,
		paddingRight: 11,
		borderColor: "#3D246C",
		borderWidth: 2,
		marginRight: 5,
		borderRadius: 8,
		fontSize: 15,
		color: "#3D246C",
		textTransform: "capitalize",
	},
	categoryTabSelected: {
		paddingLeft: 11,
		paddingRight: 11,
		borderColor: "#3D246C",
		borderWidth: 2,
		marginRight: 5,
		borderRadius: 8,
		fontSize: 15,
		color: "#ffffff",
		textTransform: "capitalize",
		backgroundColor: "#3D246C",
	},
});

export default Headings;
