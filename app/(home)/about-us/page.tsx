import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const people = [
  {
    name: "Aykut Gedik",
    role: "Founder & CEO",
    image: "https://avatars.githubusercontent.com/aykutgk",
    description:
      "Jane brings over 10 years of experience in leading innovative teams to success.",
  },
  {
    name: "Baturalp Sönmez",
    role: "Developer",
    image: "https://avatars.githubusercontent.com/Baturalp52",
    description:
      "John is a tech visionary with a passion for building state-of-the-art software solutions.",
  },
  {
    name: "Mehmet Dedeler",
    role: "Developer",
    image: "https://avatars.githubusercontent.com/mehmetdede1907",
    description:
      "Emily ensures smooth operations and exceptional customer service at every step.",
  },
];

export default function AboutUs() {
  return (
    <div className="container w-full flex flex-col items-center justify-center my-12">
      <div className="flex flex-col gap-12 items-stretch px-4 md:px-0 md:w-3/4 justify-center min-h-screen relative mt-[104px] overflow-hidden space-y-4">
        <div className="flex-col items-start justify-start">
          <h1 className="text-3.5xl/[2.25rem] md:text-5.5xl/[3.625rem] font-bold bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
            About Us.
          </h1>
          <p className="text-muted-foreground mt-2 text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
            Learn more about us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <Card className="glow-hover mb-2 md:mb-4">
            <CardHeader>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
                Our Mission
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mt-2 text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
                To empower businesses by delivering innovative technology
                solutions that drive growth, efficiency, and success. At the
                heart of our mission lies a commitment to helping organizations
                navigate the complexities of the digital age by providing tools,
                services, and insights that enable them to achieve their goals.
                We strive to foster a culture of excellence, collaboration, and
                continuous improvement, ensuring our clients stay ahead in an
                ever-changing market. By prioritizing sustainable practices and
                embracing emerging technologies, we aim to make a positive
                impact on businesses, communities, and the world at large.
              </p>
            </CardContent>
          </Card>

          <Card className="glow-hover mb-2 md:mb-4">
            <CardHeader>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
                Our Vision
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mt-2 text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
                To become a global leader in delivering cutting-edge services
                that redefine industry standards while fostering long-lasting
                client relationships built on trust, transparency, and mutual
                growth. Our vision is to create a future where technology
                seamlessly integrates into every facet of life, transforming
                challenges into opportunities. By cultivating an environment of
                innovation and inclusivity, we aspire to inspire progress,
                empower individuals, and build a more connected and equitable
                world. Through bold ideas and a relentless commitment to
                excellence, we envision a future where our solutions unlock new
                possibilities for businesses and communities alike.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500 my-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {people.map((person) => (
              <Card key={person.name}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Image
                      src={person.image}
                      className="size-9 rounded-lg md:size-12"
                      width={144}
                      height={144}
                      alt={person.name}
                    />
                    <div className="pointer-events-none flex flex-col gap-1">
                      <p className="font-mono text-sm md:text-base text-gray-300">
                        {person.name}
                      </p>
                      <p className="font-mono text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mt-2 text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
                    {person.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button className="text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  );
}
