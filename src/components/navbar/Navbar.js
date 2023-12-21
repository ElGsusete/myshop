const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-orange-500 px-2 py-3">
      <div className="text-white">
        <img src="/logo.png" className="h-9" alt="store logo" />
      </div>
      <div className="text-white flex items-center">
        <a className="m-5 font-bold" href="/">
          Inicio
        </a>
        <a className="m-5 font-bold" href="/sales">
          Ofertas
        </a>
        <a className="m-5 font-bold" href="/brands">
          Marcas
        </a>
        <a className="m-5 font-bold flex items-center" href="/basket">
          Cesta
          <img src="/basket.png" className="h-5 mx-2" alt="Icono de cesta" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
