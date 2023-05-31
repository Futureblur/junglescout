"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

export const Header = () => {
	return (
		<nav className={"top-0 fixed w-full z-10 bg-background border-b-white border-b-2 border-opacity-10"}>
			<div className={"flex justify-between py-4 lg:px-40 sm:px-10 px-10"}>
				<div>
					<Link className={"text-[#BFCB5C] font-bold text-xl"} href={"http://localhost:3000"}>Junglescout</Link>
				</div>
				<div className={"space-x-8 text-md md:block hidden"}>
					<HeaderLink name={"Explore"} url={"#"}/>
					<HeaderLink name={"Start"} url={"#"}/>
					<HeaderLink name={"Contact"} url={"#"}/>
				</div>
				<div className={"md:hidden cursor-pointer"}>
					<Bars3Icon className={"h-6 w-6 text-white md:hidden"}/>
				</div>
			</div>
		</nav>
	);
};

type HeaderLinkProps = {
	name: string;
	url: string;
}

const HeaderLink = (props: HeaderLinkProps) => {
	return (
		<a className={"text-white"} href={props.url}>{props.name}</a>
	);
}

