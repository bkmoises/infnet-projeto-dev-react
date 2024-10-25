import React, { useEffect, useState } from "react";
import "../assets/styleGlobal.css";
import Table from "../components/table";
import Form from "../components/form";
import { getDataApi, deleteRatingApi } from "../services/api";


function App() {
  const [data, setData] = useState([]);
  const [showList, setShowList] = useState(true);
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);

  const deleteRating = async (id) => {
    try {
      await deleteRatingApi(id);
      await getData();
    } catch (error) {
      alert("Erro ao excluir avaliação");
    }
  };

  const cadastro = (value) => {
    setShowList(value);
    setUpdate(false);
  }

  const getData = async () => {
    const fetchedData = await getDataApi();
    setData(fetchedData);
  };

  const editForm = (data) => {
    setForm(data);
    setShowList(!setShowList);
    setUpdate(true);
  }



  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");

    if (link) {
      link.href = "/icon.png";
    }

    getData();
  }, [showList]);

  return (
    <>
      { showList ? <Table datas={data} deleteFn={deleteRating} editForm={editForm} /> : <Form act={setShowList} form={form} setForm={setForm} update={update} /> }
    </>
  );
}

export default App;
