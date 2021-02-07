import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { StoriesItem, StorieState } from '../../store/ducks/stories/types'
import { getStorie } from '../../store/ducks/stories/actions'

const Storie = () => {

    const dispatch = useDispatch()

    const storie = useSelector((state: StorieState) => state.storie.arrayStories)

    useEffect(() => {
        axios.get("http://localhost:4000/stories")
            .then(resposta => dispatch(getStorie(resposta.data)))
    }, [])

    return (
        <div className="stories">
            <h2>Stories</h2>
            { storie !== undefined &&
              storie.map((item: StoriesItem) => (
            <div className="storie" key={item.id}>
                <div className="storie-image">
                    <img src={item.userPicture} alt="user" />
                </div>
                <div className="storie-user">
                    <strong>{item.user}</strong>
                    <span>{item.time}</span>
                </div>
                </div>
                ))
            }
        </div>

    );
}

export default Storie