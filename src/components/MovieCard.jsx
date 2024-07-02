import '../App.css'


let MovieCard=({data})=>{
    let {image,title,year,ratings}=data
    return(
        <div className="Movie-card" >
            <img className='movie-img' src={data.image} alt="" />
            <h3 className='movie-title'>{data.title}</h3>
        </div>
    )
}
export default MovieCard