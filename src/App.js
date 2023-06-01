import React from 'react';
import {Helmet} from "react-helmet";
import Landing from './main/Landing'


function App() {
  return (
    <>
    <Helmet>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
       <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css" integrity="sha512-csw0Ma4oXCAgd/d4nTcpoEoz4nYvvnk21a8VA2h2dzhPAvjbUIK6V3si7/g/HehwdunqqW18RwCJKpD7rL67Xg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Helmet>
     <Landing/>
    </>
  );
}

export default App;
