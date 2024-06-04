
import { View , Text, TouchableOpacity, Alert} from "react-native";
import ToDo from "../../models/todo";
import React from "react";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "phosphor-react-native";

interface TodoProps {
    todo: ToDo;
    onRemove: (todo: ToDo) => void;
    onChanged: (checked : boolean) => void;
}


export function TodoCard({todo, onRemove, onChanged} : TodoProps) {
    const [isChecked, setIsChecked] = React.useState(false);

    function handleRemove() {
        Alert.alert(
            "Delete",
            "Are you sure you want to delete this task?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                { text: "OK", onPress: () => onRemove(todo) },
            ]
        )
    }

    return (
        <View style={styles.container}>
            <BouncyCheckbox
            size={25}
            fillColor="#d90429"
            unFillColor="#f7f7f7"
            text={todo.name}
            iconStyle={{ borderColor: "#d90429" }}
            innerIconStyle={{ borderWidth: 2 }}
            isChecked={isChecked}
            onPress={(checked: boolean) => {
                setIsChecked(checked);
                onChanged(checked);
            }}
            />
            <TouchableOpacity style={styles.button} onPress={handleRemove}>
                <Trash size={24} color="#BDBDBD" />
            </TouchableOpacity>
            
        </View>
    );
}