import React from 'react';
import './index.css';

//components
import ClientTabInfo from './ClientTabInfo';
import useLocalStorage from '../../hooks/useLocalStorage';
import ClientOrdersTab from './ClientOrdersTab';
import NavBar from '../../components/NavBar/NavBar';
import ClientBookingTab from './ClientBookingTab';
import FavoritesList from "./FavoritesList.jsx";

export default function ClientDashboard(){
    const Cart = useLocalStorage("CART", "");
    

    return(
        <>
        <NavBar Cart={Cart}/>
            <div className='userDashConteiner'>
                <h2>Welcome!</h2>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">                                                 
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="user-info-tab" data-bs-toggle="tab" data-bs-target="#user-info-tab-pane" type="button" role="tab" aria-controls="user-info-tab-pane" aria-selected="true">User Info</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders-tab-pane" type="button" role="tab" aria-controls="orders-tab-pane" aria-selected="false">Orders</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="booking-tab" data-bs-toggle="tab" data-bs-target="#booking-tab-pane" type="button" role="tab" aria-controls="booking-tab-pane" aria-selected="false">Booking</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="favorites-list" data-bs-toggle="tab" data-bs-target="#favorites-list-pane" type="button" role="tab" aria-controls="favorites-list-pane" aria-selected="false">Favorites</button>
                </li>
                
            </ul>
                <div class="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active infoTable" id="user-info-tab-pane" role="tabpanel" aria-labelledby="user-info-tab" tabindex="0">
                    <div className='ContDash'>
                        <ClientTabInfo/>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="orders-tab-pane" role="tabpanel" aria-labelledby="orders-tab" tabindex="0">
                        <ClientOrdersTab/>
                    </div>
                    <div className="tab-pane fade" id="booking-tab-pane" role="tabpanel" aria-labelledby="booking-tab" tabindex="0">
                        <ClientBookingTab/>
                    </div>
                    <div className="tab-pane fade" id="favorites-list-pane" role="tabpanel" aria-labelledby="favorites-list" tabindex="0">
                        <FavoritesList/>
                    </div>
                </div>
                
        </>
    );
};