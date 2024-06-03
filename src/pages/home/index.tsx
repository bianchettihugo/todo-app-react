import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Empty } from "../../components/Empty";

export function Home() {
  const [todos, setTodos] = useState<ToDo[]>([]);



  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.title}>ToDo App</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={(todo) => <Text>{todo.item.name}</Text>}
        keyExtractor={(todo) => todo.id}
        ListEmptyComponent={<Empty />}
      />
      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <TouchableOpacity>
          <Text>AA</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}