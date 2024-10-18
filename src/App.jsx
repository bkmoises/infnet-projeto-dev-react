import "./assets/styleGlobal.css";
import React, { useEffect } from "react";
import Layout from "./components/layout";

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = '../public/icon.png';
    }
  }, []);

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuário</th>
            <th>Filme</th>
            <th>Nota</th>
            <th>Comentário</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João Silva</td>
            <td>O Poderoso Chefão</td>
            <td className="nota">9.5</td>
            <td className='comentario'>
              Um clássico atemporal! As atuações e a trama são excepcionais.
            </td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria Costa</td>
            <td>Interestelar</td>
            <td className="nota">8.8</td>
            <td className='comentario'>
              Visualmente incrível e emocionante, mas o final me deixou com
              algumas dúvidas.
            </td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pedro Souza</td>
            <td>Vingadores: Ultimato</td>
            <td className="nota">9.0</td>
            <td className='comentario'>
              Cheio de ação e nostalgia, uma conclusão épica para a saga dos
              heróis
            </td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ana Pereira</td>
            <td>A Origem</td>
            <td className="nota">10</td>
            <td className='comentario'>
              Um filme que te faz pensar do início ao fim, excelente direção de
              Nolan.
            </td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Lucas Oliveira</td>
            <td>Parasita</td>
            <td className="nota">9.2</td>
            <td className='comentario'>
              Uma obra-prima que aborda as desigualdades sociais de forma
              brilhante
            </td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Beatriz Mendes</td>
            <td>Corra!</td>
            <td className="nota">8.5</td>
            <td className='comentario'>
              Uma crítica social intensa e cheia de suspense, surpreendente do
              início ao fim.
            </td>
            <td>
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <a href="#" className="btn-excluir">
                Excluir
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default App;
