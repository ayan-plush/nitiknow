import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyMinister from "./pages/MyMinister";
import { useEffect, useState } from "react";
import { setCoordinates } from "./store/Reducers/geoReducer";
import { useDispatch } from "react-redux";

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

      const [lat,setLat] = useState();
      const [lon,setLon] = useState();
      const dispatch = useDispatch()
      useEffect(() => {
        const getLocation = async () => {
            try {
            const pos = await new Promise((resolve, reject) =>
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 5000,
                })
            );
            setLat(pos.coords.latitude);
            setLon(pos.coords.longitude);
            console.log("Awaited location:", pos.coords.latitude, pos.coords.longitude);
            } catch (err) {
            console.error("Geolocation error", err);
            }
        };
        getLocation();
      }, []);
    useEffect(()=>{
      dispatch(setCoordinates({lat: lat,lon: lon}));
    },[lat,lon])  
  
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url(https://res.cloudinary.com/decks92gf/image/upload/v1751993164/wmremove-transformed_c9nmsq.webp)] object-fill w-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
