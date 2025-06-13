import React, { useState } from 'react'
import { useMovieStore } from './MovieStore/useMovieStore'

const App = () => {
  
  const {recommended_movies_data,getRecommendation} = useMovieStore()
  const [movieTitle,setMovieTitle] = useState('')

  const handleSubmit = async()=>{

    const movieData = await getRecommendation(movieTitle)
    setMovieTitle('')
    if(movieData){
      if(movieData.error){
      console.log(movieData)
      
      return
    }
    
    console.log(movieData)
    console.log(recommended_movies_data)
    return
    }
    
  }

  return (
    <div className='flex flex-col items-center justify-center max-h-[100vh] h-[100vh] max-w-[100vw] w-[100vw] bg-black/80 text-white'>
      <div className='flex flex-col gap-y-4 items-start h-fit w-fit'>
        <h1 className='text-2xl font-medium'>Get a movie recommendation</h1>
        <input value={movieTitle} onChange={e=>setMovieTitle(e.target.value)} type="text" placeholder='Enter the movie name' className='p-2 px-6 flex justify-center items-center bg-white/5 border-2 border-gray-400 rounded-lg w-[60vw]'/>
        <button type='button' className='flex self-center bg-white/25 font-medium w-[25%] h-10 rounded-2xl hover:scale-104 transition-all duration-300 hover:font-bold justify-center items-center' onClick={handleSubmit}>Submit</button>
      </div>
      <div className='h-fit p-10 self-center grid grid-cols-3 gap-x-10 gap-y-10 w-fit'>
        {recommended_movies_data&&recommended_movies_data.map((movieData,index)=>(
          <div className='h-[32vh] min-h-[32vh] flex flex-col w-[10vw] shadow-[0px_1px_2px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-x-1.5 hover:-translate-y-1.5 duration-400 rounded-xl'>
            <img src={movieData.movie_image} alt={movieData.movie_title} className='h-[80%] w-[100%] object-cover object-top' />
            <h1 className='text-white text-[12px] w-fit self-center flex justify-between items-center h-full'>{movieData.movie_title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
