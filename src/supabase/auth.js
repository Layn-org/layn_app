import Supabase from "./config";

const signUp = async (email, password) => {
	try {
		const { data, error } = await Supabase.auth.signUp({
			email: email,
			password: password,
		});
	} catch (error) {
		console.log("@@@ Sign Up Error", error);
	}
};

const logInWithPassword = async (email, password) => {
	const response = await Supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
	if (response?.error) {
		console.log("@@@ Supabase login error:", response.error.message)
	} else {
        return response.data
    }
};

const signOut = async () => {
	const { error } = await Supabase.auth.signOut();
	return error;
};

export { signUp, logInWithPassword, signOut };
