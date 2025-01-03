import clsx from "clsx";
import { useCallback } from "react";
import { TextBody, Title } from "../../components";
import { NewsletterForm } from "./NewsletterForm";

export const NewsLetter = () => {
  // const [isSubscribed, setIsSubscribed] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubscribe = useCallback(() => {
    // setIsSubmitted(false);
    // setIsSubscribed(true);
    console.log("onSubscribe");
  }, []);

  const onUserSubmit = (status: boolean) => {
    // setIsSubmitted(status);
    console.log("onUserSubmit", status);
  };

  return (
    <div
      className={"bg-background-neutral px-1 desktopS:px-2 pb-2 desktopS:pb-4"}
    >
      <div
        className={clsx(
          "desktopS:mx-auto desktopS:max-w-[980px] min-h-[250px] justify-center desktopS:items-center",
          "relative flex flex-col tablet:flex-row gap-1.5",
          "p-1 desktop:px-5.5 desktop:py-2.5",
          "min-h-newsletterMobile tablet:min-h-newsletter justify-center items-start"
        )}
      >
        <div className={clsx("flex flex-col flex-1 gap-0.5")}>
          <Title text={"Pour ne rien manquer"} fontSize={"title3"} />
          <TextBody text={"abonnez-vous à l’infolettre de GlobalEthix"} />
        </div>
        <NewsletterForm
          className={clsx("flex flex-col flex-1 gap-0.5 w-full")}
          onSubscribe={onSubscribe}
          onUserSubmit={onUserSubmit}
        />
      </div>
    </div>
  );
};
