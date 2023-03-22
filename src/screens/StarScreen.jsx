import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";

export default function StarScreen() {
  return (
    <View style={styles.container}>
      <Text>Essa é a Star Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Volte para a Home
      </Button>
    </View>
  );
}
