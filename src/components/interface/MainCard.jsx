import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/styles";

const MainCard = ({title}) => {
    return (
        <View style={styles.outerCard}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    outerCard: {
        flex: 1,
        backgroundColor: colors.secondaryAccent,
        borderRadius: 5,
    }
})

export default MainCard;