import { CiSettings } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaExpand } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineApps } from "react-icons/md";
import Logotipo from "../../assets/img/logo.png";

import { Icons, Logo, Navigation, Notification, Span, User } from "./style";

export function Navbar() {
  return (
    <Navigation>
      <Logo>
        <img src={Logotipo} alt="Logotipo da empresa Nova software" style={{width: "56px", height: "56px", display:"flex", justifyContent: "center"}} />
        <span>
            Nova Software
        </span>
      </Logo>
      <Icons>
        <FaSearch size={22} />
        <MdOutlineApps size={28} />
        <FaExpand size={22} />
        <Notification>
          <IoIosNotifications size={25} />
          <Span>1</Span>
        </Notification>
        <User>
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Kauê</span>
        </User>
        <CiSettings size={28} />
      </Icons>
    </Navigation>
  );
}
