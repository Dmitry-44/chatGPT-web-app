import { reactive, ref, Ref } from "vue"
import { User } from "./user.entity"


type State = {
    user: User|null
    appIsExpanded: boolean
}

export const store = {
    state: reactive<State>({
        user: null,
        appIsExpanded: false,
    }),

    getUser() {
        return this.state.user;
    },
    getAppIsExpanded() {
        return this.state.appIsExpanded;
    },
    setUser(user: User) {
        this.state.user=user
    },
    setAppIsExpanded(expanded: boolean) {
        this.state.appIsExpanded=expanded
    }
    
}