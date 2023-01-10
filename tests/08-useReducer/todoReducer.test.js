import { fireEvent } from "@testing-library/react";
import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    },
    {
        id: 2,
        description: 'Demo Todo',
        done: false
    }]

    test(' Debe de regresar el estado Inicial', () => {
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    });

    test('Debe de agregar un Todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 3,
                description: 'Nuevo Todo',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 3 );
        expect( newState ).toContain( action.payload );

    });

    test('Debe de eliminar un todo', () => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        console.log(newState);
        expect( newState.length ).toBe( 1 );

    });

    test('Debe de realizar el cambio de un todo (done)', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState[0].done ).toBeTruthy;
        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBeFalsy;
    });

});