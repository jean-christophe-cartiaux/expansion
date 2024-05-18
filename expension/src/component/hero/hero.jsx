import Description from "./heroDescription/description.jsx"
import Img from "./heroImg/img.jsx"

import "./hero.css"


const Hero = ()=>{

    return (
        <>
            <div className="hero">
                <Description/>
                <Img/>
            </div>
        </>
)
}


export default Hero;