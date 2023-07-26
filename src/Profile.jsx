import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src="src/assets/Oval.png" alt="profile pic" />
        </div>
        <div className="card-grid">
          <div className="card-profile">
            <div className="card-details">
              <div className="card-details-group">
                <h2>The Octocat</h2>
                <a href="/">@octocat</a>
              </div>
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>
          <div className="card-description">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </p>
            </div>
            <div className="card-flex">
              <div className="card-items">
                <p>Repos</p>
                <span>8</span>
              </div>
              <div className="card-items">
                <p>Followers</p>
                <span>3938</span>
              </div>
              <div className="card-items">
                <p>Following</p>
                <span>9</span>
              </div>
            </div>
          </div>
          <div className="card-socials">
            <div className="social-items">
              <img src="src/assets/Shape.png" alt="map icon" />
              <p>San Francisco</p>
            </div>
            <div className="social-items">
              <img src="src/assets/004-twitter.png" alt="twitter icon" />
              <p>Donta Smith</p>
            </div>
            <div className="social-items">
              <img src="src/assets/002-url.png" alt="link icon" />
              <a href="https://github.com/donta514">https://github.com/</a>
            </div>
            <div className="social-items">
              <img
                src="src/assets/001-office-building.png"
                alt="building icon"
              />
              <p>@mrc</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
