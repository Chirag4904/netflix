import Row from "./Components/Row";
import requests from "./requests";
import GlobalStyles from "./Components/GlobalStyles";
import Banner from "./Components/Banner";
function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Banner />
			<Row
				title="Netflix originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLarge
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
