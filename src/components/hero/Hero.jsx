import brand1 from "../../assets/images/brands/1.png"
import brand2 from "../../assets/images/brands/2.png"
import brand3 from "../../assets/images/brands/3.png"
import brand4 from "../../assets/images/brands/4.png"
import brand5 from "../../assets/images/brands/5.png"
import brand6 from "../../assets/images/brands/6.png"
import star from "../../assets/images/icons/star.png"


const Hero = () => {
  return (
    <div className="min-h-screen mt-28 relative">
        
        <div className="">
            <div className="">Digital</div>
        </div>
        {/* <img src={star} className="absolute top-8 left-full" alt="" srcset="" /> */}



        <div className="px-8 py-12">
            <h4 className="text-center text-xl uppercase mb-16">We worked with global largest brands</h4>
            <div className="grid grid-cols-6 place-items-center">
            <img src={brand1} alt="Brand Image" className="w-28 h-32 object-contain"/>
            <img src={brand2} alt="Brand Image" className="w-28 h-32 object-contain"/>
            <img src={brand3} alt="Brand Image" className="w-28 h-32 object-contain"/>
            <img src={brand4} alt="Brand Image" className="w-28 h-32 object-contain"/>
            <img src={brand5} alt="Brand Image" className="w-28 h-32 object-contain"/>
            <img src={brand6} alt="Brand Image" className="w-28 h-32 object-contain"/>
            </div>
        </div>
    </div>
  )
}

export default Hero