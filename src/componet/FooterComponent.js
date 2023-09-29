import React from "react";
import "./Style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const FooterComponent = () => {
  const position = [51.505, -0.09];
  return (
    <div className="footer">
      <div className="footer-img">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <div className="footer-content">
        <div>
          <h4>Home</h4>
          <h4>About us</h4>
          <h4>Our Healing Center</h4>
          <h4>Healing Stories</h4>
          <h4>News & Media</h4>
          <h4>Programs</h4>
          <h4>Online Programs</h4>
        </div>

        {/* second */}
        <div className="footer-map">
          <div className="test">
            <MapContainer
              center={position}
              zoom={10}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A sample location marker <br /> in React-Leaflet.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="foot-right">
            <h4>Privcy Policy</h4>
            <h4>Terms $ Conditions</h4>
            <h4>Copyright Policy</h4>
            <h4>Disclaimer</h4>
            <h4></h4>
        </div>
      </div>

      <div className="footer-bottom">
        <span> <i className="fa-solid fa-phone"></i> +91888773373</span>
        <span><i class="fa-regular fa-envelope"></i> info@panchatattva.com</span>
        <span><i class="fa-solid fa-location-crosshairs"></i>Panchatattva,
              C-175, sector 100 Noida Uttar Pradesh</span>
      </div>
    </div>
  );
};

export default FooterComponent;
