import React from 'react';
import './Home.css'
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import home from '../../assets/home.png';


const Home = ({sidebar}) => {
    return (
        <>
            <Sidebar sidebar={sidebar}/>
        </>
    );
};

export default Home;