import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
	CloudUploadIcon,
	CogIcon,
	DotsCircleHorizontalIcon,
	EmojiSadIcon,
	KeyIcon,
	LockClosedIcon,
	MenuIcon,
	PhoneIcon,
	RefreshIcon,
	ServerIcon,
	ShieldCheckIcon,
	UserIcon,
	XIcon,
} from '@heroicons/react/outline'
import {ChevronRightIcon, ExternalLinkIcon} from '@heroicons/react/solid'
import {
	AnnotationIcon,
	GlobeAltIcon,
	LightningBoltIcon,
	ScaleIcon,
} from '@heroicons/react/outline'

const navigation = [
	{name: 'Home', href: '#home'},
	{name: 'Assistance', href: '#assistance'},
	{name: 'Services', href: '#services'},
	{name: 'Contact us', href: '#contactus'},
]
const features = [
	{
		name: 'Breakdown Recovery',
		description: 'Have you broke down or crashed your vehicle?',
		icon: EmojiSadIcon,
	},
	{
		name: 'New Vehicle Checkup',
		description: 'Have you just bought a car or van from the salvage market?',
		icon: DotsCircleHorizontalIcon,
	},
	{
		name: 'Home Sweet Home',
		description: 'Thinking on how do I get this home?',
		icon: KeyIcon,
	},
	{
		name: 'Jump Start',
		description: 'Runner or non runner?',
		icon: LightningBoltIcon,
	},
]
const blogPosts = [
	{
		id: 1,
		title: 'Definitely recommend!',

		imageUrl: require('./assets/11.jpg'),
		preview:
			'Came out on a Friday night at short notice and at a very competitive price. Thanks again Adam!',
		author: {
			name: 'Roel Aufderehar',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			href: '#',
		},
	},
	{
		id: 2,
		title: 'Very fast and reliable service!',
		imageUrl: require('./assets/9.jpg'),
		preview:
			'I definitely recommend it very fast and reliable service with good service and prices.',
		author: {
			name: 'Brenna Goyette',
			imageUrl:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			href: '#',
		},
	},
	{
		id: 3,
		title: 'Always go above and beyond!',
		imageUrl: require('./assets/4.JPG'),
		preview:
			'We have been using this company for many years and I must say, its an absolute honor dealing with them friendly and always go above and beyond. Thank you very much for being a great person and sincere',
		author: {
			name: 'Daniela Metz',
			imageUrl:
				'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			href: '#',
		},
	},
]
const footerNavigation = {
	solutions: [
		{name: 'Marketing', href: '#'},
		{name: 'Analytics', href: '#'},
		{name: 'Commerce', href: '#'},
		{name: 'Insights', href: '#'},
	],
	support: [
		{name: 'Pricing', href: '#'},
		{name: 'Documentation', href: '#'},
		{name: 'Guides', href: '#'},
		{name: 'API Status', href: '#'},
	],
	company: [
		{name: 'About', href: '#'},
		{name: 'Blog', href: '#'},
		{name: 'Jobs', href: '#'},
		{name: 'Press', href: '#'},
		{name: 'Partners', href: '#'},
	],
	legal: [
		{name: 'Claim', href: '#'},
		{name: 'Privacy', href: '#'},
		{name: 'Terms', href: '#'},
	],
	social: [
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/Low-Cost-Recovery-805744819482129/',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: 'mailto: adamauto@hotmail.co.uk',
			icon: (props: any) => (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					{...props}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
					/>
				</svg>
			),
		},
		{
			name: 'Google Maps',
			href: '#',
			icon: (props: any) => (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					{...props}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
		},
	],
}

// Accident damage badel lost key recovery
// — Insurance assistance claim —
// Breakdown and towing services — tyre replacement

const timeline = [
	{
		id: 1,
		content: 'Breakdown and towing services',
		icon: UserIcon,
	},
	{
		id: 2,
		content: 'Insurance assistance claim',
		icon: UserIcon,
	},
	{
		id: 3,
		content: 'Tyre replacement',
		icon: UserIcon,
	},
	{
		id: 4,
		content: 'Accident damage',
		icon: UserIcon,
	},
]

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

