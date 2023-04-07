import React, { useState } from "react";
import * as C from "./styles";


export const NewTodo = ({ onNewToDo }: any) => {

    const [toDoValue, setToDoValue] = useState<string>("");

    const eraserInput = () => {
        setToDoValue("");
    }

    const submitInput = () => {
        if (toDoValue !== "") {
            if (onNewToDo) {
                onNewToDo(toDoValue);
                eraserInput();
            }
        }
    }

    const handleChangeToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToDoValue(e.target.value);
    }

    const handleEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            submitInput();
        } else if (e.key === "Backspace") {
            eraserInput();
        }
    }

    return (
        <C.ToDoInput
            placeholder="add something to do..."
            value={toDoValue}
            onChange={handleChangeToDo}
            onKeyDown={handleEnter}
        />
    );
}