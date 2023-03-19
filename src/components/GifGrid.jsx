import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  
  const {images,isLoading} = useFetchGifs(category);
  console.log(isLoading);
//const valorRetorno =useFetchGifs(category);
//console.log(valorRetorno);
/*const [images, setImagenes] = useState([]);

const getImages = async()=>{
  const newImages = await getGifs(category);
  setImagenes( newImages);
  
}

useEffect(() => {  
  getImages();
  },[]);*/


  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2>Cargando...</h2>) 
        }
           {images.map( (image) =>(
              <GifItem 
              key={image.id}
              {...image}
              />

           ))
           
          }
        
    </>
  )
}
