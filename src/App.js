import './App.css';
import AppAbout from './component/AppAbout/AppAbout';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './component/Appheader/AppHeader';
import AppContent from './component/AppContent/AppContent';
import AppWork from './component/AppWork/AppWork';

function App() {
  return (
    <div className="origin">
      <div className="App">
        <AppHeader />
        <AppAbout />
        <AppContent />
        <AppWork />
      </div>
    </div>
  );
}

export default App;
