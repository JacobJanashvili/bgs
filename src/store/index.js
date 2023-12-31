import { createStore } from 'vuex';

const store = createStore({
    state: {
        virusData: null,
        entrogenData: null
        // Your initial state variables go here
    },
    mutations: {
        setVirusData(state, data) {
            state.virusData = data;
        },
        setEntrogen(state,data){
            state.entrogenData = data
        }
        // Your state mutations go here
    },
    actions: {
        // Your actions go here
    },
    getters: {
        // Your getters go here
    },
    modules: {
        // If you have separate modules, you can define them here
    }
});

export default store;