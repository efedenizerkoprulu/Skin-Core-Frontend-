import React from "react";
import "./navi.css";

export default function Navi() {
  const naviList = [
    ["Hakkımızda", "#about"],
    ["Hizmetler", "#services"],
    ["Fiyatlar", "#prices"],
    ["İletişim", "#contact"],
  ].map(([list, url]) => (
    <li>
      <a className="list-Link" href={url}>
        {list}
      </a>
    </li>
  ));

  return (
    <header className="main-nav">
      <div className="line"></div>
      <div className="logo">
        <h1>
          HTC Güzellik <br /> Salonu
        </h1>
      </div>
      <ul className="list">{naviList}</ul>
    </header>
  );
}
