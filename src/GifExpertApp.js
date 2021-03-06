import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Dragon Ball', 'The avengers'];

    const [categories, setCategories] = useState(['The avengers']);

    // const handleAdd = () => {
        // const elementoNuevo = 'TENET';

        // SIMPLEMENTE TOMA TODOS LOS VALORES ANTERIORES DEL ARREGLO YA DEFINIDO EN EL ESTADO ANTERIOR Y LE AGREGA UNO NUEVO.
        // setCategories( [...categories, 'TENET'] );

        // EL SET CATEGORIES PUEDE TENER UN CALLBACK RECIBIENDO COMO PARAMETRO EL ESTADO ANTERIOR Y RETORNANDO EL NUEVO VALOR.
        // setCategories(cats => [...cats, 'TENET']);
    // }

    return (
        // NO SE PUEDE USAR UN FOR YA QUE ESTE NO REGRESA NINGUN VALOR
        // EN ESTOS CASOS SE NECESITA UNA SENTENCIA QUE PERMITA DEVOLVER UN VALOR AL EJECUTARSE.

        // categories.map( (category, idx) )

        // BOTON PARA AGREGARLE NUEVO ITEM AL ARRAY <button onClick={ handleAdd }>Agregar</button>

        /**
         * <ol>
                { 
                    categories.map( category => {
                        return <li key= {category} > {category} </li>
                    })
                }
            </ol>
         */
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories} />
            <hr/>

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>

            
            
        </>
    );
}

export default GifExpertApp;