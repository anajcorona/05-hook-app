import React from 'react';
import { useTodo } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
    const { todos, todosCount, pendingCount ,handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
        <h1> TodoApp { todosCount } <small> penientes: { pendingCount } </small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>

            <div className="col-5">
                <h4> Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>
    </>
  )
}
