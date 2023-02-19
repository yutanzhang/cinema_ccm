import link from '@/api/link';
import apiUrl from '@/api/url';

let MovieModule: Object = {
    state: {
        movieList: {}
    },
    mutations: {
        LIST_MOVIE(state:any, data:any) {
            state.movieList = data.data
        }
    },
    actions: {
        REFRESH_MOVIE_LIST(context:any,param:any) {
            link(apiUrl.pageMovie,"post",param, {}).then((ok) => {
                context.commit("LIST_MOVIE", ok.data)
            })
        }
    },
    getters: {
        
    }
}

export default MovieModule