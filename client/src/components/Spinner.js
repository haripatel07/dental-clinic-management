import React from 'react'
import '../styles/spinnerstyle.css'
const Spinner = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner-border"></div>
            <div className="sr-only">
                <div className="image-container">
                <img src={require("../pictures/clinic_logo.png")} alt="Clinic Logo" />
                </div>
            </div>
        </div>
      );
}

export default Spinner