import { Component } from "../../../common";
import { TextBody } from "../atoms";

type PrimaryButtonProps = {
  link: string;
};

export const PrimaryButton: Component<PrimaryButtonProps> = ({ link }) => {
  return (
    <a href={link} className="Stripe group">
      <TextBody
        TagName="span"
        text="Explorez"
        className="Text relative z-[2] text-text-primary-inverse group-hover:text-text-primary"
      />
      <svg
        className="Arrow relative z-[2]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
        ></path>
      </svg>
      <svg
        className="Arrow-Hover relative z-[2]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
        ></path>
      </svg>
    </a>
  );
};
