import { ADD_TASK, CHANGE_IS_DONE, EDIT_TASK } from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "I have to go to eat at noon",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Go with my family to america ",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Go to Maldive",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "my daughter goes back to school",
      isDone: false,
    },
  ],
};

function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_IS_DONE: {
      return {
        todos: state.todos.map((item) =>
          item.id === payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    }
    case EDIT_TASK: {
      return {
        todos: state.todos.map((item) =>
          item.id === payload.id ? { ...item, task: payload.taskText } : item
        ),
      };
    }
    case ADD_TASK: {
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), task: payload, isDone: false },
        ],
      };
    }
    default:
      return state;
  }
}

export default todosReducer;
