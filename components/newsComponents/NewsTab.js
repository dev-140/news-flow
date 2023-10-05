import React from "react";
import { globalStyles } from "../global";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Linking,
	ScrollView,
} from "react-native";
import HomeFeatured from "../homeComponents/homeFeaturedNews/HomeFeatured";
import NewsData from "../homeComponents/homeFeaturedNews/NewsData";

function NewsTab({ route }) {
	const { cardTitle, cardImg, cardDate, desc, content, url } = route.params;

	return (
		<SafeAreaView>
			<ScrollView style={globalStyles.mainContainer}>
				<View style={styles.imgContainer}>
					<Image source={{ uri: cardImg }} style={styles.cardImg} />
					<View style={[globalStyles.cardDate, styles.cardDate]}>
						<Text style={globalStyles.cardDateText}>
							{cardDate}
						</Text>
					</View>
				</View>

				<View style={globalStyles.containerFlexColumn}>
					<Text style={styles.cardTitle}>{cardTitle}</Text>
					<Text style={styles.cardDesc}>{desc}</Text>
					<Text style={styles.cardDesc}>{content}</Text>
					<TouchableOpacity
						style={[globalStyles.button, styles.buttonContainer]}
					>
						<Text
							onPress={() => {
								Linking.openURL(url);
							}}
							style={globalStyles.buttonText}
						>
							Continue Reading
						</Text>
					</TouchableOpacity>
				</View>

				<View style={globalStyles.marginTop}>
					<HomeFeatured></HomeFeatured>
					<NewsData pageSize={10} categories="general"></NewsData>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	imgContainer: {
		width: "100%",
		height: 189,
		backgroundColor: "#dbdbdb",
		borderRadius: 11,
		overflow: "hidden",
		position: "relative",
		borderStyle: "solid",
		borderWidth: 1,
	},
	cardImg: {
		width: "100%",
		height: "100%",
	},
	cardDate: {
		position: "absolute",
		top: 7,
		left: 8,
		width: "40%",
	},
	cardTitle: {
		fontSize: 15,
		color: "#3D246C",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 18,
	},
	cardDesc: {
		fontSize: 15,
		marginTop: 15,
		textAlign: "center",
		width: "90%",
	},
	buttonContainer: {
		width: 217,
	},
});

export default NewsTab;
