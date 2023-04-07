import * as C from "./styles";

export const TodoList = ({ toDos, onChecked, onRemove }: ToDoType) => {

    return (
        <C.ToDoList>
            {toDos.map((todo: ObjType) => (
                <C.ToDoListLi key={todo.id.toString()}>
                    <C.Span
                        className={todo.checked ? 'checked' : ''}
                        onClick={() => onChecked && onChecked(todo)}
                    >
                        {todo.title}
                    </C.Span>
                    <C.Button
                        type="button"
                        onClick={() => onRemove && onRemove(todo)}
                    >
                        <C.DeleteIcon size={28} />
                    </C.Button>
                </C.ToDoListLi>
            ))}
        </C.ToDoList>
    );
}

type ToDoType = {
    toDos: ObjType[];
    onChecked: Function;
    onRemove: Function;
}

type ObjType = {
    id: number;
    title: string;
    checked: boolean;
}