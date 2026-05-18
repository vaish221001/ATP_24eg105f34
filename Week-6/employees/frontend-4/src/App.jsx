import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Home from "../components/Home";
import ListOfEmp from '../components/ListOfEmp';
import CreateEmp from '../components/CreateEmp';

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "create-emp",
          element: <CreateEmp />,
        },
        {
          path: "list-of-employees",
          element: <ListOfEmp />,
        },
    ]
         
    }
        ]);
    

  return <RouterProvider router={routerObj} />;
}


export default App;

