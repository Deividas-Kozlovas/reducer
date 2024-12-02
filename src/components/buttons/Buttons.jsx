import { useGloblContext } from "../../context/context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGloblContext();
  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        onClick={() => {
          handlePage("dec");
        }}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => {
          handlePage("inc");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
