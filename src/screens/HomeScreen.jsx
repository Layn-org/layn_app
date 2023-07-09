import { StyleSheet, View } from "react-native";
import MainCard from "../components/interface/MainCard";
import { colors } from "../constants/styles";

const HomeScreen = () => {
	return (
		<View style={styles.main}>
			<MainCard title="Toyota Corolla"/>
		</View>
	);
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.secondary
    }
})

export default HomeScreen;
