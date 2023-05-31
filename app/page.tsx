import Image from 'next/image'
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Lusitana } from "@next/font/google";

const lusitana = Lusitana({
	subsets: ["latin"],
	weight: ["400", "700"],
})

export default function Home() {
	return (
		<main>
			<Header/>
			<div className={"space-y-40 mb-20"}>
				<Hero/>
				<WhyJunglescout/>
				<CTA/>
			</div>
		</main>
	)
}

const Hero = () => {
	return (
		<div className={"flex md:flex-row flex-col justify-between xl:px-40 lg:px-32 px-10 lg:mt-40 mt-24"}>
			<div className={"xl:max-w-xl md:pr-10 pr-0 max-w-sm space-y-10"}>
				<h1 className={lusitana.className + " text-primary xl:text-6xl lg:text-5xl text-3xl xl:leading-tight"}>Happy community, Happy life.</h1>
				<h2 className={"text-white opacity-70 mt-10"}>We know how it feels like to be stuck in a toxic community. Luckily for you, it doesn’t always have to be this way. Explore how you can automate moderator recruitment for your server, manage their experiences and much more!</h2>
				<div className={"flex space-x-6 cursor-pointer"}>
					<Button name={"Sign up for Beta"} url={"/signup"}/>
					<div className={"flex items-center space-x-2"}>
						<div className={"text-white"}>7 Reasons Why</div>
						<ArrowRightIcon className={"h-5 w-5 text-primary"}/>
					</div>
				</div>
			</div>
			<div className={"xl:h-[500px] xl:w-[470px] md:h-[450px] md:w-[400px] h-[300px] w-full mt-6 relative"}>
				<Image className={"object-cover pointer-events-none rounded-2xl md:rotate-3"} src={"/jungle.jpg"} fill={true} alt={"Jungle scenery"}/>
			</div>
		</div>
	)
}

const WhyJunglescout = () => {
	return (
		<div className={"space-y-40"}>
			<h2 className={lusitana.className + " text-primary text-4xl text-center"}>Why Junglescout?</h2>
			<ReasonCard title={"1"} description={"Everything you need, gathered in one place. No more recruitment applications using boring, third party forms!"} image={"/jungle.jpg"}/>
			<ReasonCard title={"2"} description={"Experience is key when it comes to recruiting fellow staff members. Luckily, you can easily view and track the amount of experience all applicants have - in one glance."} image={"/jungle.jpg"}/>
			<ReasonCard title={"3"} description={"Grow together, grow bigger. The longer you are a member, the higher you will rank amongst others. This ensures that you are trustworthy."} image={"/jungle.jpg"}/>
			<ReasonCard title={"4"} description={"Not looking for a moderator right now? That’s completely fine - you can hire a helper or community manager instead! But don’t feel restricted by these, as you can create a custom role that suits your needs!"} image={"/jungle.jpg"}/>
			<ReasonCard title={"5"} description={"Fun fact: the entire project (even the website you’re currently viewing) is open source, meaning that anyone can become a part of this awesome journey by contributing! Thanks to my generous supporters, I can keep this service running for free - for everyone."} image={"/jungle.jpg"}/>
			<ReasonCard title={"6"} description={"Set custom filters so you can find the exact place where you feel comfortable. Whether it’s gaming, anime, cooking or studying - we’ve got you covered."} image={"/jungle.jpg"}/>
			<ReasonCard title={"7"} description={"To make sure you have someone 24/7 by your side, you can set your preferred timezone - and I’ll go out and search the entire jungle to find the right one."} image={"/jungle.jpg"}/>
		</div>
	)
}

const ReasonCard = (props: {title: string, description: string, image: string}) => {
	return (
		<div className={"flex md:flex-row flex-col justify-around px-10 md:space-y-2 space-y-6"}>
			<div className={"md:h-[400px] md:w-[400px] h-[200px] w-full relative"}>
				<Image className={"object-cover pointer-events-none rounded-2xl"} src={props.image} fill={true} alt={"Jungle scenery"}/>
			</div>

			<div className={"max-w-sm space-y-8 md:px-10"}>
				<div className={"text-primary text-3xl font-bold"}>{props.title}</div>
				<div className={"text-white opacity-70"}>{props.description}</div>
			</div>
		</div>
	)
}

const CTA = () => {
	return (
		<div>
			<h2 className={lusitana.className + " text-primary text-4xl text-center"}>Which one suits you the best?</h2>
			<div className={"flex md:flex-row flex-col mt-10 justify-center md:space-x-10 px-10 md:space-y-0 space-y-4"}>
				<CTACard title={"🔍"} cta={"Start exploring"} description={"I am looking for a moderator, helper, community manager or someone who can take our community to the next level."} url={"/explore"}/>
				<CTACard title={"🤝"} cta={"Join community"} description={"I am willing to help growing and engaging with communities by becoming a moderator or community manager."} url={"/join"}/>
			</div>
		</div>
	)
}

const CTACard = (props: {title: string, description: string, cta: string, url: string}) => {
	return (
		<div className={"md:max-w-sm w-full space-y-10 text-center bg-background-lighter rounded-xl border-white border-opacity-10 border-2 p-6 py-10"}>
			<p className={"text-7xl"}>{props.title}</p>
			<p className={"text-white opacity-70"}>{props.description}</p>
			<Button name={props.cta} url={props.url}/>
		</div>
	)
}
