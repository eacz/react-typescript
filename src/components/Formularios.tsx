import { useForm } from "../hooks/useForm"

export const Formularios = () => {
  const {formulario, email, password, onChange} = useForm({
    email: 'test@test.com',
    password: '123456'
  })
  return (
    <>
      <h3>Formularios</h3>
      <input 
        type="text" 
        onChange={({target: {value}}) => onChange( value,'email')} 
        value={email} 
        className="form-control" 
        placeholder="Email" />
      <input 
        type="password" 
        onChange={({target: {value}}) => onChange(value, 'password')} 
        value={password} 
        className="form-control my-2" 
        placeholder="Password" />

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>


      </>
  )
}
