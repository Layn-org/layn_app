import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../../constants/styles";

const MainCard = ({ title }) => {
	return (
		<View style={styles.outerCard}>
			<Image
				style={styles.image}
				source={require("../../assets/temp/toyota-corolla-my19-index-_281_29.png")}
			/>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	outerCard: {
		backgroundColor: colors.secondaryAccent,
		borderRadius: 25,
		height: 200,
		marginHorizontal: 10,
		marginTop: 10,
	},
	title: {
		color: colors.white,
		fontSize: 30,
		marginLeft: 5,
	},
	image: {
		height: 80,
		width: 120,
		margin: 5,
	},
});

export default MainCard;
