/* eslint-disable react/prop-types */
function Layout({ children }) {
  return (
    <>
      <div className="container">
        <header>
          <h1>Criticas de Cinema</h1>
        </header>

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Filmes</a>
          <a href="#">Séries</a>
          <a href="#">Top Filmes</a>
          <a href="#">Top Séries</a>
        </nav>
        <main>{children}</main>
        <footer>
          &copy; 2024 Criticas de Cinema. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}

export default Layout;
