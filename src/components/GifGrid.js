import React from 'react'
import GifGridItem from './GifGridItem';
import Grid from '@material-ui/core/Grid'
// import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from './hooks/useFetchGifs';


const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect permite que se ejecute cierta instrucción cuando el 
    // componente, en este caso ´GifGrid´ es renderizado por 1ra vez
    
    // @param: es una callback function, en la cual indicaremos 
    // la instrucción a ejecutar
    // @param: Array en el cual podemos indicar las variables
    // de las cuales dependerá cuantas veces se tendrá que ejecutar 
    // la instrucción, si se le pasa un array vacio, react solo ejecutará 
    // la instrucción una vez despúes de que se haya renderizado todo el componente
    
    // CUSTOM HOOK QUE SE ENCARGARA DE MANEJAR EL ESTADO DE LA 
    // DATA QUE REGRESA DESDE LA API, ADEMÁS DE MANEJAR TAMBIEN
    // EL ESTADO DE CARGA DE LA PETICION
    const { data: images, loading } = useFetchGifs( category );

    return (
        <div>
            <h3> {category} </h3>
            {/* 
                Si loading no es 'true', entonces no hace nada .
                Es una buena practica para suplantar al operador
                ternario.
            */}
            { loading  && <p>Loading</p> } 
            <Grid container direction="row" spacing={2} wrap="wrap">
                {
                    images.map( img => {
                        return <GifGridItem 
                            key={ img.id }
                            // Forma 1
                            // img={img} 
                            // Forma 2
                            { ...img }
                        />
                    })
                }
            </Grid>
        </div>
    )
}

export default GifGrid
