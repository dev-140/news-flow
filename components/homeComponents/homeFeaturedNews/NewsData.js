import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import NewsCards from "./NewsCards";

const NewsData = (props) => {
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		const apiKey = "b3e40d81a2fc4fb1b9736de8e3968617";
		const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.categories}&apiKey=${apiKey}&pageSize=${props.pageSize}`;

		// const apiKey = "b1bda898092b4f0cbdb159856911cc7b";
		// const url = `https://gnews.io/api/v4/categories=world&lang=en&country=us&max=10&apikey=${apiKey}`;

		axios
			.get(url)
			.then((response) => {
				setNewsData(response.data.articles);
			})
			.catch((error) => {
				console.error("Error fetching news data:", error);
			});
	}, [props.categories]);

	return (
		<ScrollView
			horizontal
			style={styles.newsContainer}
			contentContainerStyle={styles.scrollViewContent}
			snapToAlignment="center"
			decelerationRate="fast"
			showsHorizontalScrollIndicator={false}
		>
			{newsData.map((item, index) => (
				<NewsCards
					key={index}
					title={item.title}
					date={item.publishedAt}
					img={item.urlToImage}
					desc={item.description}
					content={item.content}
					url={item.url}
				/>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	newsContainer: {
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 20,
	},
	scrollViewContent: {
		paddingHorizontal: 10,
	},
});

export default NewsData;
