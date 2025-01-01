
import { cn } from "../../lib/utils";

const FormsBanner = ({ logo, eventName, eventDescription, className, ...props }) => {
	return (
		<div className={cn("w-full max-w-7xl mx-auto relative p-px", className)}
		{...props}
		>
			<span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100"></span>

			<div className="w-full sm:px-6 sm:py-4 p-4 flex flex-col sm:flex-row max-sm:items-center gap-6 sm:gap-8 bg-tertiary relative">

				<img src={logo} alt={eventName + '_logo'} className="w-[120px] sm:w-[180px] sm:pr-8 sm:border-r-[1px] flex flex-col items-center justify-center"/>

				<div className='flex flex-col items-center sm:items-start justify-center gap-2'>
					<h1 className="font-bold text-3xl">{eventName}</h1>
					{eventDescription && (
						<h2
						className="font-normal text-xl max-sm:text-center"
						dangerouslySetInnerHTML={{ __html: eventDescription }}
						/>
					)}
				</div>

			</div>	
		</div>
	);
}

export default FormsBanner;