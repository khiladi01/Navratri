import React , { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import first from "../assets/home/first.webp";
import Pop from "./pop";
// import Audio from "./audio";

function Home(){

    const [color, setColor] = useState('#000000');

    useEffect(() => {
             const interval = setInterval(() => {
                   const randomNum = Math.floor(Math.random() * 16777215); // hex range
                   const randomColor = "#" + randomNum.toString(16); // convert to hex
                   setColor(randomColor);
             },5000)
             return () => clearInterval(interval);
    })

    return(
        <>
        <Pop />
        {/* <Audio /> */}
        <div className="h-screen w-full bg-white grid place-content-center gap-2">
            {/* adding banner */}
            <div className="text-4xl font-extrabold flex justify-center items-center uppercase tracking-widest"><p style={{color : color}}>happy navratri</p></div>
            {/* adding maa image */}
        <div className="h-[350px] w-full border-[0px] border-red-300 rounded-full shadow-lg flex justify-center items-center" style={{boxShadow : `0 0 10px 5px ${color}`}}>
            <div className="h-[300px] w-full flex justify-center item-center"><img src={first} alt="User Img" className="h-full w-[300px] rounded-full shadow-sm" /></div>
        </div>
            {/* adding headline */}
        <div className="pt-[10px] flex justify-center items-center"><p className="text-2xl font-bold bg-gradient-to-r from-red-300 to-cyan-300 bg-clip-text text-transparent uppercase">jay maa durga</p></div>
            {/* adding wish */}
        <div className="flex justify-center items-center"><p>Happy Navratri To You And Your Family</p></div>
            {/* adding creator name */}
        <div className="flex justify-center items-center"><p className="text-lg font-medium text-red-300 tracking-wide uppercase">from <span className="font-bold">raushan raj</span></p></div>
            {/* adding link to about page */}
        <div className="flex justify-center items-center"><Link to="/darshan" className="h-[50px] w-[300px] border-[1px] border-red-300 hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-clip-text hover:text-transparent hover:underline hover:underline-offset-4 transition-colors ease-in-out duration-200 flex justify-center items-center rounded-full">🎉 Go To Darshan Page 🎉</Link></div>
        </div>
        </>
    )
}

export default Home;
