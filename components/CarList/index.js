import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import CarItem from "../CarItem";
import cars from "./cars";
import styles from "./styles";

function CarList() {
  console.log(cars);
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            image={item.image}
          />
        )}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height }
        showsVerticalScrollIndicator={false }
      />
    </View>
  );
}

export default CarList;
