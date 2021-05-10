import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = ( props ) => {
    const [categories, setCategories] = useState(['One Punch']);
    // const handleCategories = () => {
    //     let newCategory = 'Jujutsu Kaisen';
    //     // Forma 1: Se usa cuando no se tiene acceso directo 
    //     // a la variable del hook
    //     setCategories( categories => [newCategory, ...categories]);
    //     // Forma 2: Se usa cuando se tiene acceso a la variable ´newCategory´
    //     setCategories([newCategory, ...categories]);
    // }
 
    return (
        <>
            <h2> GifExpertApp </h2>
            {/* 
                Se está enviando una funcion como prop al componente 
                `AddCategory` 
            */}
            <AddCategory  setCategories={ setCategories }/>
            <hr/>
            {/* <button onClick={handleCategories}> Agregar Categoria </button> */}
            <ol>
                { 
                    categories.map( category => {
                        // Generalmente, cuando se trabajan con datos desde
                        // bases de datos, la key del elemento o dato a 
                        // renderizar corresponde al id del dato, sin embargo
                        // en esta ocasión colocaremos la misma categoria como 
                        // key por que el índice no puede ser
                        // React hace esto para saber qué elemento tiene que 
                        // renderizar, y así no tener que renderizar todo de nuevo
                        return <GifGrid 
                                key={ category }
                                category={ category }
                                />
                    }) 
                }
            </ol>
        </>

    )
}


export default GifExpertApp;


