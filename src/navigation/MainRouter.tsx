import {Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/Movieslistcontainer';

import { RouteKey } from './routes';

const MainRouter = () : JSX.Element => {

    return (
        <Routes>
        <Route element={<MoviesListContainer />} path={RouteKey.Index} />
        <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
    </Routes>


    )

}

export default MainRouter;