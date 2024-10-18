import "./assets/styleGlobal.css";
import React, { useEffect } from "react";
import Layout from "./components/layout";
import Table from './components/table';

import datas from '../data.json'

const columns = ['Id', 'Usuario', 'Filme', 'Nota', 'Comentario']

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = '../public/icon.png';
    }
  }, []);

  return (
    <Layout>
      <Table columns={columns} datas={datas} />
    </Layout>
  );
}

export default App;
