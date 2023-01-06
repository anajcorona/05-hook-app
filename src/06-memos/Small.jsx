import { memo } from "react"

export const Small = memo(({ value }) => {

    // Es una funcion que le dice a react memoriza este componente
    // solo cuando los properties cambian entonces se vuelve a ejecutar
    console.log("Me volví a dibujar :(")

  return (
    <small>{ value }</small>
  )
})
