import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import javascript from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import mongoDB from '../assets/skills/mongoDB.svg';
import nodejs from '../assets/skills/nodejs.svg';
import wordpress from '../assets/skills/wordpress.svg';


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'bootstrap':
            return bootstrap;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'nodejs':
            return nodejs;
        case 'mongodb':
            return mongoDB;
        case 'wordpress':
            return wordpress;
        default:
            break;
    }
}