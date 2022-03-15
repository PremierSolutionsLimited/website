import {
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const actions = [
  {
    title: "Hourly Short Trips",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    price: "@ GHS 45",
    description:
      "Are you in search of a comfortable commute in the comfort of your vehicle for yourself, your children, guests, family, and friends?",
  },
  {
    title: "Daily InterCity Trips? (8hrs)",
    href: "#",
    icon: CalendarIcon,
    description:
      "Do you need to make a long-distance trip but too tired to drive?",
    price: "@ GHS 235",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Weekly Cross-country Trips? (7 days)",
    href: "#",
    icon: GlobeIcon,
    description:
      "Plan your vacations with our trusted Chauffeurs in the comfort of your vehicle",
    price: "@ GHS 795",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Monthly (4 weeks)",
    href: "#",
    price: "@ GHS1,195",
    description:
      "You relax and get to enjoy the comfort of your vehicle whilst a professionally trained chauffeur drives you. You can be productive whilst in traffic sitting in the comfort of your vehicle. And many more ... ",
    icon: UserGroupIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Offers() {
  return (
    <div className="rounded-lg mt-12 bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "rounded-lg inline-flex p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <span className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </span>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action?.description}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gold-1 group-hover:text-gold-2"
            aria-hidden="true"
          >
            {action?.price}
          </span>
        </div>
      ))}
    </div>
  );
}
