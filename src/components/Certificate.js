import './certificate.css';
import mst from '../img/MST-Certificate.PNG';
import ai from '../img/AI.PNG';
import google_sheet from '../img/google-sheet.PNG';
import superhero from '../img/superhero.PNG';
import transfer_learning from '../img/transfer-learning.PNG';
import tweet_emotion from '../img/tweet-emotion-recognition.PNG';
function Certificate() {
    return (
      <div className="certificate" id="certificate">
        <div class="content">
        <h1>CERATIFICATES</h1>
        <img src={mst}/>
        <p>MST CONNECT Certificate<br>
        </br>Introduction to Cloud: Agile and Flexible Computing Services<br>
        </br>October 3, 2022</p><br></br>
        <img src={ai}/>
        <p>Coursera Project Certificate<br>
        </br>Build & Deploy AI Messenger Chatbot using IBM Watson<br>
        </br>November 16, 2022</p><br></br>
        <img src={google_sheet}/>
        <p>Coursera Project Certificate<br>
        </br>Build a mobile app with Google Sheets on Glide and no coding<br>
        </br>November 16, 2022</p><br></br>
        <img src={superhero}/>
        <p>Coursera Project Certificate<br>
        </br>Create a Superhero Name Generator with TensorFlow<br>
        </br>November 16, 2022</p><br></br>
        <img src={transfer_learning}/>
        <p>Coursera Project Certificate<br>
        </br>Transfer Learning for NLP with TensorFlow Hub<br>
        </br>November 16, 2022</p><br></br>
        <img src={tweet_emotion}/>
        <p>Coursera Project Certificate<br>
        </br>Tweet Emotion Recognition with TensorFlow<br>
        </br>November 16, 2022</p>
        </div>
      </div>
    );
  }
  
  export default Certificate;