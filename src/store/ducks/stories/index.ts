import { TypesStories, Stories} from './types'

const initialStateStories: Stories = {
    arrayStories: []
}

function reducerStorie(state = initialStateStories, action: any) {
    switch(action.type) {
        case TypesStories.GET_STORIES:
            return {
                arrayStories: action.payload,
            }
            default: 
                return state
    }
}

export default reducerStorie