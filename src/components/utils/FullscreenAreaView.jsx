import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { colors } from "../../constants/styles";

const FullscreenAreaView = ({ children }) => {
	return (
        <View style={styles.view}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
	view: {
        flex: 1,
		marginTop: Constants.statusBarHeight,
		backgroundColor: colors.background,
	},
});

export default FullscreenAreaView;
