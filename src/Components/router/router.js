import ErrorPage from "../../Page/ErrorPage/ErrorPage.jsx";
import CountryDetails from "../../Page/CountryDetails/CountryDetails";
import HomePage from "../../Page/HomePage/HomePage.jsx";

export const routes = [
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <HomePage /> },
  { path: "/:country", element: <CountryDetails /> },
];
