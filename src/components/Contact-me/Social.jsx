import React from 'react';
import './Social.css';

const Social = (props) => {
  return (
    <div className="social-container">
      <div className="social-grid">
        {props.data.map((item, index) => (
          <>
            <div key={index} className="social-card">
              <div className="cards">
                <div className="left">
                  <i className={item.icon} style={{ color: item.color }} />
                  <div className="cards-text">
                    <p>
                      <strong>{item.media}</strong>
                    </p>
                    <p>{item.names}</p>
                    <p>
                      <span>{item.followers}</span>
                    </p>
                  </div>
                </div>
                <div className="right">
                  <i class="fa-solid fa-up-right-from-square"></i>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Social;
