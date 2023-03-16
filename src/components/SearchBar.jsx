import lupa from '../assets/imagenes/lupa.png';
import './searchbar.css'

export default function SearchBar(props) {
    return(
        <div className='main-bar'>
            <img src={lupa}></img>
            <input name="busqueda" type="text" onChange={props.onSearch} placeholder="Search"/>
        </div>
    )
}