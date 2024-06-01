"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const Landscape = () => {
  
  //const container = useRef();

  let mm = gsap.matchMedia();  

  useGSAP(() => { 

    const landscape_sky = document.querySelectorAll(".baa-sky img");    
    const landscape_mtns_bg = document.querySelectorAll(".baa-bg img");
    const landscape_mtns_fg = document.querySelectorAll(".baa-fg img");  

    let foreground_timeline = gsap.timeline();
    let landscape_timeline = gsap.timeline();

    
  
    const skyTrigger = ScrollTrigger.create({
      trigger: 'body',
      pin: false,
      start: "top top",
      markers: false,
      end: "100vh",
    });  
    
    mm.add("(min-width: 768px)", () => {      
      landscape_timeline.to(landscape_sky,{
        y:"100vh",
        scrollTrigger:{
          start:() => skyTrigger?.start,
          end:() => skyTrigger?.end,
          scrub:1,
        }
      });       
    });

    foreground_timeline.to(landscape_mtns_bg,{
      y:"390px",
      x:"44px",
      scrollTrigger:{
        start:() => skyTrigger?.start,
        end:() => skyTrigger?.end,
        scrub:1,
      }
    }).to(landscape_mtns_fg,{
      y:"400px",
      x:"-44px",
      scrollTrigger:{
        start:() => skyTrigger?.start,
        end:() => skyTrigger?.end,
        scrub:1,
      }
    });
      
  }); 

  return (    
    <div className="wrapper">           
      <div className="baa-sky baa-inner">        
        <Image
          src="/viafoci-scrolltrigger-sky-dark.jpg" 
          alt="Sky"         
          className="sky"
          width={1400}
          height={1890}
          priority
        />  
      </div>    
      <div className="baa-bg baa-inner">               
        <Image
          src="/viafoci-mtns-bg-dark-1400x390.png"
          alt="Landscape Background"         
          width={1400}
          height={390}
          priority
        />             
      </div>  
      <div className="baa-fg baa-inner">              
        <Image
          src="/viafoci-mtns-fg-dark-1400x536.png"
          alt="Landscape Foreground"         
          width={1400}
          height={536}
          priority
        />           
      </div>                   
    </div>  
  )
}

export default Landscape;