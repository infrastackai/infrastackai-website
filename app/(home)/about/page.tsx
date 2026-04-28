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
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full space-y-8">
        <p className="text-base md:text-lg leading-relaxed text-zinc-600">
          Infrastack is backed by experienced founders, operators, and investors including{" "}
          {investors.map((investor, index) => (
            <span key={investor.name}>
              {investor.link ? (
                <Link
                  href={investor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 font-medium hover:underline"
                >
                  {investor.name}
                </Link>
              ) : (
                <span className="text-zinc-900 font-medium">{investor.name}</span>
              )}
              {index < investors.length - 2 && ", "}
              {index === investors.length - 2 && ", and "}
            </span>
          ))}
          .
        </p>

        <div className="text-sm text-zinc-500">
          <Link href="/" className="hover:underline">
            ← Back
          </Link>
        </div>
      </div>
    </main>
  );
}
