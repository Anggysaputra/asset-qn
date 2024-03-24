import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  CogIcon,
  FaceSmileIcon,
  FaceFrownIcon,
  ScaleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import api from "../api/api";
import Stats from "../components/Stats";
import FeatureSections from "../components/FeatureSections";

const cards = [
  { name: "Good", href: "#", icon: FaceSmileIcon, amount: "0" },
  { name: "Bad", href: "#", icon: FaceFrownIcon, amount: "0" },
  { name: "Service", href: "#", icon: WrenchScrewdriverIcon, amount: "0" },
  {
    name: "Project Completed",
    href: "#",
    icon: ScaleIcon,
    amount: "0",
  },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [statusData, setStatusData] = useState([]);
  // console.log("data", statusData);

  useEffect(() => {
    fetchStatusCount();
  }, []);

  async function fetchStatusCount() {
    const res = await api.get("/status/status_count");
    // console.log("res", res);
    setStatusData(res.data.status);
  }

  return (
    <div>
      <div className="mb-6">
        <FeatureSections />
      </div>
      <div className="border border-2 border-gray-200 px-6 pb-6 pt-4">
        <Stats statusData={statusData} />
      </div>
    </div>
  );
}
