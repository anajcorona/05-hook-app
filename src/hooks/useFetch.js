import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })
    
    const getFetch = async () => {

        setstate({
            ...state,
            isLoading: true,
        });

        const resp = await fetch( url );
        const dataResp = await resp.json();
        const data = dataResp.data;

        setstate({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
  return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
  }
}
