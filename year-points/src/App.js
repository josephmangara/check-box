import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [checkCount, setCheckCount] = useState(0);

  const handleclick = (event) => {
    event.preventDefault();
    const checkboxes = document.querySelectorAll(".check-box");
    let count = 0;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked){
        count ++
      }
    });
    
    setCheckCount(count);
  };

  return (
    <>
      <Header />
      <p id='intro'>Reflect on your year by checking boxes of what you have done.</p>
      <div id='my-table'>
        <p id='table-intro'>Cross only what you did this year</p>
        <table>
          <tbody>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Visited your dream destination</td>
              <td><input type='checkbox' className='check-box'></input> Got drunk</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Went on a solo trip</td>
              <td><input type='checkbox' className='check-box'></input> Partied hard</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Tried new foods</td>
              <td><input type='checkbox' className='check-box'></input> Went to cinemas alone</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Made new friends</td>
              <td><input type='checkbox' className='check-box'></input> Grieved</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Stayed up for 24 hours</td>
              <td><input type='checkbox' className='check-box'></input> Bought your dream item</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Fell in love</td>
              <td><input type='checkbox' className='check-box'></input> Watched more than 10 movies</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Got a tattoo</td>
              <td><input type='checkbox' className='check-box'></input> Started watching a new genre of movies</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Went to a concert</td>
              <td><input type='checkbox' className='check-box'></input> Visited a new place</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Went to the beach</td>
              <td><input type='checkbox' className='check-box'></input> Went to the mountains</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Gained weight</td>
              <td><input type='checkbox' className='check-box'></input> Watched sunset</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Lost weight</td>
              <td><input type='checkbox' className='check-box'></input> Watched sunrise</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Learned a new skill</td>
              <td><input type='checkbox' className='check-box'></input> Took many photographs</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Made a big decision</td>
              <td><input type='checkbox' className='check-box'></input> Laughed a lot</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Volunteered</td>
              <td><input type='checkbox' className='check-box'></input> Watched sports</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Lost someone special</td>
              <td><input type='checkbox' className='check-box'></input> Reconnected with old friends</td>
            </tr>
            <tr>
              <td><input type='checkbox' className='check-box'></input> Spent quality time with family</td>
              <td><input type='checkbox' className='check-box'></input> Found out cool spots to hang out with friends</td>
            </tr>
          </tbody>
        </table>
        <br />
        <button id='btn' onClick={handleclick}>submit</button>
        <hr />
        <span>Here's your score - {checkCount}</span>
      </div>  
      <hr />
      <Footer />
    </>
  );
}

export default App;
