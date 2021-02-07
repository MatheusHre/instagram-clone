import { UsuarioItem, UsuarioTypes} from './types'

const initialStateUsuario: UsuarioItem = {
    name: '',
    username: '',
    userPicture: ''
}

function reducerUsuario(state = initialStateUsuario, action: any) {
    switch(action.type) {
        case UsuarioTypes.GET_USUARIOS:
            return {
                name: action.payload.name,
                username: action.payload.username,
                userPicture: action.payload.userPicture
            }
            default:
                return state
    }
}

export default reducerUsuario