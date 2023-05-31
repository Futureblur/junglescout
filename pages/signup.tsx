import '../app/globals.css'

import { Header } from "@/components/Header";
import { ReactNode } from "react";
import Image from 'next/image'

import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Signup() {
	return (
		<main className={"text-center"}>
			<Header/>
			<h1 className={"text-primary text-3xl text-center mt-10 "}>Let&apos;s get you signed up.</h1>
			<h2 className={"text-white opacity-70 text-center mt-10"}>The registration process is easy and intuitive. Try it out!</h2>
			<div className={"flex justify-center mt-14"}>
				<div className={"inline-flex flex-col justify-center space-y-3"}>
					<FormButton name={"Email"} url={""}
					            icon={<EnvelopeIcon className={"h-5 w-5 text-black"}/>}/>
					<FormButton name={"Google"} url={""}
					            icon={<Image src={"google.svg"} width={18} height={18} alt={"Google G"}/>}/>
					<FormButton name={"Apple"} url={""}
					            icon={<span className={"text-2xl"}></span>}/>
				</div>
			</div>
			<Link className={"inline-flex items-center justify-center text-white mt-10 hover:underline"} href={"/login"}>Already a member? Log in instead <ArrowRightIcon className={"ml-1 h-5 w-5 text-primary"}/></Link>
		</main>
	)
}

const FormButton = (props: {name: string, url: string, icon: ReactNode}) => {
	return (
		<div className={"bg-white inline-flex items-center rounded-lg px-4 cursor-pointer"}>
			{props.icon}
			<span className={"p-3"}>Continue with {props.name}</span>
		</div>
	)
}
