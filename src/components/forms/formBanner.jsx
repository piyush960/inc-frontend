

const FormsBanner = (props) => {
	return (
		<header className="w-full max-w-7xl mx-auto pt-24 px-2">
			<div className="border-white-100 border-[1px] sm:px-6 sm:py-4 p-4 flex gap-8">
				<div className="sm:w-[180px] border-r-[1px] pr-8 flex flex-col items-center justify-center">
					<img src={props.logo} alt="" />
				</div>
				<div className='flex flex-col justify-center gap-2'>
					<h1 className="font-bold text-3xl">{props.eventName}</h1>
					{props.eventDescription && (
						<h2
							className="font-normal text-xl"
							dangerouslySetInnerHTML={{ __html: props.eventDescription }}
						/>
					)}
				</div>
			</div>	
		</header>
	);
}

export default FormsBanner;