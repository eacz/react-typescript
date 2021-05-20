//en caso de tener objetos anidados, crear una interfaz para cada uno de ellos
//teniendo en cuenta que el objeto principal va primero, y luego el resto que va anidado en el
// -Estandar-
interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: Direccion
}

interface Direccion {
    pais: string,
    caseNo: number
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Esteban Canteros',
    edad: 20,
    direccion: {
      pais: 'Argentina',
      caseNo: 43
    }
  }
  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}
