import React from "react";
import "./servicesPage.css";
import images from "../../img/image";

export default function Servicespage() {
  var card = [
    [
      images.serviceImg1,
      "Vücut Bakımı",
      "Nullam est dui, tristique id fringilla vel, dignissim a arcu. Ut laoreet porta eros at posuere. In bibendum diam ut dictum egestas. Maecenas pellentesque mollis lectus ac tincidunt. Curabitur non sem vel sem venenatis iaculis. ",
    ],
    [
      images.serviceImg2,
      "Cilt Bakımı",
      "Nullam est dui, tristique id fringilla vel, dignissim a arcu. Ut laoreet porta eros at posuere. In bibendum diam ut dictum egestas. Maecenas pellentesque mollis lectus ac tincidunt. Curabitur non sem vel sem venenatis iaculis. ",
    ],
    [
      images.serviceImg3,
      "Epilasyon",
      "Nullam est dui, tristique id fringilla vel, dignissim a arcu. Ut laoreet porta eros at posuere. In bibendum diam ut dictum egestas. Maecenas pellentesque mollis lectus ac tincidunt. Curabitur non sem vel sem venenatis iaculis. ",
    ],
    [
      images.serviceImg4,
      "Leke ve Akne Bakımı",
      "Nullam est dui, tristique id fringilla vel, dignissim a arcu. Ut laoreet porta eros at posuere. In bibendum diam ut dictum egestas. Maecenas pellentesque mollis lectus ac tincidunt. Curabitur non sem vel sem venenatis iaculis. ",
    ],
    [
      images.serviceImg5,
      "İpek kirpik",
      "Nullam est dui, tristique id fringilla vel, dignissim a arcu. Ut laoreet porta eros at posuere. In bibendum diam ut dictum egestas. Maecenas pellentesque mollis lectus ac tincidunt. Curabitur non sem vel sem venenatis iaculis. ",
    ],
    [
      images.serviceImg6,
      "3D Kıl Tekniği",
      "Nullam est dui, tristique id fringilla vel, dignissim a arcu. Ut laoreet porta eros at posuere. In bibendum diam ut dictum egestas. Maecenas pellentesque mollis lectus ac tincidunt. Curabitur non sem vel sem venenatis iaculis. ",
    ],
    [
      images.serviceImg7,
      "Kalıcı Makyaj",
      "Nullam est dui, tristique id fringilla vel, dignissim a arcu. Ut laoreet porta eros at posuere. In bibendum diam ut dictum egestas. Maecenas pellentesque mollis lectus ac tincidunt. Curabitur non sem vel sem venenatis iaculis. ",
    ],
  ].map(([img, title, desception]) => (
    <div className="card">
      <img src={img} alt="ServiceImages" />
      <h2>{title}</h2>
      <p>{desception}</p>
    </div>
  ));

  return (
    <section className="services-main section-main" id={"services"}>
      <div className="services-title">
        <h2>Hizmetlerimiz</h2>
        <h4>neler Yapıyoruz?</h4>
        <div className="section-line"> </div>
      </div>

      <div className="card-main">{card}</div>
    </section>
  );
}
