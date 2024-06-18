import React from 'react';

const links = {
    github:'https://github.com/JayveeDiaz'
};

function MyFooter(){

return(

<footer>
Created by <a href={links.github}>JayveeDiaz</a>

</footer>
);

}

export default MyFooter;