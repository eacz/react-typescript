export const TiposBasicos = () => {
  let nombre: string | number = 'Esteban';
  //nombre = 123;
  const edad: number = 20;
  const isActive: boolean = true;

  const knowledge: string[] = []
  knowledge.push('react');
  knowledge.push('vue');
  knowledge.push('js');
  


  return (
    <>
      <h3>Tipos básicos</h3>
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{isActive ? 'online' : 'offline'}</p>
      <p>{knowledge.join(', ')}</p>
    </>
  )
}

