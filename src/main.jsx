import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import './index.css'
import Login from './pages/login/Login.jsx';

import Home from './pages/home/Home.jsx';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Settings from './pages/Setting/Setting';
import Form from './pages/Form/Form';

/* const router = createBrowserRouter(createRoutesFromElements(
    <Route index element={<Login/>}/>
)) */

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />}>
      <Route path="home" element={<Home />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/setting",
    element: <Settings />,
  },
  {
    path: "/form",
    element: <Form />,
  },    
]);

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />)
