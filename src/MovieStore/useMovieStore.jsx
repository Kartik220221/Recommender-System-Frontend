import {create} from 'zustand'
import { axiosInstance } from '../Axios/AxiosInstance'

export const useMovieStore = create((set,get)=>({
    recommended_movies_data:[],
    queryMovies:[],
    getRecommendation:async(title)=>{
        const movie_req_data = {'movie_title':title}
        const response = await axiosInstance.post('/movie/recommend',movie_req_data)
        if([200,201].includes(response.status)){
            print(response.data)
            const recommendedData = response.data.movie_titles.map((movie,index)=>({
                movie_title:movie,
                movie_image:response.data.movie_images[index]
            }))
            set({recommended_movies_data:recommendedData})
            return response.data
        }
        return {"error":true,"message":response.data||"some error occurred"}
    }
}))