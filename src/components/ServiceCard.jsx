const ServiceCard = ({ imgURL, label, subtext }) => {
	return (
		<div className="flex sm:flex-col sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-lg px-10 py-16 bg-gradient-to-tr from-indigo-300 to-gray-300">
			<div className="mx-4 w-24 h-10 md:w-11 md:h-11 flex justify-center items-center bg-coral-red rounded-full">
				<img src={imgURL} alt={label} width={24} height={24} />
			</div>
			<h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
				{label}
			</h3>
			<p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
				{subtext}
			</p>
		</div>
	);
};

export default ServiceCard;
