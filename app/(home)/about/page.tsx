import Link from "next/link";

export default function Page() {
  const investors = [
    { name: "Bowery Capital", link: "http://bowerycap.com/" },
    { name: "Ripple Ventures", link: "https://www.rippleventures.com/" },
    { name: "Kleiner Perkins Scout", link: null },
    { name: "David Siegel", link: "https://www.linkedin.com/in/dvdsgl" },
    { name: "David Cramer", link: "https://cra.mr/" },
    { name: "Jude Gomila", link: "http://www.judegomila.com/" },
    { name: "Amanda Robson", link: "https://www.linkedin.com/in/amanda-robson-7227685b" },
    { name: "Mark McCubbin", link: "https://www.linkedin.com/in/markmccubbin" },
    { name: "Sachi Shah", link: "https://www.linkedin.com/in/sachi-shah-26920336" },
    { name: "Daniel Zev", link: "https://www.linkedin.com/in/danielzev" },
    { name: "Eva Sasson", link: "https://www.linkedin.com/in/esasson" },
    { name: "Delly Tamer", link: "https://www.linkedin.com/in/delly-tamer" },
    { name: "Bowen Dwelle", link: "https://www.linkedin.com/in/bowendwelle/" },
    { name: "Sourabh Bajaj", link: "https://www.linkedin.com/in/sbajaj9" },
    { name: "Frank Kuehnel", link: "https://www.linkedin.com/in/frank-kuehnel-74a191" },
    { name: "Jazzlyn O'Reilly", link: "https://www.linkedin.com/in/jazzlyno/" },
    { name: "Ali Uygar Kucukemre", link: "https://www.linkedin.com/in/aliuygarkucukemre/" },
    { name: "Tyler Koblasa", link: "https://www.linkedin.com/in/tylerkoblasa/" },
    { name: "Louis Todd Morelli", link: "https://www.linkedin.com/in/l-t-morelli-946a513/" },
    { name: "Kevin Keller", link: "https://www.linkedin.com/in/kevinkeller/" },
  ];

  return (
    <div className="flex-grow">
      <div className="mt-[140px] mb-[100px] mx-auto max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          ABOUT INFRASTACK
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
          Our vision is a future where AI agents run entire business operations, so humans
          can focus on strategy, creativity, and growth.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
          Infrastack is backed by experienced founders, operators, and investors including{" "}
          {investors.map((investor, index) => (
            <span key={investor.name}>
              {investor.link ? (
                <Link
                  href={investor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-semibold hover:underline"
                >
                  {investor.name}
                </Link>
              ) : (
                <span className="text-foreground font-semibold">{investor.name}</span>
              )}
              {index < investors.length - 2 && ", "}
              {index === investors.length - 2 && ", and "}
            </span>
          ))}
          .
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-12">
          We&apos;re building Infrastack for enterprises that are ready to automate entire
          departments and let operations run themselves.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          Connect with us on{" "}
          <Link
            href="https://www.linkedin.com/company/infrastackai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-semibold hover:underline"
          >
            LinkedIn
          </Link>
          {" "}or{" "}
          <Link
            href="https://x.com/infrastackai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-semibold hover:underline"
          >
            X
          </Link>
        </p>
      </div>
    </div>
  );
}
