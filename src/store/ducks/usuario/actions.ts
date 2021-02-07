import { action } from 'typesafe-actions'
import { UsuarioItem, UsuarioTypes} from './types'

export const getUsuario = (payload: UsuarioItem) => action(UsuarioTypes.GET_USUARIOS, payload)