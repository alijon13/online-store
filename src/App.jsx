
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import ProductById from "./Pages/ProductById/ProductById";
import Layout from "./Layout/Layout";
import Buket from "./Pages/Buket/Buket";

function App()
{
  const {t , i18n} = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    AOS.init();
  }, [])

  const router = createBrowserRouter(
    [

      {
        path:"/",
        element: <Layout/>,
        children:
        [
          {
            index: true,
            element: <Home/>
          },
          {
            path: 'product/:id', // Corrected route path
            element: <ProductById />,
          },  
          {
            path:"about",
            element: <About/>
          },
          {
            path:"Buket",
            element: <Buket/>
          },
          {
            path:"contact",
            element: <Contact/>
          }
        ]
      }
    ]
  )

  return <RouterProvider router={router} />
}

export default App
