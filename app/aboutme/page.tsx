import Image from "next/image";
import StyledBlockquote from "@/components/ui/styledBlockquote";
import StyledH1 from "@/components/ui/styledH1";
import StyledH2 from "@/components/ui/styledH2";

export default async function Home() {
  return (
    <div className="w-sm md:w-md flex flex-col items-center">
      <StyledH1 className="text-center">Über mich:</StyledH1>

      <StyledH2>
        Ich bin IT-Unternehmer mit Fokus auf AI & Produktivität.
      </StyledH2>

      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        {/* <InPostImage
          src="/statics/RaphaelFritz.jpg"
          width="w-xs"
          height="h-xs"
        /> */}
        <div className="flex flex-shrink-0  ">
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

        <div className="md:p-8 flex flex-col space-y-4">
          <p>
            Schon als Kind war ich ein Bücherwurm, aber erst nach dem Studium
            entdeckte ich Hörbücher für mich. So lässt sich mein Wissensdurst in
            den Bereichen Technologie, Politik, Wissenschaft, Philosophie, Produktivität und
            Persönlichkeitsentwicklung trotz eines hektischen Alltags
            hervorragend stillen. Über 70 Hörbücher und 5 gedruckte Bücher pro
            Jahr liefern mir dabei einen guten Pool, um hervorragende
            Empfehlungen abgeben zu können. Die meisten Bücher werden auf
            Englisch gelesen oder gehört. Ausnahmen gibt es primär, wenn Deutsch
            die Originalsprache ist.
          </p>
        </div>
      </div>
      <StyledBlockquote className="mt-8 w-sm">
        Technologe, Wissenschaft & Politik Nerd. Erfahrender Tech-Unternehmer &
        AI-Experte. Impact driven. Überzeuge Menschen durch Taten, nicht durch
        Worte.
        {/* Technology, science & politics nerd. Experienced tech-entrepreneur & AI
        expert. Impact driven. Convince people by action, not by words. */}
      </StyledBlockquote>
    </div>
  );
}
