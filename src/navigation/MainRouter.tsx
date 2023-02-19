import { SignUpmodal } from 'components/Modal/SignUpModal/SignUpModal';
import {Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/Movieslistcontainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';

import { RouteKey } from './routes';


const MainRouter = () : JSX.Element => {

    return (
        <Routes>
        <Route element={<MoviesListContainer />} path={RouteKey.Index} />
        <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
        <Route element={<MovieInfoContainer />} path={RouteKey.Movie} />
        <Route element={<SignUpmodal/>} path={RouteKey.SignUp} /> 
    </Routes>


    )

}

export default MainRouter;