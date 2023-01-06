import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "strider",
        email: 'ana@gmail'
    })

    const { username, email } = formState; 
    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    /* Use Effect es una funcion que se llamará cuando se ejecute.
        No se recomienda usarlo sin una dependencia. (segundo argumento).
        Si el segundo argumento ([]) es vacio solo se ejecuta una vez. (cuando se renderiza).
        Se recomienda usar varios useEffect si quieres muchos efectos secundarios.
    */
    useEffect(() => {
      //console.log("UseEffect call");
    }, []);

    //Cada que cambia el estado de FormState se ejecuta la funcion
    useEffect(() => {
        // console.log("FormState Changed!");
      }, [formState]);

    useEffect(() => {
        // console.log("email Changed!");
      }, [email]);
    

  return (
    <>
        <h1> Formulario Simple</h1>
        <hr />
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value = {username}
            onChange={onInputChange} 
        />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="ana.corona@gmail.com"
            name="email"
            value = {email}
            onChange={onInputChange} 

        />

        { (username === 'strider2') && <Message/> }

    </>
  )
}
