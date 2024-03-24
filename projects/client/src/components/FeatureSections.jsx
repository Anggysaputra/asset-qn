import {
  PlusIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";

import logo from "../assets/logo.jpg";

const features = [
  {
    name: "Add Asset.",
    description:
      "You can add new assets, or you can edit assets, but this requires certain access permissions.",
    icon: PlusIcon,
  },
  {
    name: "Transfer Asset.",
    description: "You can transfer assets from your branch to another branch.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Return Asset",
    description:
      "You can return assets based on their condition: Bad, Service, or Project Completed. However, this action is only allowed for returning to the HARMONI PUSAT branch.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function FeatureSections() {
  return (
    <div className="overflow-hidden bg-gray-200 py-24 sm:py-4">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto  max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Home
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Wellcome to Quantum Nusatama Asset Web App
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Quantum Nusatama Web App is a web-based asset monitoring system
                for all branches of the company, where users can add new assets,
                transfer assets, and also process asset returns.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500">
              {/* <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"/> */}

              <iframe
                className="h-96 w-full"
                src="https://www.google.com/maps/d/embed?mid=1kiyWW8m2AvfawqC6Jl78VwJgQ79ZAHM&ehbc=2E312F"
              />
              {/* </div>
              </div> */}
              {/* <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
