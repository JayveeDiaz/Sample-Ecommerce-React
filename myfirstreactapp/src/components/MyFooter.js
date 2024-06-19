import React from 'react';

const links = {
    github:'https://github.com/JayveeDiaz',
    facebook:'fb.comchuchu link'// edit dis
};



function MyFooter(){

return(
<div >

<footer className="fixed inset-x-0 bottom-0 bg-gray-200 p-4 text-center">
  Created by <a className="underline" href={links.github}>JayveeDiaz</a>
</footer>

</div>

);

}

export default MyFooter;