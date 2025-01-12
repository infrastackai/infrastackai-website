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
    <div className="w-full flex flex-col items-center justify-center my-4">
      <div className="flex flex-col items-stretch py-12 mt-24 w-3/4 gap-4">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-7xl font-bold font-semibold trackin text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Our Pricing Plans</h1>
          <p className="text-muted-foreground mt-2 text-lg font-[family-name:var(--font-geist-mono)]">
            Choose the plan that best fits your needs.
          </p>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="w-full justify-center max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2">
            {plans.map((plan, index) => (
              <div key={index} className="border rounded-3xl p-4">
                <Card
                  className={`h-full flex flex-col p-6 hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold font-[family-name:var(--font-geist-mono)]">
                      {plan.title}
                    </CardTitle>
                    <div className="text-5xl font-bold mb-4">
                      {plan.price}
                      <span className="text-lg font-normal font-[family-name:var(--font-geist-mono)]">{plan.frequency}</span>
                    </div>
                  </CardHeader>
                  <Separator className="mb-4" />
                  <CardContent className="flex-grow">
                    <h6 className="text-xl font-semibold my-2">{plan.featuresTitle}</h6>
                    <ul className="text-gray-600 space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-[family-name:var(--font-geist-mono)]">
                          <CheckIcon size={16} />
                          <span>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="p-5 font-[family-name:var(--font-geist-mono)] uppercase text-md font-bold justify-start">{plan.buttonLabel}</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
