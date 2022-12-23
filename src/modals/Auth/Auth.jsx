import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function ModalAuth() {
  const { isAuthenticated } = useAuth0();

  return (
    <div 
      className="modal fade" 
      id="exampleModal" tabIndex="-1" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Food to Fill Your Soul</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {isAuthenticated ?
            <>
              <div className="modal-body">
              Welcome to FoodExpress
              </div>
              <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    data-bs-dismiss="modal">Continue
                  </button>
              </div>
          </>
          : <>
              <div className="modal-body">
              You must log in to see this page
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
          </>}
      </div>
    </div>
  </div>
  );
};

export default ModalAuth;