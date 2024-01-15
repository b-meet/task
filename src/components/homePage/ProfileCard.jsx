import React from "react";

const ProfileCard = () => {
	return (
		<article className='flex flex-col items-center gap-5 shadow-xl flex-[0.2] rounded-md px-4 py-6 sm:px-6 sm:py-8'>
			<section className='rounded-full p-2 border border-slate-200'>
				<img
					className='rounded-full overflow-hidden sm:h-auto h-28'
					src='https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg'
					alt='girl'
				/>
			</section>
			<p className='text-center text-sm'>
				sign up and get a profile to edit and track your progress
			</p>
			<button className='py-2 px-8 bg-blue-500 text-white rounded-full'>
				Sign up
			</button>
			<section className='flex flex-col gap-2'>
				<div className='h-9 w-44 bg-slate-200 rounded-full'></div>
				<div className='h-9 w-44 bg-slate-200 rounded-full'></div>
				<div className='h-9 w-44 bg-slate-200 rounded-full'></div>
				<div className='h-9 w-44 bg-slate-200 rounded-full'></div>
				<div className='h-9 w-44 bg-slate-200 rounded-full'></div>
				<div className='h-9 w-44 bg-slate-200 rounded-full hidden sm:block'></div>
				<div className='h-9 w-44 bg-slate-200 rounded-full hidden sm:block'></div>
			</section>
		</article>
	);
};

export default ProfileCard;
