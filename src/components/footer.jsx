import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-white  shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Criticas de Cinema™</a>. Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">Inicio</Link>
          </li>
          <li>
            <Link to="/avaliar" className="hover:underline me-4 md:me-6">Avaliar</Link>
          </li>
          <li>
            <Link to="/filmes" className="hover:underline me-4 md:me-6">Filmes</Link>
          </li>
          <li>
            <Link to="/top-filmes" className="hover:underline me-4 md:me-6">Top Filmes</Link>
          </li>
          <li>
            <Link to="/contato" className="hover:underline">Contato</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
