import IGPhotos from './components/IGPhotos';
import { Provider } from 'react-redux';
import store from './redux/store';


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IGPhotos />
      </div>
    </Provider>
  );
}

export default App;
