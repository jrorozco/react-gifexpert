import {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

/**
 * Este es un modulo de react en este modulo hay un hook que utilizamos para guardar un estado
 * este estado ñ
 * 
 *  **/

export const GifExpertApp =()=>{
    const [categories, setCategories] = useState([ 'Dragon ball']);

    const onAddCategory =(newCategory)=>{
       //categories.push('Vegueta');
       //console.log('valorant');
       //setCategories(['Valorant' , ...categories]);
       console.log(newCategory);
       if(categories.includes(newCategory))return;
       setCategories(category => [newCategory,...categories]);
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>
            {/** En esta parte de es un modulo que envia una nueva categoria a  AddCategoria */}
            <AddCategory 
             //setCategories={setCategories} 
             onNewCategory={event =>(onAddCategory(event))}
            />
            {/*<button onClick={onAddCategory}>Agregar</button>*/}
               
                    {/*Enviamos properties key y categoria para que nos retorne un data grid */}
                  {categories.map((category) =>
                    (
                        <GifGrid 
                        key={category} 
                        category={category}
                        />
                    ))    
                }   
              
        </>
    )
}