import link from '@/api/link';
import apiUrl from '@/api/url';

let HomeModule:Object = {
    state: {
        navBool: true,
        displayDialog: false,
        uplistData: {},
        listdata: []
    },
    mutations: {
        SET_NAV_BOOL(state:any) {
            state.navBool=!state.navBool
        },
        SET_DIALOG(state:any,paylog:any) {
            state.displayDialog = !state.displayDialog;
            state.uplistData = paylog
        },
        CLOSE_DIALOG(state:any) {
            state.displayDialog = !state.displayDialog;
            window.location.reload()
        },
        LISTDATA(state:any,paylog:any) {
            state.listdata=paylog
        },
    },
    actions: {
        USERUPDATE_LIST(context:any) {
            link(apiUrl.userList).then((ok: any) => {
                console.log(ok)
                context.commit("LISTDATA",ok.data)
            })
        },
        DEL_DIALOG(context:any,payload:any) {
            link(apiUrl.userList + "/" + payload.id,"delete",{},{}).then((ok) => {
                console.log(ok)
            })
            window.location.reload()
        }
    },
    getters: {

    }
}

export default HomeModule