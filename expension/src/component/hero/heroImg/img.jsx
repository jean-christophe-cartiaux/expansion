import image1 from "../../../img/icons.png"
import image2 from "../../../img/Rocket.png"
import image3 from "../../../img/X.png"

const Img = () => {
    return (
        <>
            <div className="hero-img">
                <img className="hero-img1"src={image3} alt="Description de l'image"/>
                <img className="hero-img2"src={image1} alt="Description de l'image"/>
                <img className="hero-img3"src={image2} alt="Description de l'image"/>
            </div>
        </>
    )
}
export default Img;