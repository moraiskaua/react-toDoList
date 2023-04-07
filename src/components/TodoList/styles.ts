import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const ToDoList = styled.ul``;

export const ToDoListLi = styled.li`
    display: flex;
    align-items: center;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    background-color: #3B3B3B;

    .checked {
        opacity: .7;
        text-decoration: line-through;
    }

    &:last-child {
        border: none;
        border-top: 1px solid whitesmoke;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

export const Span = styled.span`
    flex: 1;
    cursor: pointer;
    font-size: 1.5rem;
    word-break: break-all;
    line-height: 1.2;
    transition: color .3s;
    padding: 15px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 50px;
`;

export const DeleteIcon = styled(MdDelete)`
    color: #FF7675;
`;