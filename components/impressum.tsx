"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import StyledLink from "./ui/styledLink";

export default function Impressum() {
  const [showImpressum, setShowImpressum] = useState(false);
  return (
    <>
      <div className="flex flex-col space-y-2 min-h-40 justify-end mt-8 px-4">
        <div
          className="underline text-sm cursor-pointer"
          onClick={() => setShowImpressum(!showImpressum)}
        >
          Impressum{showImpressum && ":"}
        </div>
        {showImpressum && (
          <div className="text-xs flex flex-col spacey-1">
            <p className="font-semibold">Raphael Fritz</p>
            <p>Marxergasse 17 / 2 / 16</p>
            <p>1030 Wien</p>
            <p>E-Mail: Bitte per Linkedin anfragen!</p>

            <StyledLink
              href="https://www.linkedin.com/in/raphael-fritz/"
              target="_blank"
            >
              <FaLinkedin size={24} className="text-blue-700" /> <p>LinkedIn</p>
            </StyledLink>

            <Link
              target="_blank"
              href="https://www.amazon.de/b?_encoding=UTF8&tag=raphaelfritz-21&linkCode=ur2&linkId=457b8ee185014069d5fa88b2b928c01d&camp=1638&creative=6742&node=288100"
              className="mt-4 underline"
            >
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen über
              angeklickte Links.
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
