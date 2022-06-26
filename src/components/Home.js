import React from "react";
import { Redirect, useHistory } from "react-router-dom";

function Home({ isLoggedIn }) {
    if (!isLoggedIn) return <Redirect to="/login" />;
    // const history = useHistory();
    // if (!isLoggedIn) {
    //     history.push("/login");
    // }
    return (
        <div>
            <h1>Home!</h1>
        </div>
    );
}

export default Home;
