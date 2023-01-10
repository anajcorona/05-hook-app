const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");



describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Pedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );


    test('Debe de mostrar el todo pendiente a completar', () => {
        render (
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );
        
        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
    });

    test('Debe de mostrar el Todo completado', () => {

        todo.done = true;

        render (
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');
    });

    test('Span debe de llamar el ToggleTodo cuando se hace click ', () => {

        render (
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id ); 
    });

    test('Button debe de llamar el deleteTodo ', () => {

        render (
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const buttonDelete = screen.getByRole('button', { name: 'Borrar' });
        fireEvent.click( buttonDelete );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id ); 
    });
});