const Navbar = () => {
  return (
    <nav className="flex gap-2 items-center bg-orange-400 px-6 py-2 mb-5 text-white">
      <img className="aspect-[1/2] max-h-28" src="/logo.png" alt="Lvivske Rizdviane" />
      <h1 className="text-3xl font-bold mr-3">Pivolub❤️</h1>
      <p className="underline italic text-2xl">Milujem pivo, to je moje živio!</p>
    </nav>
  )
}
export default Navbar;