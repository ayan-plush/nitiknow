import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyMinister from "./pages/MyMinister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/my-ministers",
    element: <MyMinister/>
  }
  // {
  //   path: "/contact",
  //   element: <ContactPage />,
  // },
]);


function App() {

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url(https://res.cloudinary.com/decks92gf/image/upload/v1751993164/wmremove-transformed_c9nmsq.webp)] object-fill w-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
