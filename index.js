import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import AboutUs from './src/components/AboutUs';
import Error from './src/components/Error';
import Body from './src/components/body';
import ContactUS from './src/components/ContactUS';
import ResturantDetail from './src/components/RestaurantDetail';
import Account from "./src/components/Account";

const Route = createBrowserRouter([
    {path:'/' ,
        element: <App/>, 
        errorElement: <Error/>,
        children: [{path:'/', element: <Body/>},{path:'/restaurant-detail/:id' ,element: <ResturantDetail/>},{path:'/about-us' ,element: <AboutUs/>}, {path:'/contact-us' ,element: <ContactUS/>}, {path:'/account' ,element: <Account/>}]
    },
    
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Route}></RouterProvider>);