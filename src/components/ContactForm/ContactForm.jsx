// import React from 'react';

const ContactForm = () => {
	return (
			<form className="flex overflow-hidden z-0 flex-col justify-center items-center mt-10 max-w-full text-center text-neutral-500 w-[472px]">
				<label htmlFor="name" className="sr-only">Введите имя</label>
				<input
						type="text"
						id="name"
						className="overflow-hidden  p-3 w-full h-[56px] rounded-full bg-neutral-200 max-md:px-5"
						placeholder="Введите имя"
				/>

				<label htmlFor="phone" className="sr-only">Телефон</label>
				<input
						type="tel"
						id="phone"
						className="overflow-hidden  p-3 mt-7 w-full h-[56px] whitespace-nowrap rounded-full bg-neutral-200 max-md:px-5"
						placeholder="Телефон"
				/>

				<label htmlFor="email" className="sr-only">Электронная почта</label>
				<input
						type="email"
						id="email"
						className="overflow-hidden  p-3 mt-7 w-full h-[56px]  rounded-full bg-neutral-200 max-md:px-5"
						placeholder="Электронная почта"
				/>

				<button
						type="submit"
						className="self-stretch mt-7 w-full text-xl font-bold bg-yellow-600 h-[56px] rounded-full text-neutral-200"
				>
					Оставить заявку
				</button>
			</form>
	);
};
export default ContactForm;