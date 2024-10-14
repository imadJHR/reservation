import { FaLeaf } from "react-icons/fa";
import { IoShield } from "react-icons/io5";
import { LuUtensilsCrossed } from "react-icons/lu";
import { Card, CardContent } from "@/components/ui/card";

const Qualities = () => {
  return (
    <div className="">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLeaf className="h-12 w-12 text-green-500" />,
                title: "100% Plant-Based",
                description:
                  "All our ingredients are sourced from plants, ensuring a cruelty-free dining experience.",
              },
              {
                icon: <IoShield className="h-12 w-12 text-blue-500" />,
                title: "Quality Assured",
                description:
                  "We maintain the highest standards of quality and food safety in all our restaurants.",
              },
              {
                icon: <LuUtensilsCrossed className="h-12 w-12 text-red-500" />,
                title: "Delicious Variety",
                description:
                  "Our menu offers a wide range of delicious vegan options to satisfy every palate.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualities;
