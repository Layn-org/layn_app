import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { store } from "./src/store/storeConfig";

const Stack = createNativeStackNavigator();

const App = () => {
    const initNavigationBar = async () => {
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBehaviorAsync("overlay-swipe");
        NavigationBar.addVisibilityListener(() => {
			NavigationBar.setVisibilityAsync("hidden");
		});
    }

    if (Platform.OS === "android") {
        initNavigationBar();
    }
    
	return (
		<Provider store={store}>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{
							title: "Login to Urbauto",
						}}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUpScreen}
						options={{
							title: "Sign up for Urbauto",
						}}
					/>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							title: "Your Dashboard",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

registerRootComponent(App);