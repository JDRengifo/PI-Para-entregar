import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import { getCountries } from '../../redux/actions';
import './navBar.css'


function NavBar({ handleChange, handleSubmit, handleOrder,handleOrderActivity, handleCount, handleOrderContinents }) {
  
  const dispatch = useDispatch() 
  const allActivities = useSelector((state)=>state.allActivities)
  
  
  const onClickHome = ()=>{
    dispatch(getCountries())
  }

  // console.log(allActivities)
  const selectorACT = allActivities.map(activity=>activity.nombre)
  // console.log(selectorACT)
  return (
    
        <div className='navBox'>
          <div className='navBoxgrid'>
          <div className='navGrid1'>
          <div className='buscarX'>
            <form onSubmit= {handleSubmit}>

              {/* <h5>BUSCADOR DE PAÍS POR NOMBRE O CODIGO CO3</h5> */}
              <input placeholder="Buscar" onChange={handleChange}/>
              <button type='submit' >BUSCAR</button>
              <h5>FILTRADORES DE PAISE</h5>
            </form>
            </div>
          </div>


          <div className='navGrid3'>
            <div>
            <h5>ORDENAR POR ACTIVIDAD TURISTICA</h5>
              <select name="selectorPaises" onChange={handleOrderActivity}>
                {selectorACT.map((activity)=>(<option key={`${activity}`} value={`${activity}`}>
                {activity}
                </option>))}
              </select>

            </div>

            {/* <div>
              
            <Select 
                id = 'selectorPaises'
                options = {allActivities.map((activity)=> ({label:activity.nombre, value:activity.id}))}
                onChange={handleOrderActivity}
                />
            </div> */}
          </div>
          
          <div className='navGrid4'>
            <div>
              <h5>CREAR ACTIVIDADES</h5>
              <Link to={'/createActivities'}>
                 <button onClick={onClickHome}>CreateActivities</button>
               </Link> 
            </div>
          </div>

            {/* Ordenar por número de pobladores */}
          <div className='navGrid5'>
            <div className='navGrid51'>
              <select onChange={handleCount}>
                <option key={'B'} value="B">Por Población</option>
                <option key={'X'} value="X">Mayor_menor</option>
                <option key={'Y'} value="Y">Menor_Mayor</option>
              </select>
            </div>
              
            {/* Ordenar por orden alfabetico */}
            <div className='navGrid52'>
              <select onChange={handleOrder}>
                <option key={'B'} value="B">Orden Alfabético</option>
                <option key={'AB'} value="A">Ascendente</option>
                <option key={'D'} value="D">Descendente</option>
              </select>
            </div>
              
            
            <div className='navGrid53'>
              <select onChange={handleOrderContinents}>
                  <option key={'A'} value="A">Por Continente</option>
                  <option key={'All'} value="All">todos</option>
                  <option key={'Africa'} value="Africa">Africa</option>
                  <option key={'Antartica'} value="Antarctica">Antartida</option>
                  <option key={'Asia'} value="Asia">Asia</option>
                  <option key={'Europe'} value="Europe">Europa</option>
                  <option key={'NorthAmerica'} value="North America">Norte América</option>
                  <option key={'SouthAmerica'} value="South America">Sur América</option>
                  <option key={'Oceania'} value="Oceania">Oceanía</option>
                </select>
              </div>
              

            </div>
          </div>
          <div className='navGrid6'>
          <div className='navGrid2'>
          </div>
          
        </div>
          {/* <form onChange={handleChange}>
            
          </form>

          <Link to={'/home'}>
          <button onClick={onClickHome}>Home</button>
          </Link>
          */}
        </div>

 

  )
}

export default NavBar

// https://developer.mozilla.org/es/docs/Web/HTML/Element/select
// https://docs.google.com/spreadsheets/d/1z_9PuIsFweGAZNHGqYrm5JqTt-6icFAXllKDXP8i1PQ/edit#gid=0