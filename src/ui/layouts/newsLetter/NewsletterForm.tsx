import { FormEvent, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Button, Input, TextBody, TextCaption } from "../../components";
import { Component, PropsWithClassName } from "../../../common";
import { StringHelpers } from "../../../libs";

const EMAIL_FORM_ID = "emailFormId";
const EMAIL_MAX_LENGTH = 70;

type NewsletterFormProps = PropsWithClassName & {
  defaultEmail?: string;
  onSubscribe: () => void;
  onUserSubmit: (status: boolean) => void;
};

export const NewsletterForm: Component<NewsletterFormProps> = ({
  className,
  defaultEmail = "",
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [email, setEmail] = useState(defaultEmail);

  useEffect(() => {
    setEmail(defaultEmail);
  }, [defaultEmail]);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (email === "") {
        setErrorMessage("errorEmpty");
      } else if (StringHelpers.validateEmail(email)) {
        setErrorMessage(undefined);
      } else {
        setErrorMessage("errorInvalid");
      }
    },
    [email]
  );

  return (
    <form className={className} onSubmit={onSubmit} id={EMAIL_FORM_ID}>
      <TextBody text={"Saisisser votre e-mail"} />
      <div className={clsx("flex flex-row gap-0.5", "w-full")}>
        <Input
          className={clsx(
            "flex-1",
            "p-0.75",
            "focus:ring-0",
            "rounded-0.5 focus:outline-bold outline",
            "bg-background-form text-text-primary",
            errorMessage
              ? "outline-border-error outline-bold"
              : "outline-medium outline-border-primary focus:outline-border-selected"
          )}
          type={"email"}
          inputMode={"email"}
          enterKeyHint={"send"}
          maxLength={EMAIL_MAX_LENGTH}
          value={email}
          aria-label={"s'inscrire"}
          aria-autocomplete={"none"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className={"hidden tablet:flex"}
          label={"S'inscrire"}
          variant={"primary"}
          formId={EMAIL_FORM_ID}
        />
      </div>
      <TextCaption text={"*Champs obligatoires"} />
      <div
        className={clsx(
          "flex flex-row items-center gap-0.25",
          !errorMessage && "invisible"
        )}
      >
        {/* <GlowIcon
          Icon={Icons.Warning}
          type={"small"}
          fillCSSVariable={"text-error"}
        /> */}
        <TextCaption text={errorMessage} color={"error"} />
      </div>
      <Button
        className={"tablet:hidden flex"}
        label={"S'inscrire"}
        variant={"primary"}
        formId={EMAIL_FORM_ID}
      />
    </form>
  );
};
