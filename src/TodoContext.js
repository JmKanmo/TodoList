import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링",
    done: false,
  },
  {
    id: 3,
    text: "유뷰트 촬영하기",
    done: false,
  },
  {
    id: 4,
    text: "프리즌브레이크 보기",
    done: true,
  },
  {
    id: 5,
    text: "프로그래밍 하기",
    done: false,
  },
];

function TodoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error("unhandled action type");
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatcher] = useReducer(TodoReducer, initialTodos);
  const nextId = useRef(initialTodos.length + 1);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatcher}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const UseTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("can't find contextProvider");
  }
  return context;
};

export const UseTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("can't find contextProvider");
  }
  return context;
};

export const UseTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("can't find contextProvider");
  }
  return context;
};
