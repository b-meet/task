import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SubjectDetails = () => {
	const [dataForSubjects, setDataForSubjects] = useState([]);
	const navigate = useNavigate();
	const { subject } = useParams();

	const getData = async () => {
		const subjects = await axios.get(
			"https://course-api.com/react-tabs-project"
		);

		setDataForSubjects(subjects?.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<article className='flex flex-col gap-4 justify-between h-[calc(100vh-56px)] p-4 sm:px-10 sm:py-8'>
			<section className='flex gap-5 mb-8'>
				<button onClick={() => navigate(-1)}>
					<FaArrowLeft />
				</button>
				<h1 className='font-semibold text-2xl capitalize'>
					{subject.replace(/-/g, " ")}
				</h1>
			</section>
			<section className='flex flex-col md:flex-row gap-8 justify-between h-[calc(100vh-56px)] p-4 sm:px-10 sm:py-8'>
				{dataForSubjects?.map((item) => (
					<div
						key={item?.id}
						className='shadow-md px-6 py-4 rounded-xl flex-1 flex flex-col gap-2'
					>
						<h3 className='font-semibold text-xl'>{item?.title}</h3>
						<hr />
						<p className='text-slate-400 text-xs'>{item?.dates}</p>
						<ul className='list-disc list-inside flex flex-col gap-2'>
							{item?.duties.map((duty) => (
								<li key={duty} className='text-sm'>
									{duty}
								</li>
							))}
						</ul>
						<div className='m-auto'>
							<button className='px-4 py-2 bg-blue-500 text-white'>
								Enroll Now
							</button>
						</div>
					</div>
				))}
			</section>
		</article>
	);
};

export default SubjectDetails;
