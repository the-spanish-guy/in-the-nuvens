import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Arquivos</Text>
    </View>
  );
}
