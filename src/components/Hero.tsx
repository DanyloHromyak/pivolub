import GoogleMapLocation from "./GoogleMapLocation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-white px-6 py-2 text-xl lg:h-[calc(100vh-126px)]">
      <h2 className="text-center font-bald text-7xl mb-6">O mojej firme</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-3">
            <p>Moja firma je veľmi dôležitá, vyrobíme veľa piva</p>
            <p>Moja firma sa nachadza v Makeyevka, pri zdroja 💩</p>
            <p>Pobočky sú nemocnica, zdroj</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl italic">
              V praci pracuje: riaditeľ, 50 zamestnancov
            </h3>
            <ol>
              <h4 className="font-bold">Zamestnanci musia:</h4>
              <li>1. Pracovať 84 hodín týždenne</li>
              <li>2. Pracovať 12 hodín denne</li>
              <li>3. Chodit na pracú denne</li>
            </ol>
            <ol>
              <h4 className="font-bold">Zamestnanci môžu:</h4>
              <li>1. Piť vodu z zdroja</li>
            </ol>
            <ol>
              <h4 className="font-bold">Zamestnanci nesmú:</h4>
              <li>1. Vysmievať sa Putina, Petušylina</li>
            </ol>
          </div>
        </div>
        <div>
          <GoogleMapLocation />
        </div>
      </div>
    </section>
  );
};
export default Hero;
