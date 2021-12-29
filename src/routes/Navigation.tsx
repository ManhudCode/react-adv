import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="" />
                        <ul>
                            {
                                routes.map(({to, name}) => (
                                    <li key={to}>
                                        <NavLink className={ ({isActive}) => isActive ? 'nav-active' : ''} to={to}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(route => (
                                <Route key={route.to} path={route.path} element={ <route.Component/>}/>

                            ))
                        }
                        <Route path="/*" element={ <Navigate to="/lazyload" replace/> }/>
                    </Routes>
                </div>
            </BrowserRouter>

        </Suspense>
    )
}
