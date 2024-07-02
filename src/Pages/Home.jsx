import '../App.css'
import MovieCard from '../components/MovieCard'
import Slider from '../components/Slider'
import {mdata} from '../data'

// import { moviedata } from '../data'


// const url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '3f1337446dmsh8ef0befda1e43c7p1eedc6jsn6f9c6a95d707',
// 		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
// 	}
// };

// async function getdata(){
//     try {
//         const response = await fetch(url, options);
//         result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
const Home=()=>{
    
    return(
        <>
        <div className='poster'>
        <Slider/>
        </div>
        
       <div className='container'>
       {/* {mdata.map((elem)=>(
        <MovieCard key={elem.id} data={elem} />
       ))}  */}
       </div>
        </>
        
    )
}
export default Home