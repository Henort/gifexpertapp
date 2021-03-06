// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);


    // SE EJECUTA CUANDO ALGÚN ITEM DE LA LISTA DE DEPENDENCIAS CAMBIA
    // SI LA LISTA DE DEPENDENCIAS ESTÁ VACIO, SE PUEDE DEJAR [] Y SE EJECUTARÁ SOLO UNA VEZ EL USE EFFECT
    // useEffect( () => {
        // getGifs( category )
            // .then( images => {
                // setImages(images);
            // })
            // .catch( error => {
                // console.log( error );
            // });
    // }, [ category ]);

    //USO DEL HOOK PERSONALIZADO
    const {data:images, loading} = useFetchGifs( category );
    // console.log( images );

    

   // getGifs();
   // <h3> {count} </h3>
   // <button onClick={() => setCount(count + 1)}>Sumar contador</button>

    return (
        <>
            <h3> {category} </h3>
            <hr className="linea"/>

            {
                loading && <p className="animate__animated animate__flash">Loading</p>
            }

            <div className="cardGrid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
        
    )
}
