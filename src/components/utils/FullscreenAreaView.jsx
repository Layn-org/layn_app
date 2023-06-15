import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

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
	},
});

export default FullscreenAreaView;
