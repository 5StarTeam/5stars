import { Text, TouchableOpacity, } from "react-native"
import { globalStyles } from "../styles/global"

// MARK: Buttons
export const ButtonPrimary = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity
          style={[globalStyles.btnContainer, style]}
          onPress={onPress}
        >
          <Text style={globalStyles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export const ButtonAlt = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[globalStyles.btnContainerAlt, style]}
        >
            <Text style={globalStyles.btnTextAlt}>{title}</Text>
        </ TouchableOpacity>
    )
}
