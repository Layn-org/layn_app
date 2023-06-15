import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import TestComponent from "./src/TestComponent";
import { Platform } from "react-native";

export default function App()  {
    
    const initNavigationBar = async () => {
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBehaviorAsync("overlay-swipe");
    }
    if (Platform.OS === "android") {
        initNavigationBar();
		NavigationBar.addVisibilityListener(({ visibility }) => {
			NavigationBar.setVisibilityAsync("hidden");
		});
    }
    
	return (
		<>
			<TestComponent />
			<StatusBar style="auto" />
		</>
	);
}
