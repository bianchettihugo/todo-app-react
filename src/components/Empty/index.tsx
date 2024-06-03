import { FileDashed } from "phosphor-react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <FileDashed size={64} color="#E4E4E4" />
      <Text style={styles.title}>No task found!</Text>
    </View>
  )
}