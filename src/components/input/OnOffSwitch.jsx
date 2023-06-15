import { Switch } from "react-native";
import { useDispatch } from "react-redux";

const OnOffSwitch = ({ value, reduxAction }) => {
	const dispatch = useDispatch();

	const handleValueChange = (val) => {
		dispatch(reduxAction(val));
	};

	return (
        <Switch 
            value={value} 
            onValueChange={handleValueChange} 
        />
    )
};

export default OnOffSwitch;
