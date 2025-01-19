import heroImg from "../../assets/img/hero-img.webp";

const HeroCom = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full h-screen"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
    </div>
  );
};

export default HeroCom;
