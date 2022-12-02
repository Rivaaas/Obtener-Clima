import {useState} from "react";
import useClima from "../hooks/useClima";


const Formulario = () => {


  const {busqueda,datosBusqueda,consultarClima} = useClima()
  const {ciudad,pais} = busqueda

  const [alerta,setAlerta] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if(Object.values(busqueda).includes("")){
      setAlerta("Todos los campos son obligatorios")
      return
    }

    consultarClima(busqueda)

  }

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input name="ciudad" id="ciudad" type="text" onChange={datosBusqueda} value={ciudad} />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select name="pais" id="pais" type="text" onChange={datosBusqueda} value={pais}>
            <option value="">Seleccione un pais</option>
            <option value="US">Estados Unidos</option>
            <option value="CL">Chile</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input
          type="submit"
          value="Consultar Clima"
        />
      </form>
    </div>
  );
};

export default Formulario;
