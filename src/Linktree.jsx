import React from 'react';
import './Linktree.css';

function Linktree() {
    return (
        <div className="links-section">

            <div className="link-item">
                <a href="https://github.com/Ressnn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    <span>GitHub Profile</span>
                </a>
            </div>
            
            <div className="link-item">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-file-pdf"></i>
                    <span>My Resume</span>
                </a>
            </div>
            
            <div className="link-item">
                <a href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-file-pdf"></i>
                    <span>This work uses "Stylized planet" by cmzw licensed under CC-BY-4.0 </span>
                </a>
            </div>
        </div>
    );
}

export default Linktree;
