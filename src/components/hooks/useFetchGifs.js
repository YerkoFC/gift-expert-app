import { useEffect, useState } from "react"
import { getGifs } from "../../helpers/getGifs";

// Es un estandar que todos los hooks en react
// comienzan con 'use'
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Los efectos no pueden ser 'async' porque esperan
    // algo síncrono
    useEffect(() => {        
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });                    
            })
    }, [ category ])

    return state; // { data: [], loading: true}
}
