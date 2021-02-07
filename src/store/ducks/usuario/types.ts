export enum UsuarioTypes {
    GET_USUARIOS = 'GET_USUARIOS'
}

export interface UsuarioItem {
    name: string,
    username: string,
    userPicture: string
}

export interface UsuarioState{
    usuario: UsuarioItem
}