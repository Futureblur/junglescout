type ButtonProps = {
	name: string;
	url: string;
}

export const Button = (props: ButtonProps) => {
	return (
		<div className={"inline-flex bg-primary rounded-lg"}>
			<a className={"text-black p-4"} href={props.url}>{props.name}</a>
		</div>
	);
};
