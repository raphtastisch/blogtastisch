"use client";
import {Link} from "@/navigation"
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import StyledLink from "./ui/styledLink";
import { useTranslations } from "next-intl";

export default function Impressum() {
  const [showImpressum, setShowImpressum] = useState(false);
  const t = useTranslations("Imprint");

  return (
    <>
      <div className="flex flex-col space-y-2 min-h-48 justify-end mt-8 px-4">
        <div
          className="underline text-sm cursor-pointer"
          onClick={() => setShowImpressum(!showImpressum)}
        >
          {t("title")}
          {showImpressum && ":"}
        </div>
        {showImpressum && (
          <div className="text-xs flex flex-col space-y-0.5">
            <p className="font-semibold">Raphael Fritz</p>
            <p>Marxergasse 17 / 2 / 16</p>
            <p>1030 {t("vienna")}</p>
            <p>
              {t("email")}: {t("askViaLinkedIn")}
            </p>
            <StyledLink
              href="https://www.linkedin.com/in/raphael-fritz/"
              target="_blank"
            >
              <div className="flex flex-row items-center space-x-2">
                <FaLinkedin size={24} className="text-blue-700" />{" "}
                <p>LinkedIn</p>
              </div>
            </StyledLink>
            <Link
              target="_blank"
              href="https://www.amazon.de/b?_encoding=UTF8&tag=raphaelfritz-21&linkCode=ur2&linkId=457b8ee185014069d5fa88b2b928c01d&camp=1638&creative=6742&node=288100"
              className="pt-4 underline"
            >
              {t("amazonPartner")}
            </Link>
            {t("moreRecommendations")}
          </div>
        )}
      </div>
    </>
  );
}
