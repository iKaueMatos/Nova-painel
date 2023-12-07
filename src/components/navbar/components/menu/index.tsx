import { BsFillPostcardFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import {
  FaCalendarAlt,
  FaChartBar,
  FaElementor,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { MdBackup, MdOutlineShoppingCart } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom";
import { ContainerNavigation, Navigation } from "./style.ts";

export function MenuNavigation() {
  return (
    <ContainerNavigation>
      <Navigation>
        {/* Principal */}
        <div className="item">
          <span className="title">Principal</span>
          <Link to="/" className="listItem">
            <FaHome size={22} />
            <span className="listItemTitle">Pagina inicial</span>
          </Link>
          <Link to="/users/1" className="listItem">
            <FaUser size={22} />
            <span className="listItemTitle">Perfil</span>
          </Link>
        </div>

        {/* Lista */}
        <div className="item">
          <span className="title">Lista</span>
          <Link to="/users" className="listItem">
            <LuUsers2 size={22} />
            <span className="listItemTitle">Usuários</span>
          </Link>
          <Link to="/products" className="listItem">
            <MdOutlineShoppingCart size={22} />
            <span className="listItemTitle">Produtos</span>
          </Link>
          <Link to="/orders" className="listItem">
            <img src="order.svg" alt="" />
            <span className="listItemTitle">Pedidos</span>
          </Link>
          <Link to="/posts" className="listItem">
            <BsFillPostcardFill size={22} />
            <span className="listItemTitle">Postagens</span>
          </Link>
        </div>

        {/* Geral */}
        <div className="item">
          <span className="title">Geral</span>
          <Link to="/" className="listItem">
            <FaElementor size={22} />
            <span className="listItemTitle">Elementos</span>
          </Link>
          <Link to="/" className="listItem">
            <SlNote size={22} />
            <span className="listItemTitle">Notas</span>
          </Link>
          <Link to="/" className="listItem">
            <FaWpforms size={22} />
            <span className="listItemTitle">Formulário</span>
          </Link>
          <Link to="/" className="listItem">
            <FaCalendarAlt size={22} />
            <span className="listItemTitle">Calendario</span>
          </Link>
        </div>

        {/* Manutenção */}
        <div className="item">
          <span className="title">Manutenção</span>
          <Link to="/" className="listItem">
            <CiSettings size={22} />
            <span className="listItemTitle">Configurações</span>
          </Link>
          <Link to="/" className="listItem">
            <MdBackup size={22} />
            <span className="listItemTitle">Backups</span>
          </Link>
        </div>

        {/* Análise */}
        <div className="item">
          <span className="title">Análise</span>
          <Link to="/" className="listItem">
            <FaChartBar size={22} />
            <span className="listItemTitle">Gráficos</span>
          </Link>
          <Link to="/" className="listItem">
            <img src="log.svg" alt="" />
            <span className="listItemTitle">Logs</span>
          </Link>
        </div>
      </Navigation>
    </ContainerNavigation>
  );
}
