import filterFunction from "./filterFunction";
import sortFunction from "./sortFunction";


const handleQparams = (searchQparams,sortQparams,setCards,arr) => {
    if (sortQparams) {
        sortFunction(
          sortQparams,
          setCards,
          searchQparams
            ? filterFunction(searchQparams, setCards, arr, true)
            : arr
        );
      } else if (searchQparams) {
        filterFunction(searchQparams, setCards, arr);
      }
}

export default handleQparams