import { createStore } from 'vuex'
import {testStore} from "@/client/store/modules/test.module";

export interface State {
    count: number
}


export const store = createStore<State>({
    state: {
        count: 0
    },
    modules: {
        test: testStore
    }
})