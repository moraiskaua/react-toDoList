import React, { useState } from "react";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import * as C from "./App.styles";

const App = () => {

  type ObjType = {
    id: number;
    title: string;
    checked: boolean;
  }

  const [toDos, setToDos] = useState<any>([]);

  const onNewToDo = (value: ObjType) => {
    setToDos([...toDos, { id: new Date().getTime(), title: value, checked: false }]);
  }

  const handleToggleChecked = (todo: ObjType) => {
    setToDos(toDos.map((obj: ObjType) => (
      obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)));
  }

  const handleRemoveToDO = (todo: ObjType) => {
    setToDos(toDos.filter((obj: ObjType) => obj.id !== todo.id));
  }

  return (
    <C.Container>
      <C.Header>
        <C.Title>To Do List</C.Title>
      </C.Header>

      <C.SectionArea>
        <NewTodo onNewToDo={onNewToDo}/>
        <TodoList toDos={toDos} onChecked={handleToggleChecked} onRemove={handleRemoveToDO}/>
      </C.SectionArea>
    </C.Container>
  );
}

export default App;