import Error from "../../Page/Error";
import CountryDetails from "../CountryDetails/CountryDetails";
import Cards from '../../Page/Cards/Cards';

export const routes = [
    {path: '*', element: <Error />},
    {path: '/', element: <Cards />},
    {path: '/:country', element: <CountryDetails />}

]
