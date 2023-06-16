import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import TextBox from "../components/input/TextBox";
import OnOffSwitch from "../components/input/OnOffSwitch";
import ConfirmButton from "../components/input/ConfirmButton";
import { setEmail, setPassword, setRememberMe } from "../store/loginSlice";

const LoginScreen = () => {
    const navigation = useNavigation();

	const email = useSelector((state) => state.login.email);
	const password = useSelector((state) => state.login.password);
	const rememberMe = useSelector((state) => state.login.rememberMe);

    const handleLogin = () => {
        console.log("Login info:", email, password, rememberMe)
    }

    const handleGoToSignUp = () => {
        navigation.navigate("SignUp")
    }

	return (
		<>
			<TextBox placeholder="Email" value={email} reduxAction={setEmail} />
			<TextBox placeholder="Password" value={password} reduxAction={setPassword} />
			<Text>Remember me?</Text>
			<OnOffSwitch value={rememberMe} reduxAction={setRememberMe} />
			<ConfirmButton title="Login" onPress={handleLogin} />
			<Text>Don't have an account yet?</Text>
			<ConfirmButton title="Sign Up" onPress={handleGoToSignUp} />
		</>
	);
};

export default LoginScreen;
