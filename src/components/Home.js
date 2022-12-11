import './home.css';
import pic from '../img/pic.jpg';
function Home() {
    return (
      <div className="home" id="home">
        <div className="name">
            <h2>APRIL JOHN BOLANIO GOGO</h2>
        </div>
        <img src={pic}/>
      </div>
    );
  }
  
  export default Home;