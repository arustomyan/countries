import { useState, useEffect } from "react";
import Loader from "../../Components/UI/Loader/Loader";
import RestApi from "../../Components/API/RestApi";
import useFetching from "../../Components/Hooks/useFetching";
import { useCountry } from "../../Components/Hooks/useCountry";
import Filter from "../../Components/Filter/Filter";
import CardList from "../../Components/CardList";

function HomePage() {
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
}

export default HomePage;
