import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken(process.env.MAPBOX_ACCESSTOKEN);

const ExploreScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, height: "100%", width: "100%" }}>
            <MapboxGL.MapView 
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default ExploreScreen;
