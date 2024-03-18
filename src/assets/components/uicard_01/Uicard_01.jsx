import './uicard_01.css';
import AvatarPic from '../../../../public/avatar.svg'
function Uicard_01(){
    return(
        <div className='ui_wrapper_01'>
         <div className="left_col"></div>
         <div className="right_col">
            <div className="wrap_right">
                <span>Green plants are going to <br />
                Extinct about 500 times faster <br />
                than they should, Study finds
                </span>
                <p>
                    if youre the of the person who just can not keep <br />
                    a plant alive, you are not alone according to a new <br />
                    study published June 10 in the Journal Nature
                </p>
                <div className="lower_ui">
                    <div className="avatar">
                        <img className='avatar-pic' src={AvatarPic} alt="avatar" />
                    </div>
                    <div className="aside_ui">
                        <span>Alexia Parker</span>
                        <p>Jan 20, 2024</p>
                    </div>
                </div>
            </div>
         </div>
        </div>
    );
}

export default Uicard_01;