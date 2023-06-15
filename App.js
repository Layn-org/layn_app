import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import FullscreenAreaView from "./src/components/utils/FullscreenAreaView";
import TestComponent from "./src/components/utils/TestComponent";
import { store } from "./src/store/storeConfig";

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
		<Provider store={store}>
			<FullscreenAreaView>
				<StatusBar style="auto" />
				<TestComponent />
			</FullscreenAreaView>
		</Provider>
	);
}