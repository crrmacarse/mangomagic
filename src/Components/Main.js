import React from 'react';

import mangocup from '../Library/img/mango-magic-cup.png';

class Main extends React.Component{
  render(){
    return(

      <div id = "main-section" className = "row">
        <div className = "col-12 my-4">
          <p className = "main-title text-center">Mango Magic</p>
          <p className = "main-quote text-center">Are you ready to taste the Magic?</p>
          <img src = {mangocup} className = "img-fluid d-block mx-auto"/>
          <p className = "small font-weight-bold text-center mt-5">U N V E I L I N G  &nbsp; S O O N </p>
          <div className = "text-center">
            <a href = "https://www.facebook.com/mangomagicpinas/" target="_blank" className = "h3 mr-2"><i class="fab fa-facebook-square"></i></a>
            <a href = "https://m.me/mangomagicpinas" target="_blank" className = "h3"><i class="fab fa-facebook-messenger"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
