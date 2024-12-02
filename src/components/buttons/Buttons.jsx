import { useGloblContext } from "../../context/context";

const Buttons = () => {
    const {isLoading, page, nbPages, hanldePage} = useGloblContext();
    return(
        <div className="btn-container">
            <button disabled={isLoading} onClick={() => {hanldePage('dec')}}>prev</button>
            <p>{page + 1} of {nbPages}</p>
            <button disabled={isLoading} onClick={() => {hanldePage('inc')}}>Next</button>
        </div>
    )
}

export default Buttons;