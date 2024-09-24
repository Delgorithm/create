"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	ArrowRightLeft,
	CalendarDays,
	FileCheck,
	House,
	Landmark,
	ScrollText,
	WalletCards,
	WalletMinimal,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarSidebarDashboard() {
	const pathname = usePathname();

	const pathPages = [
		{
			href: "/ragip-diler/dashboard/home",
			label: "Home",
			icon: <House />,
		},
		{
			href: "/ragip-diler/dashboard/transactions",
			label: "Transactions",
			icon: <ArrowRightLeft />,
		},
		{
			href: "/ragip-diler/dashboard/cards",
			label: "Cards",
			icon: <WalletCards />,
		},
		{
			href: "/ragip-diler/dashboard/bill-pay",
			label: "Bill Pay",
			icon: <FileCheck />,
		},
		{
			href: "/ragip-diler/dashboard/invoicing",
			label: "Invoicing",
			icon: <ScrollText />,
		},
		{
			href: "/ragip-diler/dashboard/accounting",
			label: "Accounting",
			icon: <CalendarDays />,
		},
	];

	const firstPath = pathPages.slice(0, 2);
	const secondPath = pathPages.slice(2, 3);
	const thirdPath = pathPages.slice(3, 6);

	return (
		<nav className="flex flex-col text-sm">
			<ul className="flex flex-col">
				{firstPath.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`flex items-center gap-3 py-2 pl-2 ${
								pathname === item.href
									? "rounded-md bg-neutral-300/30 font-semibold"
									: "text-gray-700"
							}`}>
							<span className="size-5">{item.icon}</span>
							<p>{item.label}</p>
						</Link>
					</li>
				))}
			</ul>

			<ul>
				<Accordion type="single" collapsible className="w-full gap-3 py-2 pl-2">
					<AccordionItem value="payment">
						<AccordionTrigger>
							<p className="flex items-center gap-3 no-underline">
								<WalletMinimal className="size-5" /> Payments
							</p>
						</AccordionTrigger>
						<div className="translate-x-5 translate-y-2 pl-4">
							<AccordionContent>Option 1</AccordionContent>
							<AccordionContent>Option 2</AccordionContent>
							<AccordionContent>Option 3</AccordionContent>
						</div>
					</AccordionItem>
				</Accordion>
			</ul>

			<ul className="flex flex-col ">
				{secondPath.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`flex items-center gap-3 py-2 pl-2 ${
								pathname === item.href
									? "rounded-md bg-neutral-300/30 font-semibold"
									: "text-gray-700"
							}`}>
							<span className="size-5">{item.icon}</span>
							<p>{item.label}</p>
						</Link>
					</li>
				))}
			</ul>

			<ul>
				<Accordion type="single" collapsible className="w-full gap-3 py-2 pl-2">
					<AccordionItem value="account">
						<AccordionTrigger>
							<p className="flex items-center gap-3 no-underline">
								<Landmark className="size-5" /> Accounts
							</p>
						</AccordionTrigger>
						<div className="translate-x-5 translate-y-2 pl-4">
							<AccordionContent>Option 1</AccordionContent>
							<AccordionContent>Option 2</AccordionContent>
							<AccordionContent>Option 3</AccordionContent>
						</div>
					</AccordionItem>
				</Accordion>
			</ul>

			<p className="my-2 text-sm font-light text-neutral-500">Workflows</p>

			<ul className="flex flex-col ">
				{thirdPath.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`flex items-center   gap-3 py-2 pl-2 ${
								pathname === item.href
									? "rounded-md bg-neutral-300/30 font-semibold"
									: "text-gray-700"
							}`}>
							<span className="size-5">{item.icon}</span>
							<p>{item.label}</p>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
