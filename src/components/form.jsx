import "../assets/styleGlobal.css";
import React, { useState } from "react";
import { createRatingApi, updateRatingApi } from "../services/api";

function Form({ act, form, setForm, update }) {
  
  const setChage = (field, value) => {
    setForm({
      ...form,
      [field]: value 
    })
  }

  const updateRating = async (id, data) => {
    updateRatingApi(id, data).then(() => {
      alert('Avaliação atualizada com sucesso');
      setShowList(!setShowList);
    })
  }

  const submit = async () => {
      try {
        const action = update ? updateRatingApi : createRatingApi;

        await action(form);
        alert('Avaliação registrada com sucesso');
        setForm({});
        act(true);
      } catch (error) {
        alert('Não foi possível cadastrar a avaliação');
      }
  }

  return (
    <div className="cadastro">
      <div className="field">
        <label htmlFor="nome">Nome:</label>
        <input value={form.user ?? ''} onChange={(e) => setChage('user', e.target.value)} type="text" placeholder="Digite seu nome" />
      </div>
      <div className="field">
        <label htmlFor="filme">Filme:</label>
        <input value={form.movie ?? ''} onChange={(e) => setChage('movie', e.target.value)} type="text" placeholder="Digite o nome do filme" />
      </div>
      <div className="field">
        <label htmlFor="nota">Nota:</label>
        <input value={form.note ?? ''} onChange={(e) => setChage('note', e.target.value)} type="text" placeholder="Digite sua nota" />
      </div>
      <div className="field">
        <label htmlFor="comentario">Comentario:</label>
        <input value={form.comment ?? ''} onChange={(e) => setChage('comment', e.target.value)} type="email" placeholder="Insira seu comentário" />
      </div>

      <div className="publicar">
        <button onClick={() => submit()}>
          Publicar
          </button>
      </div>
    </div>
  );
}

export default Form;
