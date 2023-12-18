
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Switch
} from "react-router-dom";
import Homepage from './components/homepage/homepage'
import EventPage from "./components/eventpage/eventpage";
import Activities from "./components/student_activities_page/activities";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage></Homepage>} />
				<Route path="/events" element={<EventPage></EventPage>} />
				<Route path="/activities" element={<Activities></Activities>} />



			</Routes>
		</Router>
	);
}

export default App;
