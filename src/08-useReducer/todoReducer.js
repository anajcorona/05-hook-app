export const todoReducer = ( initialState = [], accion) => {
    switch (action.type) {
        case 'ABC':
            //return initialState;
            throw new Error('Action.type: ABC no esta implementada');
            //break;
    
        default:
            return initialState;
    }
}