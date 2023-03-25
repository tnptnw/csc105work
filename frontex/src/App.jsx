import FavoriteSites from "./components/FavoriteSites";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import StateAssignmentOne from "./components/StateAssignmentOne";
import StateAssignmentTwo from "./components/StateAssignmentTwo";
import "./styles/App.css"
function App() {
  return (
    <div className="compo">        
          <FavoriteSites></FavoriteSites>
          
            <Profile></Profile>
                   
          <Gallery></Gallery>
          <StateAssignmentOne></StateAssignmentOne>
          <StateAssignmentTwo></StateAssignmentTwo>             
    </div>
  );
}

export default App;
