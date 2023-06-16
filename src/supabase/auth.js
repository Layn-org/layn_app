import Supabase from "./config";

const signUp = async (email, password) => {
	const response = await Supabase.auth.signUp({
		email: email,
		password: password,
	});
	if (response?.error) {
		console.log("@@@ Supabase sign up error:", response.error.message);
        alert(response.error.message);
	} else {
		return response.data;
	}
};

const logInWithPassword = async (email, password) => {
	const response = await Supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
	if (response?.error) {
		console.log("@@@ Supabase login error:", response.error.message);
        alert(response.error.message);
	} else {
		return response.data;
	}
};

const signOut = async () => {
	const response = await Supabase.auth.signOut();
	if (response?.error) {
		console.log("@@@ Supabase sign out error:", response.error.message);
	}
};

export { signUp, logInWithPassword, signOut };
