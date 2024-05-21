"use client";

import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import { SiBuymeacoffee } from "react-icons/si";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const Landscape = () => {
  
  //const container = useRef();

  let mm = gsap.matchMedia();  

  useGSAP(() => { 

    const landscape_wrapper = document.querySelector(".wrapper");
    const landscape_sky = document.querySelectorAll(".baa-sky img");    
    const landscape_mtns_bg = document.querySelectorAll(".baa-bg img");
    const landscape_mtns_fg = document.querySelectorAll(".baa-fg img");  
    const landscape_cloud = document.querySelectorAll(".baa-cloud .cloud-inner"); 

    let foreground_timeline = gsap.timeline();
    let landscape_timeline = gsap.timeline();

    
  
    const skyTrigger = ScrollTrigger.create({
      trigger: landscape_wrapper,
      pin: false,
      start: "top top",
      markers: false,
      end: "300px",
    });
  
    const bgTrigger = ScrollTrigger.create({
      trigger: landscape_wrapper,
      pin: false,
      start: "top top",
      markers: false,
      end: "300px",
    }); 
    
    const fgTrigger = ScrollTrigger.create({
      trigger: landscape_wrapper,
      pin: false,
      start: "top top",
      markers: false,
      end: "300px",
    });  
    
    const cloudTrigger = ScrollTrigger.create({
      trigger: landscape_wrapper,
      pin: landscape_cloud,
      start: "top top",
      markers: false,
      end: "200px",
    }); 

    
    mm.add("(min-width: 768px)", () => {
      landscape_timeline.to(landscape_sky,{
        y:"300px",
        scrollTrigger:{
          start:() => skyTrigger?.start,
          end:() => skyTrigger?.end,
          scrub:1,
        }
      });       
    });

    foreground_timeline.to(landscape_cloud,{
      opacity:0,      
      scrollTrigger:{
        start:() => cloudTrigger?.start,
        end:() => cloudTrigger?.end,
        scrub:1,
      }
    }).to(landscape_mtns_bg,{
      y:"390px",
      x:"44px",
      scrollTrigger:{
        start:() => bgTrigger?.start,
        end:() => bgTrigger?.end,
        scrub:1,
      }
    }).to(landscape_mtns_fg,{
      y:"400px",
      x:"-44px",
      scrollTrigger:{
        start:() => fgTrigger?.start,
        end:() => fgTrigger?.end,
        scrub:1,
      }
    });
      
  }); 

  return (    
    <div className="wrapper">
      <div className="baa-cloud">
        <div className="cloud-inner bg-white text-black text-center">          
          <h1 className="text-3xl font-bold mb-1">Hi!</h1>
          <p className="text-sm">Thanks for checking out my source code. If you have any feedback please feel free to reach out. Cheers!</p>                    
        </div>
      </div>            
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