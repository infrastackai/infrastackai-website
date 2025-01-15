import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "$19",
      frequency: "/month",
      description: "A great starting point for individuals and small teams.",
      featuresTitle: "Includes",
      features: [
        "Access to core features",
        "5 projects",
        "Basic analytics",
        "Email support",
      ],
      buttonLabel: "Request Quota",
    },
    {
      title: "Enterprise",
      price: "Custom",
      frequency: "",
      description: "Tailored solutions for large organizations.",
      featuresTitle: "Includes",
      features: [
        "Dedicated account manager",
        "Custom integrations",
        "24/7 priority support",
      ],
      buttonLabel: "Contact Us",
    },
  ];

  return (
    <div className="container w-full flex flex-col items-center justify-center my-12">
      <div className="w-full flex flex-col gap-12 items-stretch px-2 md:px-0 md:w-3/4 justify-center mt-[104px]">
        <div className="flex flex-col w-full items-start space-y-4">
          <h1 className="text-3.5xl/[2.25rem] md:text-5.5xl/[3.625rem] font-bold bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
            Our Pricing Plans
          </h1>
          <p className="text-muted-foreground text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
            Choose the plan that best fits your needs.
          </p>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="w-full justify-center max-w-4xl grid grid-cols-1 gap-2 lg:grid-cols-2">
            {plans.map((plan, index) => (
              <div key={index} className="border rounded-3xl p-2 md:p-4">
                <Card
                  className={`h-full flex flex-col p-4 md:p-6 hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-xl md:text-2xl font-semibold font-[family-name:var(--font-geist-mono)]">
                      {plan.title}
                    </CardTitle>
                    <div className="text-4xl md:text-5xl font-bold">
                      {plan.price}
                      <span className="text-base md:text-lg font-normal font-[family-name:var(--font-geist-mono)]">
                        {plan.frequency}
                      </span>
                    </div>
                  </CardHeader>
                  <Separator className="mb-6" />
                  <CardContent className="flex-grow space-y-6">
                    <h6 className="text-lg md:text-xl font-semibold">
                      {plan.featuresTitle}
                    </h6>
                    <ul className="text-gray-600 space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 font-[family-name:var(--font-geist-mono)]"
                        >
                          <CheckIcon size={20} />
                          <span className="text-sm md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button className="w-full p-6 font-[family-name:var(--font-geist-mono)] uppercase text-sm md:text-base font-bold">
                      {plan.buttonLabel}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
