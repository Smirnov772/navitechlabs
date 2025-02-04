// import React from 'react';

import ServiceCard from '../components/ServiceCard/ServiceCard.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import Header from "../components/Header/Header.jsx";

const services = [
	{
		title: "Бухгалтерский учет и налогообложение",
		description: "Бухгалтерский учет и налогообложение Мы обеспечиваем полный бухгалтерский сервис, включая составление отчетности, сдачу налоговых деклараций, помощь в оптимизации налоговых выплат."
	},
	{
		title: "Разработка и поддержка 1С",
		description: "Мы предлагаем разработку и настройку программных решений на платформе 1С, а также предоставляем полный спектр услуг по технической поддержке.",
		alignRight: true
	},
	{
		title: "Консультирование и аудит",
		description: "Профессиональные консультации по вопросам бухгалтерии, налогообложения и 1С. Мы также проводим аудит учета и системы на соответствие требованиям законодательства."
	}
];

function Home() {
	return (
			<div className="flex overflow-hidden relative flex-col items-center">
				<Header></Header>

				<div className="flex z-0 flex-col justify-center items-start px-[132px] h-[740px] w-full text-2xl font-bold max-w-[1920px] text-neutral-200 max-md:px-5 max-md:py-24  max-md:max-w-full">
					<div className="flex flex-col pt-32 max-w-full rounded-none w-[813px] max-md:pt-4">
						<h1 className="self-start text-9xl text-white max-md:max-w-full max-md:text-7xl">
							<span className="text-yellow-600">Navitech</span>
							<span className="text-neutral-200">labs</span>
						</h1>
						<p className="mt-5 mr-9 max-md:mr-2.5 max-md:max-w-full">
							Команда профессионалов в области бухгалтерского учета и разработки на платформе 1С. Если вы ищете
							надежного партнера для решения финансовых и технических вопросов, вы попали по адресу!
						</p>
						<button className="gap-2.5 self-stretch mt-7 text-center bg-yellow-600 rounded-full h-[56px]">
							Оставить заявку
						</button>
					</div>
				</div>

				<section id="services" className="flex overflow-hidden z-0 flex-col px-[132px] py-20  max-w-full font-bold text-black rounded-3xl bg-neutral-200 w-[1656px] max-md:px-5 ">
					<h2 className="text-4xl max-md:max-w-full">Наши услуги</h2>
					<div className="flex flex-col items-start mt-10 w-full max-md:max-w-full">
						{services.map((service, index) => (
								<ServiceCard key={index}
														 title={service.title}
														 description={service.description}
														 alignRight={service.alignRight}
								/>
						))}
					</div>
				</section>

				<section className="flex z-0 flex-col items-end px-[132px] pt-20 pb-9 mt-20 max-w-full rounded-3xl w-[1656px] max-md:pl-5 max-md:mt-10">
					<div className="flex flex-col mr-0 w-full max-md:max-w-full">
						<h2 className="self-start text-4xl font-bold text-neutral-200 max-md:max-w-full">
							Почему стоит выбрать нас?
						</h2>
						<div className="flex gap-10 items-start mt-20 w-full text-2xl font-bold text-zinc-300 text-opacity-90 max-md:mt-10 max-md:max-w-full">
							{/* Rest of the section content remains unchanged */}
						</div>
					</div>
				</section>

				<section id="contact" className="flex overflow-hidden z-0 flex-col justify-center items-start px-[132px] py-20 mt-20 max-w-full w-[1656px]  text-base font-bold rounded-3xl bg-yellow-950 bg-opacity-80 text-neutral-200 max-md:py-24 max-md:px-5 ">

					<h2 className="z-0 self-stretch text-4xl max-md:max-w-full">
						Готовы к сотрудничеству?
					</h2>
					<p className="z-0 self-stretch mt-10 text-2xl max-md:max-w-full">
						Нужна консультация или хотите обсудить условия сотрудничества? Оставьте заявку, и наш специалист свяжется с
						вами в ближайшее время!
					</p>
					<ContactForm/>
					<div className="flex z-0 flex-wrap gap-3 justify-center items-center mt-10 max-w-full font-extralight text-center text-white w-[487px]">
						<input
								type="checkbox"
								id="consent"
								className="flex shrink-0 self-stretch my-auto rounded-sm border-2 border-yellow-600 border-solid bg-zinc-300 h-[18px] w-[18px]"
						/>
						<label htmlFor="consent" className="self-stretch my-auto">
							Согласие на обработку персональных данных
						</label>
					</div>
				</section>
			</div>
	);
}

export default Home;
