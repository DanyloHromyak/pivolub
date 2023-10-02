const Schedule = () => {
  return (
    <section id="schedule" className="text-white py-6">
      <h2 className="tracking-wide font-bald text-2xl mb-6 max-w-lg mx-auto italic">
        Musíte poslať svojho zamestnanca na pracovnú cestu, pozrite si príklady
        a napíšte plán služobnej cesty pre svojho zamestnanca
      </h2>
      <div className="flex flex-col gap-3 max-w-lg mx-auto bg-orange-400 text-xl">
        <img src="public/Epstein_hotel.jpg" alt="Epstein hotel" />
        <p className="px-4">Služobná cesta, Virgin Islands</p>
        <p className="px-4">Ubytovanie hotel "Epsteins Guest House"</p>
        <p className="px-4">
          <span className="font-bold">9:00 - </span>
          firma "Epsteins Guest House"
          adresa: "Little St. James Island, Virgin Islands", poschodie: 1,
        </p>
        <p className="px-4">
          <span className="font-bold">12:00 - </span>
          obed, reštaurácia "Epsteins Guest House"
        </p>
        <p className="px-4">
          <span className="font-bold">14:00 - </span>
          firma "Дріжджовий завод Львів",
          adresa: ul. Lyčakivska, 225, Lviv, 1 poschodie
        </p>
        <p className="px-4 pb-4">
          <span className="font-bold">16:00 - </span>
          firma "Don Bosko",
          adresa: ul. Lyčakivska, 173, Lviv, 3 poschodie
        </p>
      </div>
    </section>
  );
};
export default Schedule;
