import React, { useEffect, useState } from "react";
import Table from "../components/table";
import { useDispatch } from "react-redux";
import { getAllRatings, deleteCar } from "../store/slices/rating/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) link.href = "/icon.png";

    dispatch(getAllRatings());
  }, [dispatch]);

  return <Table /> 
}

export default App;
