import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../constants/styles";

const ConfirmButton = ({ title, onPress }) => {
    return <TouchableOpacity style={styles.button} color={colors.primary} title={title} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>;
};

const styles = StyleSheet.create({
	button: {
		color: colors.secondary,
		height: 50,
		width: "80%",
		alignSelf: "center",
		margin: 12,
		borderRadius: 40,
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: colors.secondary,
	},
});

export default ConfirmButton;