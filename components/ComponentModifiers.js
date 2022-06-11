import { Tooltip } from "native-base"
import { Text, View } from "react-native"

export const withHeader = (WrappedComponent) => {
    return ({ headerTitle, ...props }) => {
        return (
            <View>
                <Text>{headerTitle}</Text>
                <WrappedComponent {...props} />
            </View>
        )
    }
}

export const withTooltip = (WrappedComponent) => {
    return ({ tooltipTitle, ...props }) => {
        return (
            <Tooltip label={tooltipTitle}>
                <WrappedComponent {...props} />
            </Tooltip>
        )
    }
}