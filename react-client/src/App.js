import Login from ".//pages/login/Login";
import Register from ".//pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useState, useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./style.scss";
import { DarkModeContext } from "./context/DarkModeContext";
import { AuthContext } from "./context/AuthContext";

//import Questions from "./pages/questions/Questions";
//import Answers from "/pages/answers/Answers";

import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {

  const [userName, nameSetter] = useState("bob");

  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar userName={ userName }/>
        <div style={{displey: "flex"}}>
          <LeftBar />
          <div style={{ flex: 6}}>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
/*      {
          path: "questions/:id",
          element: <Questions />,
        },
        {
          path: "answers/:id",
          element: <Answers />,
        },*/
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
    
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
