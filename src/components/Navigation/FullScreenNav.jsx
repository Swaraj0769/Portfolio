import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
    const fullNavLinkRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)

    useGSAP(function () {
    const tl = gsap.timeline()    
        tl.from(".stairring", {
            delay:1,
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.from(fullNavLinkRef.current,{
            opacity:0
        })
        tl.from('.link',{
            opacity:0,
            rotate: 45,
            xPercent:50
        })
        tl.from('.link2',{
            opacity:0,
            rotate: -45,
            xPercent:-50
        })
        tl.from('.textAnimation',{
            x:500,
            stagger:{
                amount: -0.35
            }
        })

        tl.pause()
        if(navOpen){
            fullScreenRef.current.style.display = 'block'
            tl.play()
        }else{
            fullScreenRef.current.style.display = 'none'
            tl.reverse()
        }
    },[navOpen]);

  return (
    <div ref={fullScreenRef}
      id="fullscreennav"
      className="z-500 h-screen overflow-x-hidden w-full absolute">

      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairring h-full w-1/5 bg-red-700"></div>
          <div className="stairring h-full w-1/5 bg-red-700"></div>
          <div className="stairring h-full w-1/5 bg-red-700"></div>
          <div className="stairring h-full w-1/5 bg-red-700"></div>
          <div className="stairring h-full w-1/5 bg-red-700"></div>
        </div>
      </div>

      <div ref={fullNavLinkRef} className="relative">
        <div className=" flex w-full justify-between items-start">
          <div className="p-1">
            <div>
              <img
                className="w-50 invert -ml-10 -mt-10 "
                src="../../../../images/ss-logo-vector.png"
                alt=""
              />
            </div>
          </div>
          <div onClick={()=>{setNavOpen(false)}} className="h-30 w-30 pt-3 cursor-pointer relative">
            <div className="h-full w-1 -rotate-45 origin-top bg-green-300 absolute"></div>
            <div className="h-full w-1 right-8 rotate-45 origin-top bg-green-300 absolute"></div>
          </div>
        </div>
        <div className="py-20">
          <div className="link origin-top relative border-t-2">
            <h1 className="textAnimation text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
              Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-green-400">
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Pour Tout voir
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://www.slashfilm.com/img/gallery/the-15-best-anime-villains-of-all-time-ranked/ryomen-sukuna-jujutsu-kaisen-1735247556.jpg"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Pour Tout voir
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://www.slashfilm.com/img/gallery/the-15-best-anime-villains-of-all-time-ranked/muzan-kibutsuji-demon-slayer-1735247557.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Pour Tout voir
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://www.slashfilm.com/img/gallery/the-15-best-anime-villains-of-all-time-ranked/ryomen-sukuna-jujutsu-kaisen-1735247556.jpg"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Pour Tout voir
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://www.slashfilm.com/img/gallery/the-15-best-anime-villains-of-all-time-ranked/muzan-kibutsuji-demon-slayer-1735247557.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link2 relative border-t-2">
            <h1 className="textAnimation text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
              Agence
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-green-400">
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  One punch Man
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/01/best-anime-villains-garou.jpg"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  One punch Man
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://images1.wionews.com/images/wion/900x1600/2023/4/21/1682077826071_de8g75aa128f1acec634485b9133b0f00fb9b63.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  One punch Man
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2023/01/best-anime-villains-garou.jpg"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  One punch Man
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://images1.wionews.com/images/wion/900x1600/2023/4/21/1682077826071_de8g75aa128f1acec634485b9133b0f00fb9b63.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link relative border-t-2">
            <h1 className="textAnimation text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-green-400">
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Monster blue
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/08/boros-time.jpg"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Monster blue
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/ani_monster.jpg?q=70&fit=contain&w=1200&h=628&dpr=1"
                  alt=""
                />
              </div>
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Monster blue
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/08/boros-time.jpg"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Monster blue
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/ani_monster.jpg?q=70&fit=contain&w=1200&h=628&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link2 relative border-2">
            <h1 className="textAnimation text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
              About
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-green-400">
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Vegita yagami
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://gdm-universal-media.b-cdn.net/epicstream/e9f56c0cb889bce7425e1139cc4aa2237520d17f-902x440.png?width=343"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Vegita yagami
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/01/death-note-best-anime-shows-on-netflix.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex flex-nowrap items-center">
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Vegita yagami
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://gdm-universal-media.b-cdn.net/epicstream/e9f56c0cb889bce7425e1139cc4aa2237520d17f-902x440.png?width=343"
                  alt=""
                />
                <h2 className=" whitespace-nowrap text-[8vw] uppercase font-semibold text-center leading-[1] -mt-4">
                  Vegita yagami
                </h2>
                <img
                  className="h-25 rounded-full shrink-0 w-80 object-cover"
                  src="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/01/death-note-best-anime-shows-on-netflix.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FullScreenNav;
