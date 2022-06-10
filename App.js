import Radium from 'radium';
import React from 'react';

function App() {
   const style = {
      ':hover': {
         backgroundColor: '#000',
         color: '#fff',
      },
   };
   return (
      <div>
      <h3>TutorialsPoint</h3>
      <button style={style}>Hover Me</button>
      </div>
   );
}
export default Radium(App);
