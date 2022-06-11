import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import MapboxGL, { Camera } from "@rnmapbox/maps";

MapboxGL.setAccessToken(process.env.MAPBOX_ACCESSTOKEN);

const ExploreScreen = () => {
    const navigation = useNavigation();
    const [viewPort, setViewPort] = useState({
        zoomLevel: 10,
        centerCoordinate: [103.851959, 1.290270]
    });
    const [locationAccess, setLocationAccess] = useState(false);

    useEffect(() => {
        const requestLocation = async () => {
            let acc = await MapboxGL.requestAndroidLocationPermissions().then(res => res);
            console.log(acc);
            return acc;
        }
        
        setLocationAccess(requestLocation());
    }, []);
    

    return (
        <View style={{flex: 1, height: "100%", width: "100%" }}>
            <MapboxGL.MapView 
                style={{ flex: 1 }}
                zoomEnabled={true}
            >
                    <Camera 
                        {...viewPort}
                    />
            </MapboxGL.MapView>
        </View>
    )
}

export default ExploreScreen;
