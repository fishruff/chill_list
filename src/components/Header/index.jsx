import React from 'react';
import cn from 'classnames';
import style from "./style.module.scss";


const Header = () => {
    return ( 
        <div className={cn(style.Header)}>
            <div className={cn(style.Logo)}>
             <h2>Chill List</h2>
            </div>
            <nav>
                <p>Anime</p>
                <p>Movie</p>
                <p>Video game</p>
                <p>Serial</p>
                <p>Book</p>
            </nav>
        </div>
     );
}
 



export default Header;