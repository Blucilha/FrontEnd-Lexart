import './App.css';
import ListProvider from './context/ListProvider';
import Search from './page/Search';

function App() {
	return (
		<ListProvider>
			<Search />
		</ListProvider>
	);
}

export default App;
