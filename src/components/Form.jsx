

function Form({setName, name}) {

    const handleChange = (ev) => {
        const value = ev.target.value
        setName(value);
    }
  return (
    <>
    <form className="form">
        <input type="text" placeholder="Introduce tu nombre" onChange={handleChange} value={name}/>
    </form>
    <p>El jugador es: {name}</p>
    </>
  )
}

export default Form