import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{//data
        loading:false,
    },
    mutations:{//methods
        takeloading(state){
            // console.log('res')
            state.loading=true;
        },
        shutloading(state){
            // console.log('req')
            state.loading=false;
        },
    },
    getters:{//computed

    },
    actions:{//异步方法集合

    },
    plugins:[createPersistedState()]
})