
import React from 'react';
import winestore from '../image/wineStore.jpg'

import './SectionText.css'

const SectionText = () => {
  return (
    <div>
      <img src={winestore}
       alt=""  width='100%'/>
       <div  className='sectionText'>FINEWINE STORE - YOUR ONLINE WINE SHOP FOR OVER 2,000 FINE WINES</div>
    <div className='sectionTextBlock'>
      <div className='sectionTextOne' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur culpa in. Atque, omnis expedita! Commodi dicta aspernatur tempore libero ex expedita beatae cupiditate voluptate deserunt, sed suscipit, quibusdam voluptatibus!
      asperiores em corporis accusantium? 
</div>
      <div className='sectionTextTwo' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut adipisci velit nisi. Ipsa ipsam quas fugit et perspiciatis necessitatibus.Incidunt dolorum laborum maxime provident magni iste esse architecto mollitia nam est necessitatibus debitis aperiam asperiores, fuga molestiae a magnam recusandae!</div>
    </div>
   
    </div>
  );
};

export default SectionText;