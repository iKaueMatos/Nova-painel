import { Link } from "react-router-dom";
import { menu } from '../../../data.ts';
import { ContainerNavigation, Navigation } from "./index.ts";

export function Menu() {
  return (
    <ContainerNavigation>
      <Navigation>
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url} className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </Navigation>
    </ContainerNavigation>
  );
};
