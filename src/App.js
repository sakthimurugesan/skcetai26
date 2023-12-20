
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
import EventsDetails from "./components/eventpage/EventsDetails"
import ActivitiesDetails from "./components/student_activities_page/activitiesDetails";
import Gallery from "./components/gallery/gallery1";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage></Homepage>} />
				<Route path="/events" element={<EventPage></EventPage>} />
				<Route path="/events/:id" element={<EventsDetails></EventsDetails>} />
				<Route path="/activities" element={<Activities></Activities>} />
				<Route path="/activities/:id" element={<ActivitiesDetails></ActivitiesDetails>} />
				<Route path="/gallery" element={<Gallery></Gallery>} />



			</Routes>
		</Router>
	);
}

export default App;
