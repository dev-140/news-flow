import React from "react";
import { globalStyles } from "../../global";
import {
	StyleSheet,
	ImageBackground,
	Text,
	View,
	TouchableOpacity,
	Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function NewsCards(props) {
	const navigation = useNavigation();
	const convertToReadableDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("NewsTab", {
					cardTitle: props.title,
					cardImg: props.img,
					cardDate: convertToReadableDate(props.date),
					desc: props.desc,
					content: props.content,
					url: props.url,
				})
			}
		>
			<View style={styles.newsCardMainContainer}>
				<ImageBackground
					source={props.img ? { uri: props.img } : null}
					style={globalStyles.cardContainer}
				>
					<View style={globalStyles.cardDate}>
						<Text style={globalStyles.cardDateText}>
							{convertToReadableDate(props.date)}
						</Text>
					</View>
					<View style={globalStyles.cardTitleWrapper}>
						<Text style={globalStyles.cardTitleText}>
							{props.title}
						</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	newsCardMainContainer: {
		borderRadius: 11,
		backgroundColor: "#000000",
		width: 300,
		marginRight: 33,
		height: 171,
		overflow: "hidden",
	},
});

export default NewsCards;
