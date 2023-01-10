const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../src/09-useContext/MainApp");


describe('Pruebas en el componente MainApp', () => {
    test('Debe de mostrar el componente HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )
        expect( screen.getByText('HomePage' ) ).toBeTruthy;
        
    });

    test('Debe de mostrar el componente LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )
        expect( screen.getByText('LoginPage' ) ).toBeTruthy;
        
    });

    test('Debe de mostrar el componente AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        )
        expect( screen.getByText('AboutPage' ) ).toBeTruthy;
        
    });
});