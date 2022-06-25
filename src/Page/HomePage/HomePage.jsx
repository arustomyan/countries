import React, { useState, useEffect } from "react";
import Loader from "../../Components/UI/Loader/Loader.jsx";
import RestApi from "../../Components/API/RestApi.jsx";
import { useFetching } from "../../Components/Hooks/useFetching";
import { useCountry } from "../../Components/Hooks/useCountry.js";
import Filter from "../../Components/Filter/Filter.jsx";
import CardList from "../../Components/CardList.jsx";

const HomePage = () => {
  const [arrCountries, setArrCountries] = useState([]);
  const [filter, setFilter] = useState({ query: "", select: "" });

  const searchedCountry = useCountry(arrCountries, filter.select, filter.query);

  const [fetchCounties, isLoading] = useFetching(async () => {
    const response = await RestApi.getAll();
    setArrCountries(response);
  });

  useEffect(() => {
    fetchCounties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {isLoading ? <Loader /> : <CardList countries={searchedCountry} />}
    </div>
  );
};

export default HomePage;
