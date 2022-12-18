import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useMemo } from "react";

const Dashboard = () => {
    
    console.log(typeof(localStorage.getItem("authenticated")))

    if ((localStorage.getItem("authenticated")) === "false") {
        return <Redirect replace to="/" />;
    } 
    
    if(localStorage.getItem("authenticated") === "true"){
        return (
                <Redirect replace to="/MyProfilePage" />
        );
    }
    
};

export default Dashboard;
