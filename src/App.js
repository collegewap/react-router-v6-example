import loadable from "@loadable/component";
import React from "react";
import { NavLink as Link, Route, Routes } from "react-router-dom";
import Loading from "./Loading.js";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import { ProtectedPage } from "./ProtectedPage";
import RouteAsObj from "./RouteAsObj";
import Search from "./Search";

const Dashboard = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />,
});

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/object_route" activeClassName="active">
              Route as Object
            </Link>
          </li>
          <li>
            <Link to="/search" activeClassName="active">
              Search
            </Link>
          </li>
          <li>
            <Link to="/public" activeClassName="active">
              Public Page
            </Link>
          </li>
          <li>
            <Link to="/protected" activeClassName="active">
              Protected Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="object_route/*" element={<RouteAsObj />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="public" element={<PublicPage />}></Route>
          <PrivateRoute
            path="protected"
            element={<ProtectedPage />}
          ></PrivateRoute>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export const Home = () => {
  return <div>You are in Home page</div>;
};
export const About = () => {
  return <div>This is the page where you put details about yourself</div>;
};
export const PublicPage = () => {
  return <div>This page can be accessed by anyone</div>;
};
export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
