import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/image.jpg")}
          style={{ width: 200, height: 350 }}
        />
      </View>
      <Text>Essa é a Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
      >
        Conheça o Sobre
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("StarScreen");
        }}
      >
        Conheça o Favoritos
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("DetailsScreen");
        }}
      >
        Conheça o Detalhes
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
      >
        Conheça o Registro
      </Button>
      
    </View>
  );
}
