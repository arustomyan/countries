import React, { useState, useEffect, useContext } from "react";
import Loader from "../../Components/UI/Loader/Loader.jsx";
import RestApi from "../../Components/API/RestApi.jsx";
import { useFetching } from "../../Components/Hooks/useFetching";
import { useCountry } from "../../Components/Hooks/useCountry.js";
import Filter from "../../Components/Filter/Filter.jsx";
import CardList from "../../Components/CardList.jsx";

const HomePage = () => {
  const [arrConries, setArrContries] = useState([]);
  const [filter, setFilter] = useState({ query: "", select: "" });

  const searchedCoutry = useCountry(arrConries, filter.select, filter.query);

  const [fetchCounties, isLoading] = useFetching(async () => {
    const responce = await RestApi.getAll();
    setArrContries(responce);
  });

  useEffect(() => {
    fetchCounties();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {isLoading ? <Loader /> : <CardList countries={searchedCoutry} />}
    </div>
  );
};

export default HomePage;
