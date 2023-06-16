import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import TextBox from "../components/input/TextBox";
import ConfirmButton from "../components/input/ConfirmButton";
import { setEmail, setPassword, setSessionInfo } from "../store/loginSlice";
import { logInWithPassword } from "../supabase/auth";

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
		<>
			<TextBox placeholder="Email" value={email} reduxAction={setEmail} />
			<TextBox placeholder="Password" value={password} reduxAction={setPassword} />
			<ConfirmButton title="Login" onPress={handleLogin} />
			<Text>Don't have an account yet?</Text>
			<ConfirmButton title="Sign Up" onPress={handleGoToSignUp} />
		</>
	);
};

export default LoginScreen;
