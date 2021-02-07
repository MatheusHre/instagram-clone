import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsuario } from "../../store/ducks/usuario/actions"
import { UsuarioState } from "../../store/ducks/usuario/types"


const User = () => {

    const dispatch = useDispatch()

    const { name, username, userPicture} = useSelector((state: UsuarioState) => state.usuario)

    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then(resposta => dispatch(getUsuario(resposta.data)))
    }, [])

    return (
        <div className="user-info">
          <img
            alt="Perfil"
            src={userPicture}
          />
          <div className="user-bio">
            <strong>{name}</strong>
            <span>{username}</span>
          </div>
        </div>        
    )
}

export default User