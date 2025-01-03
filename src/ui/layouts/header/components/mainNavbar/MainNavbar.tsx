import { Clickable, TextBody } from "../../../../components";
import { navBarLink } from "../../../../../data";

export const MainNavbar = ({ menus }: navBarLink) => {
  return (
    <div className="nav-links hidden desktopS:block">
      <ul className="flex gap-0.5 justify-center items-center">
        {menus.map((menu) => {
          return (
            <li key={menu.id} className="nav-link relative ">
              <Clickable
                href={menu.link}
                className="px-0.5 py-0.75 principal-nav-link"
                content={{
                  labelElement: <TextBody text={menu.title} TagName="span" />,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
