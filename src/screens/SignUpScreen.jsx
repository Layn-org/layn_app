import { Text } from "react-native";
import { useSelector } from "react-redux";
import TextBox from "../components/input/TextBox";
import OnOffSwitch from "../components/input/OnOffSwitch";
import ConfirmButton from "../components/input/ConfirmButton";
import { setEmail, setPassword, setRememberMe, setSessionInfo } from "../store/loginSlice";
import { signUp } from "../supabase/auth";

const SignUpScreen = () => {
	const email = useSelector((state) => state.login.email);
	const password = useSelector((state) => state.login.password);
	const rememberMe = useSelector((state) => state.login.rememberMe);
	const sessionInfo = useSelector((state) => state.login.sessionInfo);

    const handleSignUp = () => {
        console.log("Sign up info:", email, password, rememberMe)
        signUp(email, password)
    }

	return (
		<>
			<TextBox placeholder="Email" value={email} reduxAction={setEmail} />
			<TextBox placeholder="Password" value={password} reduxAction={setPassword} />
			<Text>Remember me?</Text>
			<OnOffSwitch value={rememberMe} reduxAction={setRememberMe} />
			<ConfirmButton title="Sign in" onPress={handleSignUp} />
		</>
	);
};

export default SignUpScreen;
