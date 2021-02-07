import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/ducks/posts/actions';
import { UsuarioState } from '../../store/ducks/usuario/types';

const Form  = () => {

  const inputImg = useRef<HTMLInputElement>(null)
  const inputDesc = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  const { name, userPicture} = useSelector((state: UsuarioState) => state.usuario)

  const atualiza = () => {
    axios.get("http://localhost:4000/posts")
        .then(resposta => dispatch(getPost(resposta.data)))
  }

  const enviarPost = () => {
    atualiza()
    const requisicao = {
      user: name,
      userPicture: userPicture,
      postPicture: inputImg.current?.value,
      description: inputDesc.current?.value,
      likes: 0
    }
    
    axios.post("http://localhost:4000/posts/", requisicao)
    atualiza()
  }

  useEffect(() => {
    atualiza()
  }, [])

  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" ref={inputImg} />
        <input type="text" placeholder="Digite uma descrição" ref={inputDesc} />
        <button onClick={enviarPost}>Postar!</button>
      </div>
  );
}

export default Form;