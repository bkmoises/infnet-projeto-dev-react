import "./assets/styleGlobal.css";
import React, { useEffect, useState } from "react";
import Layout from "./components/layout";
import Table from './components/table';
import { getDataApi, deleteRatingApi } from './services/api';

function App() {

  const [data, setData] = useState([]);

    const deleteRating = async (id) => {

    try {
      await deleteRatingApi(id);
      await getData();
    }
    catch (error) {
      alert('Erro ao excluir avaliação');
    }
  }

  const getData = async () => {
      const fetchedData = await getDataApi();
      setData(fetchedData);
  }


  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");

    if (link) {
      link.href = '/icon.png';
    }

    getData();

  }, []);

  return (
    <Layout>
      <Table datas={data} deleteFn={deleteRating} />
    </Layout>
  );
}

export default App;
