const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodo } = require("../../src/hooks");

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp/>', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ],
        todosCount: 2,
        pendingCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodoo: jest.fn(),
        handleToggleTodoo: jest.fn()
    })

    test('Debe de mostrar el componente correctamente', () => {
        render(<TodoApp/>);
        expect( screen.getByText('Todo #1') ).toBeTruthy;
        expect( screen.getByText('Todo #2') ).toBeTruthy;
        expect( screen.getByRole('textbox') ).toBeTruthy;
    });

});