import Image from "next/image";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";
import StyledLink from "@/components/ui/styledLink";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");
  // unstable_setRequestLocale(locale);

  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="flex flex-col items-center w-full md:w-md">
        <StyledH1 className="text-center ">Raphael Fritz</StyledH1>
        <StyledH2 className="text-center mb-8">
          {t("subheadlinePart1")} <p className="hidden sm:block" />
          {t("subheadlinePart2")}
        </StyledH2>
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8 items-center">
          <div className="  ">
            <div className="relative overflow-hidden  rounded-xl shadow-xl w-xs h-xs ">
              <div className="relative h-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image
                  src="/statics/RaphaelFritz.jpg"
                  alt="A picture of me."
                  fill={true}
                  sizes="(max-width: 1040px) 40vw, 25vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div className="md:py-8 flex flex-col space-y-4">
            <p>
              {t("textPart1")}
              <StyledLink href="https://www.amazon.de/hz/audible/mlp?actionCode=AZDOR06602162290MVtag%3Draphaelfritz-21">
                {t("audiobooks")}
              </StyledLink>
              {t("textPart2")}
            </p>
          </div>
        </div>
        <StyledBlockquote className="my-8">
          {t("quote")}
          {/* Technology, science & politics nerd. Experienced tech-entrepreneur & AI
        expert. Impact driven. Convince people by action, not by words. */}
        </StyledBlockquote>

        <div className="w-full">
          {t("recommendToMe")}
          <StyledLink
            href="https://www.linkedin.com/in/raphael-fritz/"
            target="_blank"
          >
            LinkedIn.
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
