import React from 'react'
import logo from '../img/img1.jpg'
const userImg = 'https://st.depositphotos.com/1915171/5078/v/600/depositphotos_50782941-stock-illustration-user-sign-icon-person-symbol.jpg';

const Form = ({ getUserList, createUser }) => {

  //Atributos de la persona
  const [id, setId] = React.useState('')
  const [name, setName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [age, setAge] = React.useState('')
  const [address, setAddress] = React.useState('')

  //Lista donde se guarda la información.
  const [list, setList] = React.useState(getUserList())

  const addUser = (e) => {

    e.preventDefault()

    if (!isAllComplete() || !isValidId(id) || !isValidAge(age)) {
      return;
    }
    createUser({ id: id, name: name, lastName: lastName, age: age, address: address })

    e.target.reset()

    setId('')
    setName('')
    setLastName('')
    setAge('')
    setAddress('')
  }

  function isAllComplete() {

    if (!id.trim()) {
      alert('Completa la Id')
      return false;
    }

    if (!name.trim()) {
      alert('Completa el nombre')
      return false;
    }
    if (!lastName.trim()) {
      alert('Completa el apellido')
      return false;
    }
    if (!age.trim()) {
      alert('Completa la edad')
      return false;
    }
    if (!address.trim()) {
      alert('Completa la dirección')
      return false;
    }
    return true;
  }

  function isValidId(id) {

    if (isNaN(id)) {
      alert('Id no valida')

      return false;
    }

    if (!Number.isInteger(Number(id))) {
      alert('La id debe ser un numero entero')
      return false;
    }

    if (id < 1) {
      alert('La id debe ser mayor a 0')
      return false;
    }

    var find = false;

    getUserList().map((element) => {
      if (element.id == id) {
        find = true;

      }
    })

    if (find) {
      alert('Id en uso')
      return false;
    }

    return true

  }

  function isValidAge(age) {
    if (isNaN(age)) {
      alert('Edad no valida')
      return false;
    }

    return true;
  }

  return (
    <div className="form-container">

      <h1>Registrar Usuarios</h1>
      <img src={logo} alt='userImgView' className='userRegisterImg'></img>

      <div className="input-container">
        <form className='information-f' onSubmit={addUser}>

          <input type="text"
            className='form-control mb-3'
            placeholder='Id'
            onChange={(e) => setId(e.target.value.trim())}
          />

          <input type="text"
            className='form-control mb-3'
            placeholder='Nombre'
            onChange={(e) => setName(e.target.value.trim())}
          />
          <input type="text"
            className='form-control mb-3'
            placeholder='Apellido'
            onChange={(e) => setLastName(e.target.value.trim())}
          />

          <input type="text"
            className='form-control mb-3'
            placeholder='Edad'
            onChange={(e) => setAge(e.target.value.trim())}
          />

          <input type="text"
            className='form-control mb-3'
            placeholder='Dirección'
            onChange={(e) => setAddress(e.target.value.trim())}
          />
          <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>

      </div>

    </div>

  )
}

export default Form