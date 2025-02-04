// import React from 'react';

const ServiceCard = ({ title, description, alignRight = false }) => {
	return (
			<div className={`flex flex-col ${alignRight ? 'self-end text-right' : ''} mt-8 max-w-full w-[668px]`}>
				<div className={`${alignRight ? 'self-end' : ''} text-2xl max-md:max-w-full`}>
					{title}
				</div>
				<div className="mt-3.5 text-xl max-md:max-w-full">
					{description}
				</div>
			</div>
	);
};
export default ServiceCard;