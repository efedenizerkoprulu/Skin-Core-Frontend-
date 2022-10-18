import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiTwotonePhone,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-line"></div>
      <section className="elements">
        <div className="location footer-title">
          <address>
            <h2>Konumumuz</h2>
            1900 skokak no:0 daire:3 Bakırköy / İstanbul
          </address>
        </div>

        <div className="social-media footer-title">
          <h2>Social media</h2>
          <ul className="link-social-media">
            <li>
              <i>
                <AiFillInstagram />
              </i>
              <a href={"https://www.instagram.com"} target={"_blank"}>
                Instagram
              </a>
            </li>
            <li>
              <i>
                <AiFillFacebook />
              </i>
              <a href={"https://www.facebook.com"} target={"_blank"}>
                Facebook
              </a>
            </li>
            <li>
              <i>
                <AiTwotonePhone />
              </i>
              <span>+90 (546) 000 00 00</span>
            </li>
          </ul>
        </div>

         <div className="service footer-title">
          <h2>Hizmetler</h2>
          <ul className="services-list">
            <li>Vücut Bakım</li>
            <li>Cilt Bakımı</li>
            <li>Epilasyon</li>
            <li>Leke ve Akne Bakımı</li>
            <li>İpek Kirpik</li>
            <li>3D Kıl Tekniği</li>
            <li>Kalıcı Makyaj</li>
          </ul>
         </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48192.48307928303!2d28.79986554363635!3d40.98081970156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa36a68702603%3A0xa5a84a3001d2f4ce!2zQmFrxLFya8O2eS_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1665936958057!5m2!1sen!2str"></iframe>
        </div>
      </section>
    </footer>
  );
}
