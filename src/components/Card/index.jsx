import React from "react";
import cn from "classnames";
import style from './style.module.scss'

const Card = (props) => {
    return ( 
        <div className={cn(style.Card)}>
            <img src="" alt="" />
            <div className={cn(style.deskCard)}>
                <p>{props.title}</p>
                <p>2018</p>
            </div>
        </div>
     );
}
 
export default Card;