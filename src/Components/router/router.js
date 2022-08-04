import ErrorPage from "../../Page/ErrorPage/ErrorPage";
// eslint-disable-next-line import/no-cycle
import CountryDetails from "../../Page/CountryDetails/CountryDetails";
// eslint-disable-next-line import/no-cycle
import HomePage from "../../Page/HomePage/HomePage";

const routes = [
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <HomePage /> },
  { path: "/:country", element: <CountryDetails /> },
];

export default routes;
