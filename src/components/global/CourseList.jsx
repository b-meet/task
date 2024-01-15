import { CiBoxList } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CourseList = ({ heading, needGrid, data }) => {
	const [isGrid, setIsGrid] = useState(() => {
		const storedValue = localStorage.getItem("isGridLayout");
		return storedValue ? JSON.parse(storedValue) : false;
	});

	console.log(isGrid);

	const gridListStyle = "w-64 h-32";
	const listStyle = "h-10 w-full";
	const { courseName } = useParams();

	const handleViewChange = () => {
		const updatedIsGrid = !isGrid;
		setIsGrid(updatedIsGrid);
		localStorage.setItem("isGridLayout", JSON.stringify(updatedIsGrid));
	};

	return (
		<article
			className={`${
				heading.toLowerCase() === "subjects"
					? "shadow-none"
					: "shadow-xl"
			}' flex-1 rounded-md px-6 py-8'`}
		>
			<div className='spaced-betn-row'>
				<h1 className='mb-3'>{heading}</h1>
				{needGrid ? (
					<button
						className='bg-slate-100 p-2 rounded-full hover:bg-slate-200'
						onClick={handleViewChange}
					>
						{isGrid ? <CiGrid41 /> : <CiBoxList />}
					</button>
				) : null}
			</div>
			<hr />
			<ul
				className={`${
					isGrid
						? "mt-3 flex flex-wrap gap-3"
						: "mt-3 flex flex-col gap-3"
				} justify-center`}
			>
				{data.map((item) => (
					<li
						key={
							heading.toLowerCase() === "subjects"
								? item?.name
								: item?.replace(/\s+/g, "-").toLowerCase()
						}
						className={`${isGrid ? gridListStyle : listStyle}`}
					>
						<Link
							className={`w-full h-full text-center grid place-items-center rounded-lg bg-slate-200 cursor-pointer hover:bg-slate-100 overflow-hidden`}
							to={`/${
								heading.toLowerCase() === "subjects"
									? (courseName + "/" + item?.name)
											.replace(/\s+/g, "-")
											.toLowerCase()
									: item?.replace(/\s+/g, "-").toLowerCase()
							}`}
						>
							{heading.toLowerCase() === "subjects"
								? item?.name
								: item?.replace(/\s+/g, "-").toLowerCase()}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
};

export default CourseList;
