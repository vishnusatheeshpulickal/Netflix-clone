import {API_KEY} from '../src/constants/constants'

export const trending =`/trending/all/week?api_key=${API_KEY}&language=en-US`
export const originals =`/discover/tv?api_key=${API_KEY}&with_networks=213`
export const actions = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const adventure = `/discover/movie?api_key=${API_KEY}&with_genres=12`
export const animation = `/discover/movie?api_key=${API_KEY}&with_genres=16`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const crime = `/discover/movie?api_key=${API_KEY}&with_genres=80`
export const documentary = `/discover/movie?api_key=${API_KEY}&with_genres=99`
export const drama = `/discover/movie?api_key=${API_KEY}&with_genres=18`
export const family = `/discover/movie?api_key=${API_KEY}&with_genres=10751`
export const fantacy = `/discover/movie?api_key=${API_KEY}&with_genres=14`
export const history = `/discover/movie?api_key=${API_KEY}&with_genres=36`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const music = `/discover/movie?api_key=${API_KEY}&with_genres=10402`
export const mystery = `/discover/movie?api_key=${API_KEY}&with_genres=9648`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const science = `/discover/movie?api_key=${API_KEY}&with_genres=878`
export const tvMovie = `/discover/movie?api_key=${API_KEY}&with_genres=10770`
export const thriller = `/discover/movie?api_key=${API_KEY}&with_genres=53`
export const war = `/discover/movie?api_key=${API_KEY}&with_genres=10752`
export const western = `/discover/movie?api_key=${API_KEY}&with_genres=37`
export const upcoming = `/movie/upcoming?api_key=${API_KEY}`

