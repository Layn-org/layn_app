import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import TextBox from "../components/input/TextBox";
import OnOffSwitch from "../components/input/OnOffSwitch";
import ConfirmButton from "../components/input/ConfirmButton";
import { setEmail, setPassword, setRememberMe, setSessionInfo } from "../store/loginSlice";
import { signUp } from "../supabase/auth";

const SignUpScreen = () => {
    const navigation = useNavigation();

	const email = useSelector((state) => state.login.email);
	const password = useSelector((state) => state.login.password);
	const rememberMe = useSelector((state) => state.login.rememberMe);

    const handleSignUp = () => {
        console.log("Sign up info:", email, password, rememberMe)
        signUp(email, password)
        navigation.navigate("Login");
        alert("A verification link as been sent to your email!");
    }

	return (
		<>
			<TextBox placeholder="Email" value={email} reduxAction={setEmail} />
			<TextBox placeholder="Password" value={password} reduxAction={setPassword} />
			<Text>Remember me?</Text>
			<OnOffSwitch value={rememberMe} reduxAction={setRememberMe} />
			<ConfirmButton title="Sign Up" onPress={handleSignUp} />
		</>
	);
};

export default SignUpScreen;
