import Test from './components/test'
import './App.css';



export default App;

function User1 () {

  return (
      <>

        <div>
          <Name/>

          <h1> am i top?</h1>
            <Button/>
        </div>
      </>
  )
}

function User2 () {
  return (
      <>
        <div>



            <Teacher/>
            <Descriptions/>
            <ButtonUser2/>
            <h1>100101100001</h1>
        </div>
      </>
  )
}


function App() {
  return (
      <>
        <div className="nurik">
          <div className="App">

          <header className="App-user1">

            <User1/>
            <User2/>
            <Description/>

            <Test />
          </header>
        </div>
            </div>
      </>
  );
}

function Title () {
  return (
      <h1>title</h1>
  )
}
function Name () {
    return (
        <h1>Nurik</h1>
    )
}
function Description () {
    return (
        <p>a good boys</p>
    )
}
function  Teacher () {
    return (
        <h1> Dastan</h1>
    )
}
function Descriptions () {
    return (
        <p> norm </p>
    )
}
function  Button () {
    return (
        <button> YES ?</button>
    )
}
function ButtonUser2 () {
    return (

        <button   className= "custom_button">norm</button>

    )
}