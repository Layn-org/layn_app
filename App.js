import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import FullscreenAreaView from "./src/components/utils/FullscreenAreaView";
import TestComponent from "./src/components/utils/TestComponent";

export default function App()  {
    const initNavigationBar = async () => {
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBehaviorAsync("overlay-swipe");
    }

    if (Platform.OS === "android") {
        initNavigationBar();
		NavigationBar.addVisibilityListener(() => {
			NavigationBar.setVisibilityAsync("hidden");
		});
    }
    
	return (
		<FullscreenAreaView>
			<StatusBar style="auto" />
			<TestComponent />
		</FullscreenAreaView>
	);
}
