import './uicard_02.css';
import Uicard_01 from './../uicard_01/Uicard_01';

function Uicard_02(){
    return(
        <div className="ui_wrapper_02">
            <div className="btns_wrap">
                <div className="btn_seg">
                   <div className="btn_ui"></div>
                   <span className='btnF'>Global</span>
                </div>

                <div className="btn_seg">
                   <div className="btn_ui"></div>
                   <span className='btnF'>Business</span>
                </div>
                <div className="btn_seg">
                   <div className="btn_ui"></div>
                   <span className='btnF'>Entertainment</span>
                </div>
                <div className="btn_seg">
                   <div className="btn_ui"></div>
                   <span className='btnF'>Sport</span>
                </div>
                <div className="btn_seg">
                   <div className="btn_ui"></div>
                   <span className='btnF'>Health</span>
                </div>
            </div>
        </div>
    )
}
export default Uicard_02
