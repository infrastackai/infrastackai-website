import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "$19",
      frequency: "/month",
      description: "A great starting point for individuals and small teams.",
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
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 priority support",
      ],
      buttonLabel: "Contact Us",
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 mt-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Pricing Plans</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Choose the plan that best fits your needs.
      </p>

      <div className="w-full max-w-3xl grid grid-cols-1 gap-6 sm:grid-cols-2">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col p-6 hover:shadow-xl transition-all duration-300`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {plan.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-lg font-normal">{plan.frequency}</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-blue-500 rounded-full inline-block"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.buttonLabel}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
