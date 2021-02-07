import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { PostsItem, PostState } from "../../store/ducks/posts/types"
import { getPost } from "../../store/ducks/posts/actions"
import { FiHeart } from "react-icons/fi"



const Posts = () => {

    const dispatch = useDispatch()
    
    const post = useSelector((state: PostState) => state.post.arrayPosts)

    useEffect(() => {
        axios.get("http://localhost:4000/posts")
            .then(resposta => dispatch(getPost(resposta.data)))
    }, [])

    const atualizarTudo = () => {
        axios.get("http://localhost:4000/posts")
            .then(resposta => dispatch(getPost(resposta.data)))
    }


    return (
        <>
        { post !== undefined &&
          post.map((item: PostsItem) => (
          <div className="post" key={item.id}>
            <header>
                <img src={item.userPicture} alt="user" />
                <div className="post-user">
                    <strong>{item.user}</strong>
                    <span>{item.location}</span>
                </div>
            </header>
            <div className="post-image">
                <img src={item.postPicture} alt="post" />
             </div>
             <div className="post-likes">
                <FiHeart onClick={() => {
                    atualizarTudo()
                    const requisicao = {
                        likes: item.likes + 1
                    }

                    axios.patch(`http://localhost:4000/posts/${item.id}`, requisicao)
                    atualizarTudo()
                }}/>
                {item.likes}
            </div>
            <p>{item.description}</p>
            
        </div>
        ))
        }
        </>
    );
}

export default Posts;