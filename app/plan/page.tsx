import { Button } from "@/components/ui/button";
import { plans } from "@/lib/contants";
import { cn } from "@/lib/utils";

const PlanPage = () => {
  return (
    <div className="container-fix">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan, index) => {
          return <PlanCard {...plan} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PlanPage;

interface PlanCardProps extends Plan {
  className?: string;
}
const PlanCard = ({
  className,
  title,
  desc,
  benefits,
  price,
  type,
}: PlanCardProps) => {
  const typeFormatted =
    type === "halfyearly" ? "6 Months" : type === "yearly" ? "Year" : "Month";

  return (
    <div className={cn(className, "border p-4 rounded-md shadow-sm w-full")}>
      <h1 className="text-lg md:text-xl font-medium text-primary underline underline-offset-4 mb-2">
        {title}
      </h1>
      <p className="text-sm line-clamp-5 text-foreground/70">{desc}</p>
      <h2 className="font-medium my-4 text-primary underline underline-offset-4">
        Benefits
      </h2>
      <div className="grid grid-cols-2">
        {benefits.map((benefit, index) => {
          return (
            <p key={index} className="text-sm text-foreground/70">
              • {benefit}
            </p>
          );
        })}
      </div>
      <div className="flex justify-between mt-8 items-center">
        <p className="text-sm font-medium text-foreground/70">
          <span className="text-primary ">Price: </span>
          {price} CELO /{" "}
          {type === "halfyearly"
            ? "6 Months"
            : type === "yearly"
            ? "Year"
            : "Month"}{" "}
        </p>

        <Button className="mx">Activate plan</Button>
      </div>
    </div>
  );
};
