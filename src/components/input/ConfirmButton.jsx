import { Button } from "react-native";

const ConfirmButton = ({ title, onPress }) => {
    return (
        <Button
            title={title}
            onPress={onPress}
        />
    )
};

export default ConfirmButton;