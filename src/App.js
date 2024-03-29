import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Footer from './Components/Footer';
import 'floc-off';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<About />
			<Footer />
		</div>
	);
}

export default App;
