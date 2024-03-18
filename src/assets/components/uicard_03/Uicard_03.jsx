import AvatarPic from '../../../../public/avatar.svg'

import './uicard_03.css';

function Uicard_03(){
    return(
<div className="ui_wrapper_03">
    <div className="upper_col">

    </div>
    <div className="lower_col">
        <span className='lh_txt'>How to make the perfect <br />
        morning Coffee, according to the
        science
        </span>
        <div className="lower_col_ui">
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
    )
}

export default  Uicard_03