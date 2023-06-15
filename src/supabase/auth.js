import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const supabase = createClient(process.env.SUPABASE_HOST, process.env.SUPABASE_API_KEY);

const signUp = async (email, password, firstName, lastName) => {
    const { data, error } = await supabase.auth.signUp({
		email: email,
		password: password,
		options: {
			data: {
				first_name: firstName,
				last_name: lastName,
			},
		},
	});
    return {data, error};
}

const logInWithPassword = async (email, password) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password
	});
	return { data, error };
};

const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return error;
}

export { signUp, logInWithPassword, signOut };