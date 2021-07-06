import {Module} from "vuex";

type State = {
    title: string,
}


export const testStore: Module<State, any> = {
    namespaced: true,
    state: {
        title: "Dima Lemur"
    },
}