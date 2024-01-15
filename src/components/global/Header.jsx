import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

const Header = () => {
	return (
		<nav className='spaced-betn-row shadow-md py-2 px-10'>
			<p className='flex-[3] max-w-max'>University</p>
			<ul className='flex justify-end flex-1 gap-5'>
				<li className='text-white flex-1 max-w-[75px] sm:max-w-[150px] text-center'>
					<Link
						className='bg-blue-500 py-2 block w-full rounded-md'
						to={ROUTES.HOME}
					>
						Home
					</Link>
				</li>
				<li className='text-white flex-1 max-w-[75px] sm:max-w-[150px] text-center'>
					<Link
						className='bg-blue-500 py-2 block w-full rounded-md'
						to={ROUTES.BROWSE_COURSES}
					>
						sign up
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
