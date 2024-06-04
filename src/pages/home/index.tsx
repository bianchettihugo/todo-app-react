import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Empty } from "../../components/Empty";
import { CheckCircle, CircleDashed, Plus,  } from "phosphor-react-native";
import uuid from 'react-native-uuid';
import ToDo from "../../models/todo";
import { TodoCard } from "../../components/TodoCard";

export function Home() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [tasksCompleted, setTasksCompleted] = useState(0);

  function handleAddTodo() {
    if (newTodo) {
      setTodos(todos => [...todos, new ToDo(newTodo, uuid.v4().toString())]);
      setNewTodo('');
    }
  }

  function handleRemove(todo: ToDo) {
    setTodos(todos => todos.filter(t => t.id !== todo.id));
  }

  function handleTaskChanged(checked: boolean) {
    if (checked) {
      setTasksCompleted(tasksCompleted => tasksCompleted + 1);
    } else {
      setTasksCompleted(tasksCompleted => tasksCompleted - 1);
    }
  }


  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.title}>ToDo App</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <CircleDashed size={24} color="black" />
          <Text style={styles.infoText}>Tasks created: {todos.length}</Text>
        </View>
        <View style={styles.infoSection}>
          <CheckCircle size={24} color="black" />
          <Text style={styles.infoText}>Completed tasks: {tasksCompleted}</Text>
        </View>
        
      </View>
      <FlatList
        data={todos}
        renderItem={(todo) => <TodoCard 
          todo={todo.item} 
          onRemove={handleRemove} 
          onChanged={handleTaskChanged}
        />
        }
        keyExtractor={(todo) => todo.id}
        style={styles.list}
        ListEmptyComponent={<Empty />}
      />
      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setNewTodo}
          value={newTodo}
          onSubmitEditing={handleAddTodo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Plus size={24} color="#E4E4E4" weight="bold" />
        </TouchableOpacity>
      </View>
    </View>
  )
}