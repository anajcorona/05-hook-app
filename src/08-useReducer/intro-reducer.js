/*
Un reduces no es mas que una función pura.
Siempre debe regresar un estado.
La accion es como cambiar el estado.
*/

const initialState = [{
    id: 1,
    todo: 'Recolectar la piuedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {
    
    if( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra de poder',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
};

todos = todoReducer( todos, addTodoAction );

console.log({state: todos});
