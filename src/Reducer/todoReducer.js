
import { ADD_TODO, addToDo } from '../Action/todoAction'

export const todoReducer = (state = ["to do 1", "to do 2"], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
            break;
        default:
    }
    return state;
}
