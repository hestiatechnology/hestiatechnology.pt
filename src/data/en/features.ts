import {
  BookOpen,
  Briefcase,
  DollarSign,
  Shirt,
  Truck,
  Users,
} from "lucide-react";

export const features = [
  {
    title: "Billing",
    description: "Manage billing, issue invoices, receipts, and credit notes.",
    icon: DollarSign,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    information: {
      title: "Included",
      included: ["Basic Support", "Included Training"],
    },
    price: 75,
    includedUsers: 5,
    pricePerUser: 5,
  },
  {
    title: "Textile",
    description:
      "Manage textile processes, production, work orders, and inventory.",
    icon: Shirt,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    price: 1300,
    includedUsers: 5,
    pricePerUser: 5,
  },
  {
    title: "Logistics",
    description:
      "Manage warehouses, shipping, receiving, and merchandise inventory.",
    icon: Truck,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    disabled: true,
  },
  {
    title: "Human Resources",
    description: "Manage employees, payroll processing, and attendance.",
    icon: Users,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    disabled: true,
  },
  {
    title: "Financial",
    description:
      "Control finances, treasury, accounts payable, and receivable.",
    icon: Briefcase,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    disabled: true,
  },
  {
    title: "Accounting",
    description: "Manage accounting, entries, trial balances, and tax reports.",
    icon: BookOpen,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    disabled: true,
  },
];
