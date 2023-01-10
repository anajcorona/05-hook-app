import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 0,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Test debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeTruthy();
        // screen.debug();
    })

    test('Debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ title: 'Ana', slug: 'LALA'}],
            isLoading: false,
            hasError: null
        });
        
        render( <MultipleCustomHooks />);
        expect( screen.getByText('LALA')).toBeTruthy();
        expect( screen.getByText('Ana')).toBeTruthy();
        
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ title:'Ana', slug: 'LALA'}],
            isLoading: false,
            hasError: null
        });
        
        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();
    });
})