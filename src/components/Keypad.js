// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

   handlekeyUp = (e) => {
     console.log("Entering password...")
   }
   render() {
       return(
           <div>
           <input type="password" onKeyUp={this.handlekeyUp}/>
           </div>
       )
   }
}

export default Keypad