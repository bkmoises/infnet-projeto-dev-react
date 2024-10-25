import "../assets/styleGlobal.css";
import React, { useState } from "react";
import { createRatingApi, updateRatingApi } from "../services/api";

function Form({ rating, change, submit }) {
  return (
    <div className="cadastro">
      <div className="field">
        <label htmlFor="nome">Nome:</label>
        <input value={rating.user ?? ''} onChange={(e) => change('user', e.target.value)} type="text" placeholder="Digite seu nome" />
      </div>
      <div className="field">
        <label htmlFor="filme">Filme:</label>
        <input value={rating.movie ?? ''} onChange={(e) => change('movie', e.target.value)} type="text" placeholder="Digite o nome do filme" />
      </div>
      <div className="field">
        <label htmlFor="nota">Nota:</label>
        <input value={rating.note ?? ''} onChange={(e) => change('note', e.target.value)} type="text" placeholder="Digite sua nota" />
      </div>
      <div className="field">
        <label htmlFor="comentario">Comentario:</label>
        <input value={rating.comment ?? ''} onChange={(e) => change('comment', e.target.value)} type="email" placeholder="Insira seu comentário" />
      </div>

      <div className="publicar">
        <button onClick={() => submit(rating)}>
          Publicar
          </button>
      </div>
    </div>
  );
}

export default Form;
