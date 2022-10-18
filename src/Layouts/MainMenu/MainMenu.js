import React from "react";
import "./mainMenu.css";
import images from "../../img/image";
import SimpleImageSlider from "react-simple-image-slider";
import {ServicesPage,About,Prices,Contact} from "../../Pages"

const imagelist = [images.sliderImg1,images.sliderImg2,images.sliderImg3,images.sliderImg4]
export default function MainMenu() {
  return (
    <main className="main-menu">
      <section className="slider">
      <SimpleImageSlider  width={1205} height={604} images={imagelist} showBullets={true} autoPlay={true} autoPlayDelay={3.0} />
      </section>     
      <About/>
      <ServicesPage/>
      <Prices/>
      <Contact/>
 
    </main>
    
  );
}
