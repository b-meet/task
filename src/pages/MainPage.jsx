import CourseList from "../components/global/CourseList";
import ProfileCard from "../components/homePage/ProfileCard";
import { COURSES } from "../constants/constants";

const MainPage = () => {
	return (
		<>
			<section className='flex flex-col sm:flex-row gap-4 justify-between h-[calc(100vh-56px)] p-4 sm:px-10 sm:py-8'>
				<ProfileCard />
				<CourseList
					heading={"Courses"}
					needGrid={true}
					data={COURSES}
				/>
			</section>
		</>
	);
};

export default MainPage;
