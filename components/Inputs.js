import { Button, StyleSheet, TextInput, View } from "react-native"
import { globalStyles } from "../styles/global"
import { withHeader } from "./ComponentModifiers"

export const NumberInput = ({number, setNumber, defaultNumber, styles, min, max}) => {
    const defaultMax = 99
    const defaultMin = 1
    const maxNum = max || defaultMax
    const minNum = min || defaultMin
    const increment = () => setNumber(prev =>  {
        return prev < maxNum ? prev + 1 : minNum + 1
    })
    const decrement = () => setNumber(prev => {
        return prev > minNum ? prev - 1 : minNum
    })
    return (
    <View style={localStyles.numberButtonContainer}>
        <Button title="+" onPress={increment} disabled={number >= maxNum} />
        <TextInput
            defaultValue={defaultNumber}
            style={[globalStyles.numberInput, styles]}
            keyboardType='numeric'
            textAlign="right"
            value={isNaN(number) ? "" : number.toString()}
            onChangeText={(text) => setNumber(parseInt(text.replace(/[^0-9]/g, '')))}
            onSubmitEditing={(e) => {
                const parsedValue = parseInt(e.nativeEvent.text.replace(/[^0-9]/g, ''))
                return isNaN(parsedValue) ? minNum : parsedValue
            }}
            maxLength={2}  //setting limit of input
        />
        <Button title="-" onPress={decrement} disabled={number <= minNum} />
    </View>
    )
}

export const NumberInputWithHeader = withHeader(NumberInput)

const localStyles = StyleSheet.create({
    numberButtonContainer: {
        flexDirection: "row",
    }
})