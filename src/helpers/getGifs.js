/**
 * Funcion para traer por categoria los gifs
 * @returns gifs
 * 
 */
export const getGifs= async(category) =>{
    const api_key='X5c3eWNAi2Pipd4kIrN6XHQFS0PZcmTF';
    const limit =10;
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const {data} =await resp.json();
    //console.log(data);
    const gifs =data.map(img =>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
   // console.log(gifs);
    return gifs;
  }