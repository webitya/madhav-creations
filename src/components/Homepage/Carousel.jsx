import { useState,useEffect,useRef } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex]= useState(1);
    const [isTransitioning, setIsTransitioning]= useState(true);
    const [isBtnVisible, setIsBtnVisible]= useState(false);

    const intervalRef= useRef();

    const images=["/crousel1.jpg","/crousel2.jpeg","/crousel3.jpg", "/crousel4.jpg"];
    const size= images.length;
    const slide= [ images[size-1], ...images, images[0]];

    useEffect(()=> {
        intervalRef.current = setInterval(handleNext,4000);
        return () => clearInterval(intervalRef.current);
    },[]);

    function handleNext() {

        setCurrentIndex((prev) => {
            if(prev < size) {
                setIsTransitioning(true);
                return prev+1;
            }else{
                setIsTransitioning(true);
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(1);
                }, 600);
                return prev+1;
            }
        });
    }

    function pauseCarousel(){
        clearInterval(intervalRef.current);
    }

    function resumeCarousel() {
        intervalRef.current = setInterval(handleNext,4000);
    }

    function handleMouseOver() {
        pauseCarousel();
        setIsBtnVisible(true);
    }

    function handleMouseLeave() {
        resumeCarousel();
        setIsBtnVisible(false);
    }

    function handlePrev() {
        setCurrentIndex((prev) =>{
            if(prev > 1){
                setIsTransitioning(true);
                return prev-1;
            }else{
                setIsTransitioning(true);
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(size);
                }, 600);
                return prev-1;
            }
        });
    }
    
    return(
        <div 
            className="relative overflow-hidden hover:cursor-pointer " 
            onMouseOver={handleMouseOver} 
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className="flex" style={{
                    transform: `translateX(-${currentIndex*100}%)`,transition: isTransitioning ? `transform 600ms ease-in-out` : "none"
                }}
            >
                {slide.map((image, index) => {
                    return(
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={image} alt="Image"className="w-full h-[75vh] object-cover"/>
                        </div>
                    );
                })} 
            </div>
           {
            <button 
            className="absolute top-1/2 px-2 "
            style={{
                opacity :isBtnVisible? "100": "0",
                transition: "opacity 600ms ease-in-out"
            }}
            onClick={handlePrev}
            >
                <span className="text-xl font-cursive capitalize">
                    <ArrowBackIosIcon className="text-gray-200" style={{fontSize: "3rem"}}/>
                </span>
            </button>
           }

            <button
            className= {`absolute text-lg top-1/2 right-0 px-2`}
            style={{
                opacity :isBtnVisible? "100": "0",
                transition: "opacity 600ms ease-in-out"
            }}
            onClick={handleNext}
            >
                <span className="text-xl font-cursive capitalize">
                    <ArrowForwardIosIcon className="text-gray-200" style={{fontSize: "3rem"}}/>
                </span>
            </button>
        </div>
    );
}