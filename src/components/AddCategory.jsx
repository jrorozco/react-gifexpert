import {useState} from 'react';

/***
 * en este modulo recibimos una nueva funcion y por medio de hooks regresamos un valor que sera agregado al componente que lo invoque
 */
export const AddCategory =({onNewCategory})=>{
    const [inputValue, setInputValue] = useState('');
    //recibimos un target del formulario cada que presionamos una tecla se dispara el evento
    const onInputChange =({target})=>{
        setInputValue(target.value);
    }
    
    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;// si viene vacio salimos
        //console.log(inputValue);
        //setCategories((categories)=>[inputValue, ...categories]);
        //La recibe y se ejecuta la funcion...
        onNewCategory(inputValue.trim());
        setInputValue('');

    }
    // renderizamos el formulario para ingresar los datos le enviamos un metodo para que no envie el formulario hasta que se de enter y llama a la funcion onSubmit...
    return (
        <form onSubmit={(e) => onSubmit(e)} >
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}// le enviamos al submit el valor para que lo envie a la funcion por parametro
                // onChange={(event)=>onInputChange(event)}
                onChange={onInputChange}
            />

        </form>
    )
}