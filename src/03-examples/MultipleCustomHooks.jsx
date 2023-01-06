import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(0);
    const { data, isLoading, hasError } = useFetch(`https://api.giphy.com/v1/gifs/search?api_key=eBx1EfbUS82g1p9YcqBS6xp0SRPNDjSO&q=minion&limit=1000`);
    const { title, slug } = !!data && data[counter];

  return (
    <>
        <h1> Breaking Bad Quotes</h1>
        <hr />

        {
            isLoading 
            ? <LoadingQuote/> 
            : <Quote title={ title } slug={ slug }/>
        }

        <button 
            className="btn btn-primary" 
            disabled={ isLoading }
            onClick={ () => increment() }>
            Next Quote
        </button>

    </>
  )
}
