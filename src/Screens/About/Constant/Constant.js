import { BGUI, BGTOOLS, BGDB } from '../../../Assets/images';

const UI_TEXT =
	'I mainly work as a Front End Developer and highly interested in UI/UX design. In my opinion, knowledge on UI/UX design is essential as a front end engineer. Basic UI design will improve the final looks of a screen/page in a project that can make the users feel satisfied and make them use the application longer. While UX will be the key factor for users in-app experience, the difference sense of an application is decided by many considerations from screen sizes, color, font weight, font decoration and so on. I learn UI/UX by myself from several sources to improve my sense in a design perspective and see the availability that I can use. Personally, I like Bootstrap, Material-UI and Ant Design for the guideline of my current project, but again I’m open to discover more options that could be better.';

const TOOLS_TEXT =
	'These days, developing an application is not difficult anymore. We are provided by free and open-source tools that can help us to simplify/assist us to develop a project. Learning those frameworks and tools is quite challenging since the growth of this industry is considered fast. However, learning frameworks and tools is necessary at this point, because most of them are actually better than coding everything from scratch. One framework that I currently use is Node.js because I believe that state management in React or Native is better in performance compared to basic HTML/CSS/JS for an interactive web application as long as we know how to do it properly. Tools that I am learning to this very day are AWS because of their huge library that can provide developers for almost everything we need.';

const DB_TEXT =
	'I see Database as a blueprint and basic structure of an application. Designing a good database will improve the structural aspect of a project. I believe that a large project requires a good database just like a building that needs a good structure. A good UI/UX on a project is shown as an outside view of a building, while the database is shown as the material that built the building itself. I learnt SQL back in school and know I am more familiar with NoSQL, while the database-middleware combination that I personally like is GraphQL with Apollo Client, due to their mobility and accessibility.';

const UI_TAGS = [ 'Bootstrap', 'Material UI', 'Ant Design', 'Figma', 'Canva' ];

const TOOLS_TAGS = [ 'React', 'React Native', 'NodeJS', 'AWS', 'Heroku', 'ASP.NET' ];

const DB_TAGS = [ 'SQL', 'NoSQL', 'MongoDB', 'GraphQL', 'Apollo Client', 'RESTful API', 'Express' ];
export const CONTENT = [
	{ title: 'UI/UX', bg: BGUI, text: UI_TEXT, tags: UI_TAGS },
	{ title: 'TOOLS', bg: BGTOOLS, text: TOOLS_TEXT, tags: TOOLS_TAGS },
	{ title: 'DATABASE', bg: BGDB, text: DB_TEXT, tags: DB_TAGS }
];
