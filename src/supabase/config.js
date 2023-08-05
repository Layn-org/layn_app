import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_HOST, SUPABASE_API_KEY } from "@env";

SUPABASE_HOST = process.env.SUPABASE_HOST;
SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;

const Supabase = createClient(SUPABASE_HOST, SUPABASE_API_KEY, {
	auth: {
		storage: AsyncStorage,
		detectSessionInUrl: false,
	},
});

export default Supabase;
