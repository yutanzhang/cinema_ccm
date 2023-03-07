import link from '@/api/link';
import apiUrl from '@/api/url';

let CategoryModule: object = {
    state: {
        categoryList: {}
    },
    mutations: {
        LIST_CATEGORY(state: any, data: any) {
            console.log(data)
            state.categoryList = data.data
        },
    },
    actions: {
        REFRESH_CATEGORY_LIST(context: any) {
            link(apiUrl.category.listCategory, "post", {}, {}).then((ok) => {
                context.commit("LIST_CATEGORY", ok.data)
            })
        }
    },
    getters: {

    }
}

export default CategoryModule