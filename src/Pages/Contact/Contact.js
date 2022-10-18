import React from "react";
import "./contact.css";
import { AiTwotonePhone } from 'react-icons/ai';


export default function Contact() {
  return (
    <section className="about-main section-main" id="contact">
      <div className="about-title">
        <h2>İletişim</h2>
        <h4>Yardım Madası</h4>
        <div className="phone">
          <span> <i><AiTwotonePhone/></i>+90 (546) 000 00 00</span>
        </div>
        <div className="section-line"> </div>
      </div>
      
      <div className="contact">
        <form method="POST">
          <input type="text" name="Firstname" placeholder="Adınızı Girin." autoComplete="on" />
          <input type="text" name="Surname" placeholder="Soyadınızı Girin." autoComplete="on" />
          <input type="email" name="Email" placeholder="E-postanızı Girin." autoComplete="on" />
          <textarea placeholder="Sorun, istek ve önerizi detaylıca yazınız."></textarea>
          <input type="submit" name="Send" value="Gönder" />
        </form>
      </div>
    </section>
  );
}
