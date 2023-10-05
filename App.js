import React from "react";
import Login from "./components/LoginPage";
import Home from "./components/Home";
import { StyleSheet, ScrollView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsTab from "./components/newsComponents/NewsTab";
import HomeBtn from "./components/homeButton/HomeBtn";
import { NavigationContainerRef } from "@react-navigation/native";

import Nav from "./components/Nav";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer style={styles.mainContainer}>
			<Nav></Nav>
			<ScrollView contentContainerStyle={styles.scrollViewContainer}>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="NewsTab"
						component={NewsTab}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</ScrollView>
			<HomeBtn refs={NavigationContainerRef} />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	scrollViewContainer: {
		flex: 1,
	},
	mainContainer: {
		position: "relative",
	},
});
