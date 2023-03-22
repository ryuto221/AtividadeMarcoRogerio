import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Essa é a About Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HzScreen");
        }}
      >
        Volte para a Home
      </Button>
    </View>
  );
}