const Home = () => {
	return (
		<div className="bg-white">
			<div className="relative overflow-hidden">
				<Popover as="header" className="relative">
					<div className="bg-gray-900 pt-6">
						<nav
							className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
							aria-label="Global"
						>
							<div className="flex items-center flex-1">
								<div className="flex items-center justify-between w-full md:w-auto">
									<a href="#">
										<span className="sr-only">Workflow</span>
										<img
											className="h-8 w-auto sm:h-10"
											src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
											alt=""
										/>
									</a>
									<div className="-mr-2 flex items-center md:hidden">
										<Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
											<span className="sr-only">Open main menu</span>
											<MenuIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="hidden space-x-8 md:flex md:ml-10">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="text-base font-medium text-white hover:text-gray-300"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</nav>
					</div>

					<Transition
						as={Fragment}
						enter="duration-150 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
						>
							<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>
										<img
											className="h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
											alt=""
										/>
									</div>
									<div className="-mr-2">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
											<span className="sr-only">Close menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="pt-5 pb-6">
									<div className="px-2 space-y-1">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
				<main>
					<section id="home">
						<div
							style={{minHeight: '92vh'}}
							className="pt-10 flex items-center justify-center  bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
						>
							<div className="mx-auto max-w-7xl lg:px-8">
								<div className="lg:grid lg:grid-cols-2 lg:gap-8">
									<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
										<div className="lg:py-24">
											<a
												href="tel:+44-777-80-95-888"
												className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
											>
												<span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
													Seeking assistance?
												</span>
												<span className="ml-4 text-sm">Reach out now!</span>
												<ChevronRightIcon
													className="ml-2 w-5 h-5 text-gray-500"
													aria-hidden="true"
												/>
											</a>
											<h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
												<span className="block">Quick, Efficient</span>
												<span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
													and Reliable Service
												</span>
											</h1>
											<p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
												For the quotation, we need collection, delivery
												locations and vehicle make and mode. For faster and more
												accurate quotation, we need postcodes.
											</p>
										</div>
									</div>
									<div className="mt-12 hidden md:block -mb-16 sm:-mb-48 lg:m-0 lg:relative ">
										<div className="bg-transparent mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
											{/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
											<img
												className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-2xl lg:max-w-none"
												src={require('./assets/carr.png')}
												height="500"
												width="500"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Blog section */}
						<div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
							<div className="relative">
								<div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
									<h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
										Stay Safe with Us
									</h2>
									<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
										24 Hours Immediate Response
									</p>
									<p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
										DON'T RISK YOUR LICENCE WITH NO TAX OR MOTOR INSURANCE!
									</p>
								</div>
								<div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
									{blogPosts.map((post) => (
										<div
											key={post.id}
											className="flex flex-col rounded-lg shadow-lg overflow-hidden"
										>
											<div className="flex-shrink-0">
												<img
													className="h-48 w-full object-cover"
													src={post.imageUrl}
													alt=""
												/>
											</div>
											<div className="flex-1 bg-white p-6 flex flex-col justify-between">
												<div className="flex-1">
													<a className="block mt-2">
														<p className="text-xl font-semibold text-cyan-600">
															{post.title}
														</p>
														<p className="mt-3 text-base text-gray-500">
															{post.preview}
														</p>
													</a>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>

					{/* Testimonial section */}
					<section id="services">
						<div className="pb-16 bg-gray-900 lg:pb-0 lg:z-10 lg:relative">
							<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
								<div className="relative lg:-my-8">
									<div
										aria-hidden="true"
										className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
									/>
									<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
										<div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
											<img
												className="object-cover lg:h-full lg:w-full"
												src={require('./assets/6.JPG')}
												alt=""
											/>
										</div>
									</div>
								</div>
								<div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
									<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
										<div className="flow-root">
											<ul role="list" className="-mb-8">
												{timeline.map((event, eventIdx) => (
													<li key={event.id}>
														<div className="relative pb-8">
															<div className="relative flex space-x-3 items-center">
																<div>
																	<span
																		className={classNames(
																			'h-5 w-5 rounded-full flex items-center justify-center ring-4 ring-white'
																		)}
																	></span>
																</div>
																<div className="min-w-0 flex-1  flex justify-between space-x-4">
																	<div>
																		<p className="font-semibold text-xl text-gray-100">
																			{event.content}
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Services section */}

					<section id="assistance">
						<div
							style={{minHeight: '100vh'}}
							className="py-12 flex items-center bg-white"
						>
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
								<div className="lg:text-center">
									<h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">
										Assistance
									</h2>
									<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
										How Can We Help You?
									</p>
									<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
										Did something break in your car? Nothing that can’t be
										fixed!
									</p>
								</div>

								<div className="mt-10">
									<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
										{features.map((feature) => (
											<div key={feature.name} className="relative">
												<dt>
													<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
														<feature.icon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</div>
													<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
														{feature.name}
													</p>
												</dt>
												<dd className="mt-2 ml-16 text-base text-gray-500">
													{feature.description}
												</dd>
											</div>
										))}
									</dl>
								</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section id="contactus">
						<div className="relative bg-gray-900">
							<div className="relative h-56 bg-cyan-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
								<img
									className="w-full h-full object-cover"
									src={require('./assets/3.JPG')}
									alt=""
								/>
								<div
									aria-hidden="true"
									className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
								/>
							</div>
							<div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
								<div className="md:ml-auto md:w-1/2 md:pl-10">
									<h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
										Trusted Assistance
									</h2>
									<p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
										We’re here to help
									</p>
									<p className="mt-3 text-lg text-gray-300">
										Low Cost Recovery is an automotive business. We provide
										towing services and brake diagnosis and repair. Did
										something break in your car? Nothing that can’t be fixed!
										People here have expertise in different kinds of repair.
										Give the details to the personnel, so we could hypothesize
										the cause of the failure. Feel free to question.
									</p>
									<div className="mt-8">
										<div className="inline-flex rounded-md shadow">
											<a
												href="tel:+44-777-80-95-888"
												className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
											>
												REACH US NOW
												<PhoneIcon
													className="-mr-1 ml-3 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
				<footer className="bg-gray-50" aria-labelledby="footer-heading">
					<h2 id="footer-heading" className="sr-only">
						Footer
					</h2>
					<div className="max-w-md mx-auto py-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
						<div className="xl:grid xl:grid-cols-3 xl:gap-8">
							<div className="space-y-8 xl:col-span-1">
								<img
									className="h-10"
									src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
									alt="Company name"
								/>
							</div>
							<div className="space-y-8 xl:col-span-1">
								<div className="flex space-x-6 justify-center items-center">
									{footerNavigation.social.map((item) => (
										<a
											key={item.name}
											href={item.href}
											target="_blank"
											rel="noreferrer"
											className="text-gray-400 hover:text-gray-500"
										>
											<span className="sr-only">{item.name}</span>
											<item.icon className="h-6 w-6" aria-hidden="true" />
										</a>
									))}
								</div>
							</div>
							<div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-1">
								<p className="text-base text-gray-400 xl:text-center">
									&copy; {new Date().getFullYear()} Rights reserved for Low Cost
									Recovery.
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Home
