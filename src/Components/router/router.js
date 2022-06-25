import Error from "../../Page/Error.jsx";
import CountryDetails from "../../Page/CountryDetails/CountryDetails";
import HomePage from "../../Page/HomePage/HomePage.jsx";

export const routes = [
  { path: "*", element: <Error /> },
  { path: "/", element: <HomePage /> },
  { path: "/:country", element: <CountryDetails /> },
];
