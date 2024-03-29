import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styles from "../utils/style";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNav");
  }, 1500);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Aguarde um instante...</Text>
    </View>
  );
}
