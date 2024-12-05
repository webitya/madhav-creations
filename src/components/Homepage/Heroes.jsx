
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HeroParaSection = () => {
    return (
        <div className="w-2/5 h-3/4 flex flex-col gap-3">
            <h2 
            className={`
                text-center 
                capitalize 
                text-2xl
                leading-10 
                font-bold 
                text-white
                bg-gradient-to-b from-indigo-700 to-indigo-500
            `}
            >
                Who we are
            </h2>
            <p className="text-justify text-sm leading-8 font-sans">
                Since its founding in 1944, Anchor has been a pioneer in the Indian plywood industry. 
                It was the first Indian company to manufacture marine plywood in 1951 and quickly became 
                one of India's preeminent plywood companies, with 11 factories and over 4000 employees 
                spread across India. During its long and glorious history, Anchor has sold very large 
                quantities of plywood in every part of India and exported all over the world. 
                Today Anchor continues its relentless quest to provide customers with the finest quality 
                products. This is the driving force behind Anchor - the insatiable urge to serve every 
                segment of the wood panel market, giving every application the Anchor edge in quality at 
                the right price.
            </p>
            <a href="#" className="text-indigo-600 text-base capitalize"> view more <ArrowRightAltIcon /> </a>
        </div>
    );
}

export const Heroes= () => {
    return (
        <div className="flex justify-center gap-5 py-8">
            <HeroParaSection />
            <img src="/heroImage.jpg" alt="img"className="w-1/2 h-[24rem] object-cover" />
        </div>
    );
}