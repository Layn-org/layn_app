import { StyleSheet, Text, Image, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import TextBox from "../components/input/TextBox";
import ConfirmButton from "../components/input/ConfirmButton";
import { setEmail, setPassword, setSessionInfo } from "../store/loginSlice";
import { logInWithPassword } from "../supabase/auth";
import FullscreenAreaView from "../components/utils/FullscreenAreaView";
import { colors } from "../constants/styles";

const LoginScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const email = useSelector((state) => state.login.email);
	const password = useSelector((state) => state.login.password);

	const handleLogin = async () => {
		const data = await logInWithPassword(email, password);
		if (data && (data.session && data.user)) {
			dispatch(setSessionInfo(data));
			navigation.navigate("Home");
		}
	};

	const handleGoToSignUp = () => {
		navigation.navigate("SignUp");
	};

	return (
		<FullscreenAreaView style={styles.content}>
            <Image style={styles.logo} source={require("../assets/logo_large.png")} />
            <TextBox placeholder="Email" value={email} reduxAction={setEmail} />
            <TextBox placeholder="Password" value={password} reduxAction={setPassword} />
            <ConfirmButton title="Login" onPress={handleLogin} />
            <Text style={styles.noAccountText}>Don't have an account yet?</Text>
            <ConfirmButton title="Create Account" onPress={handleGoToSignUp} />
		</FullscreenAreaView>
	);
};

const styles = StyleSheet.create({
	content: {
		justifyContent: "center",
	},
	logo: {
		width: 200,
		height: 200,
		alignSelf: "center",
		marginTop: 100,
		marginBottom: 20,
	},
	noAccountText: {
		color: colors.text,
        marginTop: 30,
	},
});

export default LoginScreen;
