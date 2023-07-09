import { StyleSheet, Text, View } from "react-native";

const TestComponent = () => {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#ffffff",
		alignItems: "flex-start",
		justifyContent: "center",
	},
});

export default TestComponent;
