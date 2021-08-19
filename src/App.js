import './App.css';
import AppAbout from './component/AppAbout/AppAbout';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './component/Appheader/AppHeader';
import AppContent from './component/AppContent/AppContent';
import AppWork from './component/AppWork/AppWork';
import AppBottom from './component/AppBottom/AppBottom';
import Appcontect from './component/AppContect/Appcontect';


function App() {

  return (
    <>
    <div className="origin">
      <div className="App">
        <AppHeader />
        <Appcontect/>
        <br/><br/>
        <AppAbout />
        <br/><br/>
        <AppContent />
        <br/><br/>
        <AppWork />
      </div>
    </div>
    <br/>
    <AppBottom/>
    </>
  );
}

export default App;
