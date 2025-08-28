import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null)

  const imageArray = [
    'https://i.redd.it/tanjiro-kamado-demon-slayer-vs-hidan-naruto-shippuden-v0-wn618pjifced1.jpg?width=800&format=pjpg&auto=webp&s=7b8258a45b4477203c5393f85ca9b28288fc2dd3',
    'https://i.redd.it/6687l0xirped1.jpeg',
    'https://i.pinimg.com/736x/67/87/56/678756883f1aa93e38aba407838d6b0f.jpg',
    'https://i.redd.it/gjg5a5w4yxbf1.jpeg',
    'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/demon-slayer-doma-Cropped-fcbc5cb.jpg?quality=90&fit=700,466',
    'https://www.leisurebyte.com/wp-content/uploads/2021/12/Demon-4-12.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkU22Q7ZZKljEHUBjRcQI4aVWySf-AIpkFX3Ad3iM4bjXq3CUAGvoG8rxAaY6k-fHXOc&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBU2OV9rmzyrMYDNCvnvWM8zSabyldCNl9PITQBT4FJzs9nuNdpLWEUTy3VJPt4qD1kw&usqp=CAU',
    'https://i.pinimg.com/474x/57/3b/89/573b89e694197bf030e7936b68f2446c.jpg',
    'https://comicvine.gamespot.com/a/uploads/scale_small/11117/111178336/7535415-0094181215-latest.png',
    'https://sm.mashable.com/t/mashable_me/photo/default/desktop-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-demon_vr2y.720.jpg',
    'https://i.pinimg.com/564x/92/2f/43/922f433a4700ec5ca68e9da5acb967eb.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 35%',
        end: 'top -65%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate:(elem)=>{
          let imageIndex;

          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length -1
          }
          imageRef.current.src = imageArray[imageIndex]          
        }
      }
    })
  })

  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div ref={imageDivRef} className="absolute overflow-hidden h-[22vw] rounded-3xl w-[15vw] top-96 left-[30vw]">
          <img ref={imageRef}
            className="h-full object-cover w-full"
            src="https://i.redd.it/tanjiro-kamado-demon-slayer-vs-hidan-naruto-shippuden-v0-wn618pjifced1.jpg?width=800&format=pjpg&auto=webp&s=7b8258a45b4477203c5393f85ca9b28288fc2dd3"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="mt-[55vh]">
            <h1 className="text-[18vw] text-center uppercase leading-[14vw] font-bold">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-4xl">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              voluptatum in, elit. Fugit, explicabo necessitatibus a obcaecati delectus quasi
              distinctio, id doloremque, inventore et iste. Cum distinctio
              similique beatae tempora est voluptatum Lorem, ipsum dolor sit
              amet consectetur adipisicing Lorem, ipsum dolor sit elit. Fugit,
              amet elit. Fugit, consectetur adipisicing elit. Fugit, beatae? !
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen"></div>
    </div>
  );
};

export default Agence;
