import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '../Button';
import { Logo } from '../ui/Logo';

const planFeatures = {
	starter: ["1 AI Employee", "Email Management", "Basic Analytics", "8/5 Support"],
	growth: ["5 AI Employees", "Advanced Analytics", "Social Media", "24/7 Support"],
	enterprise: ["Unlimited AI", "Custom Integrations", "Priority Support", "Dedicated Manager"]
};

export const GetStartedPage: React.FC = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [showPassword, setShowPassword] = useState(false);
	const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'enterprise'>('growth');
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		company: '',
		phone: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (step < 3) {
			setStep(step + 1);
			return;
		}

		setIsLoading(true);
		// Simulate signup
		setTimeout(() => {
			setIsLoading(false);
			console.log('Signup:', { ...formData, plan: selectedPlan });
			navigate('/');
		}, 1500);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className="min-h-screen bg-pop-yellow py-12 px-4">
			<div className="max-w-2xl mx-auto">
				{/* Logo */}
				<div className="text-center mb-8">
					<Logo size="lg" className="justify-center" />
				</div>

				{/* Progress Bar */}
				<div className="flex items-center justify-center mb-8 gap-4">
					{[1, 2, 3].map((s) => (
						<React.Fragment key={s}>
							<div
								className={`w-10 h-10 rounded-full border-3 border-black flex items-center justify-center font-bold text-lg transition-colors ${step >= s ? 'bg-black text-white' : 'bg-white text-black'
									}`}
							>
								{step > s ? <Check size={20} /> : s}
							</div>
							{s < 3 && (
								<div className={`w-16 h-1 border-2 border-black ${step > s ? 'bg-black' : 'bg-white'}`} />
							)}
						</React.Fragment>
					))}
				</div>

				{/* Form Card */}
				<div className="bg-white border-3 border-black shadow-pop p-8">
					<form onSubmit={handleSubmit}>
						{/* Step 1: Account Info */}
						{step === 1 && (
							<>
								<h1 className="font-headings text-4xl font-bold uppercase mb-2 text-center">
									Create Account
								</h1>
								<p className="text-gray-700 font-semibold text-center mb-8">
									Start your 14-day free trial
								</p>

								<div className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label htmlFor="firstName" className="block font-bold uppercase text-sm mb-2">
												First Name
											</label>
											<input
												id="firstName"
												name="firstName"
												type="text"
												required
												value={formData.firstName}
												onChange={handleChange}
												className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
											/>
										</div>
										<div>
											<label htmlFor="lastName" className="block font-bold uppercase text-sm mb-2">
												Last Name
											</label>
											<input
												id="lastName"
												name="lastName"
												type="text"
												required
												value={formData.lastName}
												onChange={handleChange}
												className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="email" className="block font-bold uppercase text-sm mb-2">
											Work Email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
											placeholder="you@company.com"
										/>
									</div>

									<div>
										<label htmlFor="password" className="block font-bold uppercase text-sm mb-2">
											Password
										</label>
										<div className="relative">
											<input
												id="password"
												name="password"
												type={showPassword ? 'text' : 'password'}
												required
												value={formData.password}
												onChange={handleChange}
												className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold pr-12"
												placeholder="Min. 8 characters"
											/>
											<button
												type="button"
												onClick={() => setShowPassword(!showPassword)}
												className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
											>
												{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
											</button>
										</div>
									</div>
								</div>
							</>
						)}

						{/* Step 2: Company Info */}
						{step === 2 && (
							<>
								<h1 className="font-headings text-4xl font-bold uppercase mb-2 text-center">
									Company Details
								</h1>
								<p className="text-gray-700 font-semibold text-center mb-8">
									Tell us about your business
								</p>

								<div className="space-y-4">
									<div>
										<label htmlFor="company" className="block font-bold uppercase text-sm mb-2">
											Company Name
										</label>
										<input
											id="company"
											name="company"
											type="text"
											required
											value={formData.company}
											onChange={handleChange}
											className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
										/>
									</div>

									<div>
										<label htmlFor="phone" className="block font-bold uppercase text-sm mb-2">
											Phone Number (Optional)
										</label>
										<input
											id="phone"
											name="phone"
											type="tel"
											value={formData.phone}
											onChange={handleChange}
											className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-2 focus:ring-pop-yellow font-semibold"
										/>
									</div>
								</div>
							</>
						)}

						{/* Step 3: Choose Plan */}
						{step === 3 && (
							<>
								<h1 className="font-headings text-4xl font-bold uppercase mb-2 text-center">
									Choose Your Plan
								</h1>
								<p className="text-gray-700 font-semibold text-center mb-8">
									All plans include 14-day free trial
								</p>

								<div className="space-y-4">
									{(['starter', 'growth', 'enterprise'] as const).map((plan) => (
										<button
											key={plan}
											type="button"
											onClick={() => setSelectedPlan(plan)}
											className={`w-full p-4 border-3 border-black text-left transition-all ${selectedPlan === plan
													? 'bg-pop-yellow shadow-pop'
													: 'bg-white hover:bg-gray-50'
												}`}
										>
											<div className="flex items-center justify-between mb-2">
												<span className="font-headings text-2xl font-bold uppercase">{plan}</span>
												<div className={`w-6 h-6 rounded-full border-3 border-black flex items-center justify-center ${selectedPlan === plan ? 'bg-black' : 'bg-white'
													}`}>
													{selectedPlan === plan && <Check size={14} className="text-white" />}
												</div>
											</div>
											<ul className="flex flex-wrap gap-2">
												{planFeatures[plan].map((feature) => (
													<li key={feature} className="text-sm font-semibold bg-white px-2 py-1 border border-black">
														{feature}
													</li>
												))}
											</ul>
										</button>
									))}
								</div>
							</>
						)}

						{/* Navigation */}
						<div className="mt-8 flex gap-4">
							{step > 1 && (
								<Button
									type="button"
									variant="secondary"
									onClick={() => setStep(step - 1)}
									className="flex-1"
								>
									Back
								</Button>
							)}
							<Button
								type="submit"
								className="flex-1"
								disabled={isLoading}
							>
								{isLoading ? 'Creating Account...' : step < 3 ? 'Continue' : 'Start Free Trial'}
							</Button>
						</div>
					</form>

					<div className="mt-6 text-center">
						<p className="font-semibold text-gray-700">
							Already have an account?{' '}
							<Link to="/login" className="font-bold text-black hover:underline">
								Log In
							</Link>
						</p>
					</div>
				</div>

				{/* Trust Badge */}
				<div className="mt-8 text-center">
					<p className="font-bold text-sm">
						🔒 Your data is secure. We never share your information.
					</p>
				</div>
			</div>
		</section>
	);
};
