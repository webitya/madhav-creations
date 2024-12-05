import { useState } from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CategoryIcon from '@mui/icons-material/Category';
import ExploreIcon from '@mui/icons-material/Explore';

export const Expertise = () => {

    return(
        <div className="w-[90%] mx-auto mb-32 mt-16 flex flex-col gap-24 relative">
            <h2 className="text-4xl uppercase text-indigo-600 text-center">Reason why you should trust us.</h2>
            <div className="w-[42rem] h-px bg-indigo-500 absolute top-12 left-1/2 -translate-x-1/2"></div>
            
            <div className="flex justify-between">
                <ReasonCard title={"expertise"} des={"With over 35 year of experince of making high quality and multitudes of different products,Madhavs Creation can proudly calim high expertise."}>
                    <MilitaryTechIcon style={{fontSize:'4rem', color: "rgb(79 70 229)"}}/>
                </ReasonCard>

                <ReasonCard title={"quality"} des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat placeat dolor recusandae error repellat quasi nisi mollitia velit est ipsam odio eligendi soluta incidunt"}>
                    <AssignmentTurnedInIcon style={{fontSize:'4rem', color: "rgb(79 70 229)"}}/>
                </ReasonCard>

                <ReasonCard title={"range"} des={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam aliquid,cumque alias qui nesciunt fugit! Aliquid blanditiis iusto."}>
                    <CategoryIcon style={{fontSize:'4rem', color: "rgb(79 70 229)"}}/>
                </ReasonCard>

                <ReasonCard title={"reach"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis iste praesentium.Nam mollitia ducimus, atque obcaecati dolore rem voluptas praesentium hic cum "}>
                    <ExploreIcon style={{fontSize:'4rem', color: "rgb(79 70 229)"}}/>
                </ReasonCard>
            </div>
        </div>
    );
}

function ReasonCard({ children, title, des }) {
    const [hoverBoxShadow, setHoverBoxShadow]= useState(false);

    function handleMouseEnter() {
        setHoverBoxShadow(true);
    }

    function handleMouseLeave() {
        setHoverBoxShadow(false);
    }
    return(
        <div 
        className="w-[15rem] flex flex-col gap-10 items-center p-4" 
        style={{
            boxShadow: hoverBoxShadow? 
            "0px 3px 5px 4px rgba(0, 0, 0, 0.1)": 
            "none",
            transition: "box-shadow 150ms ease-in-out"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {children}
        <div className='flex flex-col items-center gap-2'>
            <h3 className="text-3xl capitalize font-semibold">{title}</h3>
            <p className="text-center text-sm">
                {des}
            </p>
            </div>
        </div>
    );
}