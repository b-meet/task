import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { SUBJECTLIST } from "../constants/constants";
import CourseList from "../components/global/CourseList";

const CourseDetail = () => {
	const { courseName } = useParams();
	const navigate = useNavigate();
	const [subjects, setSubjects] = useState([]);

	useEffect(() => {
		const filteredSubjects = SUBJECTLIST.filter(
			(subject) =>
				subject.course.toLowerCase() === courseName.toLowerCase()
		);

		setSubjects(filteredSubjects);
	}, [courseName]);

	return (
		<article className='flex gap-4 justify-between h-[calc(100vh-56px)] p-4 sm:px-10 sm:py-8'>
			<section className='shadow-xl flex-1 rounded-md px-6 py-8'>
				<div className='flex gap-5 mb-8'>
					<button onClick={() => navigate(-1)}>
						<FaArrowLeft />
					</button>
					<h1 className='font-semibold text-2xl capitalize'>
						{courseName.replace(/-/g, " ")}
					</h1>
				</div>
				<CourseList
					heading={"Subjects"}
					needGrid={true}
					data={subjects}
				/>
			</section>
		</article>
	);
};

export default CourseDetail;
