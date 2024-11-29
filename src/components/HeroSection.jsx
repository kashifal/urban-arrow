import { useEffect } from "react";

function HeroSection() {
  useEffect(() => {
    const video = document.getElementById("myVideo");
    video?.play().catch((err) => console.error("Autoplay failed:", err));
  }, []);

  const handlePause = () => {
    const video = document.getElementById("myVideo");
    video.pause();
  };

  return (
    <div>
      <video
        className="h-full z-30 object-cover w-full top-0 left-0 absolute"
        
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source
          src="https://cloudinary.pondigital.solutions/urbanarrow/video/upload/f_auto,q_auto:eco/v1719844041/NEW website/FamilyNext Lifestyle/Video/FamilyNext - Banner homepage/Urban_Arrow_Family_Bikes_H_B.mp4?_i=AA"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className=" z-40 tracking-wide absolute  top-1/2 left-[17%] right-1/2 transform   -translate-y-1/2  ">
        <h1 className="text-[71.3px] text-white font-semibold ">Meet your <br /> next car</h1>

        <p className="text-babse text-white font-light">
        Our wide range of cargo bikes offers an easy and sustainable solution for every purpose. Whether it is you are taking your precious load from A to B or transporting important packages. Whatever moves you, we’ve got you covered.
        </p>
        <button id="myBtn" className="bg-[#BEEB82] hover:opacity-90 mt-7 px-5 py-3 rounded-full" onClick={handlePause}>
          Explore all bikes
        </button>
      </div>



      .
    </div>
  );
}

export default HeroSection;
