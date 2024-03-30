import './uicard_02.css';
import Uicard_01 from './../uicard_01/Uicard_01';
import  Global_svg from  '../../../../public/global.svg';
import  Business_svg from  '../../../../public/business.svg';
import  Entertainment_svg from  '../../../../public/entertainment.svg';
import  Sport_svg from  '../../../../public/sport.svg';
import Health_svg from '../../../../public/health.svg';

function Uicard_02(){
    return(
        <div className="ui_wrapper_02">
            <div className="btns_wrap">
                <div className="btn_seg">
                   <div className="btn_ui">
                     <img className="global_icon" src={Global_svg} alt="global" />
                   </div>
                   <span className='btnF'>Global</span>
                </div>

                <div className="btn_seg">
                   <div className="btn_ui">
                     <img className="business_icon" src={Business_svg} alt="business" />
                   </div>
                   <span className='btnF'>Business</span>
                </div>
                <div className="btn_seg">
                   <div className="btn_ui">
                     <img className="entertainment_icon" src={Entertainment_svg} alt="entertainment" />
                   </div>
                   <span className='btnF'>Entertainment</span>
                </div>
                <div className="btn_seg" id='active' >
                   <div className="btn_ui">
                     <img className="sport_icon" src={Sport_svg} alt="sport" />
                   </div>
                   <span className='btnF'>Sport</span>
                </div>
                <div className="btn_seg">
                   <div className="btn_ui">
                     <img className="health_icon" src={Health_svg} alt="health" />
                   </div>
                   <span className='btnF'>Health</span>
                </div>
            </div>
        </div>
    )
}
export default Uicard_02
