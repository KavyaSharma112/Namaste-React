import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (<div className="header">
        <div className="logo">
            <img src = "https://media.istockphoto.com/id/2176185103/vector/food-truck-emblem-or-logo-restaurant-diner-street-service-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=-zxcoSiDfH7gRiBvl-1lD1qqMiWW8zYM9jPl_FAj-Eg="/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><img src = "https://media.istockphoto.com/id/1127711786/vector/supermarket-cart-icon-vector-on-white-background-supermarket-ca.jpg?s=612x612&w=0&k=20&c=a-SUKULPzZXCXbszSoqKOo5lEmUEe5iEVYHJOtEm_Ic="/></li>
            </ul>
        </div>
    </div>
    );
}

const AppLayout = () => {
    return (<div className="app">
        <Header/>

    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);