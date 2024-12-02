import { useGloblContext } from "../../context/context";

const SearchForm = () => {
    const {query, handleSearch} = useGloblContext();
    return(
        <form className="search-form" onClick={(e)=>e.preventDefault()}>
            <h2>Search haker news</h2>
            <input type="text" className="form-input" value={query} onChange={(e)=>handleSearch(e.target.value)}/>
            <button>Search</button>
        </form>
    )
}

export default SearchForm;