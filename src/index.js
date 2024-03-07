import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App';
import BlogsTab from './components/Blogs/App';
import "./index.css"
import Home from './components/Home_page/Home';
import EventTabs from './components/Events/Index';
import CollaborationPage from './components/Home_page/ContactCollaboration/CollaborationPage';
import ContactPage from './components/Home_page/ContactCollaboration/ContactPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/blogs",
        element: <BlogsTab />
      },
      {
        path:"/events-section",
        element: <EventTabs />
      },
      {
        path: "/contact-us",
        element: (
                  <>
                    <ContactPage />
                    <CollaborationPage />
                  </>
                  ),
      }
    ]
  },
  
    
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);