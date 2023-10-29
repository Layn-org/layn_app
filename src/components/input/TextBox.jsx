import { StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../constants/styles";

const TextBox = ({ placeholder, value, reduxAction }) => {
	const dispatch = useDispatch();

	const handleChangeText = (newText) => {
		dispatch(reduxAction(newText));
	};

	return (
		<TextInput
			style={styles.textInput}
			placeholder={placeholder}
            placeholderTextColor={colors.text}
			value={value}
			onChangeText={handleChangeText}
		/>
	);
};

const styles = StyleSheet.create({
	textInput: {
		height: 50,
        width: "80%",
        alignSelf: "center",
		margin: 12,
		borderWidth: 2,
        borderRadius: 40,
        borderColor: colors.primary,
        color: colors.text,
        backgroundColor:colors.secondary,
		padding: 10,
        paddingLeft: 25,
	},
});

export default TextBox;
