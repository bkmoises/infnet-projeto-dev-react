import React, { useEffect, useState } from "react";
import Table from "../components/table";
import { useDispatch } from "react-redux";
import { getAllCars } from "../store/slices/car/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) link.href = "/icon.png";

    dispatch(getAllCars());
  }, [dispatch]);

  return <Table /> 
}

export default App;
