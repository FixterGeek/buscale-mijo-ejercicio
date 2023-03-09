import './searchBar.css'

export default function SearchBar({onSearch,numberOfResults}){
    return (
        <>
        <div className="container">
        <input onChange={({target:{value}})=>{
            onSearch(value);
        }} className="input" type="text" placeholder="Search" />

        </div>
               <p className='results'>
               Resultados:{numberOfResults}
               </p>
               </>
    )
}