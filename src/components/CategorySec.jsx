import { useAsyncError } from 'react-router-dom'
import '../App.css'
import { useState, useEffect } from 'react'


function CategorySec(){
const [content,Setcontent]=useState([])
useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6ed750137b293f21a188d18ce55ec9e0&language=en-US"
    )
      .then((res) => res.json()) //6ed750137b293f21a188d18ce55ec9e0
      .then((data) => Setcontent(data.results));
  }, []);
    return(
        <>
        
        </>
    )
}
export default CategorySec