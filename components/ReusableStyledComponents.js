import { Text, TouchableOpacity, } from "react-native"
import { styles } from "../core/style"

// MARK: Buttons
export const DefaultButton = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </ TouchableOpacity>
    )
}

export const OutlinedButton = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, styles.buttonOutline, style]}
        >
            <Text style={styles.buttonOutlineText}>{title}</Text>
        </ TouchableOpacity>
    )
}

// export const TopLeftBackButton = ({onPress}) => {
//     return (
//         <TouchableOpacity
//             onPress={onPress}
//             style={[styles.button, styles.buttonOutline]}
//         />
//     )
// }

// export const BottomPopUp = () => {
    
// }
