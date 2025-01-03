import { Icon } from "../../components";
import { useLanguage } from "../../../libs";
import { MainNavbar } from "./components";
import { MainNavbarMobile, LangueSwitcher } from "./components";

export const Header = () => {
  const { content } = useLanguage();

  return (
    <header className="relative w-full">
      <nav className="box-shadow flex relative px-1 desktopS:px-3 bg-background-l0 justify-between">
        <div className="flex gap-1 items-center">
          <a href="./">
            <Icon name="logo" width={"176px"} height={"52px"} />
          </a>
          <MainNavbar menus={content.navLinks.menus} />
        </div>

        <div className="flex gap-1 items-center ">
          <div className="hidden desktopS:block">
            <LangueSwitcher langues={content.supportedLangue.langues} />
          </div>

          <MainNavbarMobile
            menus={content.navLinks.menus}
            langues={content.supportedLangue.langues}
          />
        </div>
      </nav>
    </header>
  );
};
