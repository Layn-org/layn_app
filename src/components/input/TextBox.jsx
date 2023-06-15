import { StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";

const TextBox = ({ placeholder, value, reduxAction }) => {
	const dispatch = useDispatch();

	const handleChangeText = (newText) => {
		dispatch(reduxAction(newText));
	};

	return (
		<TextInput
			style={styles.textInput}
			placeholder={placeholder}
			value={value}
			onChangeText={handleChangeText}
		/>
	);
};

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

export default TextBox;
