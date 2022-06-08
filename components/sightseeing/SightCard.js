import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";

export default function SightCard({handlePress, sight}) {
  // const imageSrc =
  //   attraction.imageUrls
  //     ? { uri: attraction.imageUrls }
  //     : { uri: "http://animal.memozee.com/ArchOLD-7/1197452567.jpg"}

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.sightCardContainer}>
        <Image
          source={{ uri: "http://animal.memozee.com/ArchOLD-7/1197452567.jpg"}}
          style={globalStyles.itineraryImageSmall}
        />
        <Text style={styles.sightBirdName}>{sight.commonName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  sightCardContainer: {
    marginBottom: 12,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    borderRadius: 12,
    shadowColor: "#A66155",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    // maxWidth: "48%",
    flexBasis: "48%",
  },
  sightBirdName: {
    color: "#647A91",
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontWeight: "500",
  },
});
