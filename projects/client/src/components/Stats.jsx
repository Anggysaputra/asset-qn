import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  FaceSmileIcon,
  FaceFrownIcon,
  WrenchScrewdriverIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    id: 1,
    name: "Good",
    amount: 0,
    icon: FaceSmileIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Bad",
    amount: "0",
    icon: FaceFrownIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Service",
    amount: "0",
    icon: WrenchScrewdriverIcon,
    change: "3.2%",
    changeType: "decrease",
  },
  {
    id: 4,
    name: "Project Completed",
    amount: "0",
    icon: ScaleIcon,
    change: "3.2%",
    changeType: "decrease",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Stats({ statusData = [] }) {
  //   console.log("status data", statusData);
  const updatedCards = stats.map((card) => {
    const matchingStatus = statusData.find(
      (status) => status.name === card.name
    );
    if (matchingStatus) {
      return { ...card, amount: matchingStatus.count.toString() };
    }
    return card;
  });

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        ASSET STATUS
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {updatedCards.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-gray-50 px-4 pt-5 pb-2 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.amount}
              </p>
              {/* <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {" "}
                  {item.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </p> */}
              {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {" "}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div> */}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
