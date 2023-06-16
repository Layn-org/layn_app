import { useDispatch } from "react-redux";
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_HOST, SUPABASE_API_KEY } from "@env";
import { setSessionInfo } from "../store/loginSlice";

const supabase = createClient(SUPABASE_HOST, SUPABASE_API_KEY, {
	auth: {
		storage: AsyncStorage,
	},
});

const handleSignUpSuccess = (data) => {
    const dispatch = useDispatch();
    dispatch(setSessionInfo(data));
	alert("A verification link as been sent to your email!");
};

const signUp = async (email, password) => {
	try {
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		error ? console.log(error) : handleSignUpSuccess(data);
	} catch (error) {
		console.log("@@@ Sign Up Error", error);
	}
};

const logInWithPassword = async (email, password) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
	return { data, error };
};

const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	return error;
};

export { signUp, logInWithPassword, signOut };
