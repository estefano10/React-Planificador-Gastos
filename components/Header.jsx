import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
  gastos, 
  setGastos,
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? ( //aca se valida el presupuesto para poder ingresar a la pantalla principal
          //si es valido me trae el componente que da control a los gastos
          <ControlPresupuesto 
            gastos={gastos}
            setGastos={setGastos}
            presupuesto = {presupuesto} //via prop enviamos el presupuesto para que este disponible en la pantalla de control
            setPresupuesto = {setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          /> 
        ) : (
          <NuevoPresupuesto
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto}
            setIsValidPresupuesto = {setIsValidPresupuesto} 
          />
        )}

        
    </header>
  )

      
}

export default Header