import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_HOST, SUPABASE_API_KEY } from "@env";

const Supabase = createClient(SUPABASE_HOST, SUPABASE_API_KEY, {
	auth: {
		storage: AsyncStorage,
		detectSessionInUrl: false,
	},
});

export default Supabase;