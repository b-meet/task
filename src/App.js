import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/constants";
import MainPage from "./pages/MainPage";
import CourseDetail from "./pages/CourseDetail";
import Header from "./components/global/Header";
import SubjectDetails from "./pages/SubjectDetails";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={ROUTES.HOME} element={<MainPage />} />
					<Route
						path={ROUTES.BROWSE_COURSE}
						element={<CourseDetail />}
					/>
					<Route
						path={ROUTES.SUBJECT_DETAILS}
						element={<SubjectDetails />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
