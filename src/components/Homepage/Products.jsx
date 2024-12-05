import { useState } from "react";
const Card= (prop) => {
    const [isHovered, setIsHovered] = useState(true);
    function handleMouseEnter() {
        setIsHovered(false);
    }

    function handleMouseLeave() {
        setIsHovered(true);
    }

    return(
        <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="w-[15.5rem] h-80 py-32" style={{
                backgroundImage: `url(${prop.Url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <h2 className="text-xl text-center capitalize text-white font-serif font-semibold">{prop.name}</h2>
            </div>
            <div className="w-[15.5rem] h-80 bg-indigo-600 py-32 absolute top-0 flex justify-center" style={{
                transform: isHovered ? "translateY(320px)": "none",
                transition: "transform 400ms ease-in-out"
            }}>
                <a href="#" className="text-xl capitalize text-white font-serif font-semibold">
                    {prop.name}
                </a>
            </div>
        </div>
    );
}

export const Products = () => {
    return (
        <div className="px-20 flex flex-col gap-4 mb-52">
            <h2 className="text-3xl text-white capitalize font-bold leading-10 py-1 px-3 bg-gradient-to-r from-indigo-500 ... w-[45rem] rounded-tl-xl">
                our products
            </h2>
            <div className="flex gap-8">
                <Card name={"marine plywood"} Url="/marine_ply.jpeg" />
                <Card name={"commercial plywood"} Url="/commercial.jpg"/>
                <Card name={"decorative veneers"} Url="/decorative_veneers.jpeg"/>
                <Card name={"doors"} Url="/doors.jpeg"/>
            </div>
            
        </div>
    );
}