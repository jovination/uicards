import Uicard_01 from "./assets/components/uicard_01/Uicard_01"
import Uicard_02 from "./assets/components/uicard_02/Uicard_02"
import Uicard_03 from "./assets/components/uicard_03/Uicard_03"
import Uicard_04 from './assets/components/uicard_04/Uicard_04';

function App() {

  return (
   <div className='wrapper_container'>
    <div className="upper_wrapper">
   <Uicard_01 />
   <Uicard_02 />
   </div>
   <div className="lower_wrapper">
  <div className="left_column">
  <Uicard_03 />
  </div>
  <div className="right_column">
    <div className="upper_row">
      <Uicard_04 />
    </div>
    <div className="lower_row"></div>
  </div>
   </div>
   </div>
  )
}

export default App
