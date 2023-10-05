import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import HomeFeatured from "./homeComponents/homeFeaturedNews/HomeFeatured";
import NewsData from "./homeComponents/homeFeaturedNews/NewsData";
import Headings from "./homeComponents/homeCategories/Headings";

function Home({ navigation }) {
	const pageSize = 20;
	const pageSizeCat = 20;
	const [selectedCategory, setSelectedCategory] = useState("Business");

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	return (
		<SafeAreaView style={styles.mainContainer}>
			<HomeFeatured></HomeFeatured>
			<NewsData
				style={styles.cardsContainer}
				pageSize={pageSize}
				categories="general"
			></NewsData>
			<Headings
				onChangeCategory={handleCategoryChange}
				heading="Categories"
				subHeading="Information Hub!"
			/>
			<NewsData
				style={styles.cardsContainerCategory}
				pageSize={pageSizeCat}
				categories={selectedCategory}
			></NewsData>
			<Headings
				onChangeCategory={handleCategoryChange}
				heading="Top News"
				subHeading="From Users"
			/>
			<NewsData
				style={styles.cardsContainerCategory}
				pageSize={pageSizeCat}
				categories={selectedCategory}
			></NewsData>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#5C4B99",
		backgroundColor: "#fff",
		position: "relative",
		flex: 1,
	},
	cardsContainer: {
		display: "none",
		flexDirection: "row",
		flexWrap: "nowrap",
		overflow: "scroll",
	},
	cardsContainerCategory: {
		marginTop: 100,
	},
});

export default Home;
