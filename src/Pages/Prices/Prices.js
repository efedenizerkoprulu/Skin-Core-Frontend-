import React from 'react'
import "./prices.css"

var prices =[
  [
    "Vücut Bakımı",
    "300",
  ],
  [
    "Cilt Bakımı",
    "120",
  ],
  [
    "Epilasyon",
     "Bölgeye göre değişir lütfen merkeze gelin.",
  ],
  [
    "Leke ve Akne Bakımı",
    "360",
  ],
  [
    "İpek kirpik",
    "450",
  ],
  [
    "3D Kıl Tekniği",
    "800",
  ],
  [
    "Kalıcı Makyaj",
    "250",
  ],
].map(([title, price]) => (
  <tr>
  <td>{title}</td>
  <td>{price}</td>
 </tr>
));


export default function Prices() {
  return (
    <section className="price-main section-main" id="prices">
    <div className="about-title">
      <h2>Fiyatlar</h2>
      <h4>HTC Güzellik Salonu</h4>
      <div className="section-line"> </div>
    </div>
   <div className='price-info'>
    <table>
      <tr>
     <th>Hızmetin adı</th>
     <th>Fiyatı</th>
     </tr>
     {prices}
    </table>
   </div>
  </section>
  )
}
