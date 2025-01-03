import "./social.css";
import clsx from "clsx";
import { Icon } from "../../../../components";
import { ReactComponent as FACEBOOK } from "../../../../../assets/svg/facebook.svg";

export const SocialMedia = () => {
  return (
    <ul className="social-icons flex items-center justify-center gap-0.5">
      <li
        className={clsx(
          "footer-social-media group w-[40px] h-[40px] rounded-0.25 bg-gradient-to-tr",
          "flex items-center justify-center",
          "hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] cursor-pointer"
        )}
      >
        <a href="#">
          <FACEBOOK className="transition duration-moderate1 ease-out w-[30px] h-[30px]" />
        </a>
      </li>
      <li
        className={clsx(
          "footer-social-media group w-[40px] h-[40px] rounded-0.25 bg-gradient-to-tr",
          "flex items-center justify-center",
          "hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] cursor-pointer"
        )}
      >
        <a href="#">
          <Icon
            name={"twitter"}
            width={24}
            height={24}
            className="transition duration-moderate1 ease-out w-[32px] h-[32px]"
          />
        </a>
      </li>
      <li
        className={clsx(
          "footer-social-media group w-[40px] h-[40px] rounded-0.25 bg-gradient-to-tr",
          "flex items-center justify-center",
          "hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] cursor-pointer"
        )}
      >
        <a href="#">
          <Icon
            name={"linkedin"}
            width={24}
            height={24}
            className="transition duration-moderate1 ease-out w-[32px] h-[32px]"
          />
        </a>
      </li>
    </ul>
  );
};
