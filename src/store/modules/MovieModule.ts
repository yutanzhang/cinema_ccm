import link from '@/api/link';
import apiUrl from '@/api/url';

let MovieModule: Object = {
    state: {
        movieList: {},
        displayUpdate: false,
        updateMovie: {}
    },
    mutations: {
        LIST_MOVIE(state:any, data:any) {
            state.movieList = data.data
        },
        EDIT_MOVIE(state:any, data:any) {
            state.displayUpdate = !state.displayUpdate;
            state.updateMovie = data;
        },
        CLOSE_EDIT(state:any) {
            state.displayUpdate = !state.displayUpdate;
        }
    },
    actions: {
        REFRESH_MOVIE_LIST(context:any,param:any) {
            link(apiUrl.movie.pageMovie,"post",param, {}).then((ok) => {
                context.commit("LIST_MOVIE", ok.data)
            })
        }
    },
    getters: {
        
    }
}

export default MovieModule