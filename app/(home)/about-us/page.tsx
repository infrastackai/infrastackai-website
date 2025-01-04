import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const people = [
  {
    name: "Aykut Gedik",
    role: "CEO",
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
    <div className="flex flex-col items-center justify-center min-h-screen relative w-full mt-[104px] overflow-hidden space-y-4">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>

        <div className="grid grid-cols-1 gap-6">
          <Card className="glow-hover">
            <CardHeader>
              <h2 className="pointer-events-none text-xl font-semibold">
                Our Mission
              </h2>
            </CardHeader>
            <CardContent>
              <p className="pointer-events-none">
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

          <Card className="glow-hover">
            <CardHeader>
              <h2 className="text-xl font-semibold pointer-events-none">
                Our Vision
              </h2>
            </CardHeader>
            <CardContent>
              <p className="pointer-events-none">
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
          <h2 className="text-2xl font-bold text-center mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-base/[1.125rem] md:text-lg/[1.5rem] text-gray-300">
                        {person.name}
                      </p>
                      <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-600 dark:text-neutral-400">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="pointer-events-none">{person.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
