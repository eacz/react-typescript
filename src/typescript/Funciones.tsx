export const Funciones = () => {

  const sumar = (a:number, b:number):number => {
    return a+b;
  }


  return (
    <>
      <h3>Funciones</h3>
      <p>Resultado: {sumar(7,12)} </p>  
    </>
  )
}
