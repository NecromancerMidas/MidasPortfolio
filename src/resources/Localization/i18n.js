import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
      Header: {
        title: "Midas Petrych"
      },
      Nav: {
        home:'Home',
        introduction: 'Introduction',
        aboutMe: 'About Me',
        portfolio: 'Portfolio',
      },
      Introduction:{
        title:'Welcome to my portfolio',
        mainContentIntro: 'Greetings, and welcome to my portfolio! My name is Midas Petrych. True to my name, I endeavor to bring a golden touch to every project I embark on. I harbor a deep passion for coding and an insatiable desire for continuous learning.',
        mainContentMiddle: 'Despite being relatively new to the realm of coding, my adaptability and aptitude for rapid learning lay the foundation for what I believe is a promising future in the IT industry.',
        mainContentEnd:'I invite you to discover more about me, and my skill sets. I have taken the liberty to divide my portfolio into sections for your convenience, so you may discover the things about me that interest you the most.',
      },
      AboutMe:{
        title:'About Me',
        mainContentIntro:`Born in the Netherlands, I moved to Norway at a young age.
  This would be a learning experience for me, adapting to a new culture and language at such a young age, with no prior knowledge of either, has led me to become very good at adapting to circumstances, self-education and unrelenting resilience. 
 I have come to rely on these skills throughout my life, but they have come especially useful in my quest to become an adept coder, where I find these qualities are very useful.
 `,
 mainContentGame1:`Gaming is a notable hobby of mine that, like so many others, has led me down a path of interest in technology and programming. Among the genres I enjoy, two stand out for their applications to my personal life: strategy and fighting games.
 `,
 mainContentGame2:`These games teach planning and execution. They have a win condition that you strive to reach to best your opponents. To achieve these conditions, you must acquire and refine specific skills. Both genres also require an in-depth understanding of the game, knowing the ins and outs, the strengths and weaknesses of characters or units.
 This is to say, both gaming and programming demand a significant investment of effort in learning and mastery. You must procure the knowledge you need before you can execute.
 `,
 mainContentGame3:`Also, understanding your opponent or problem, thinking like they do, and trying to be one step ahead is vital. 
 And if they happen to outsmart you, you must adapt and attempt to turn the tables. 
 This adaptability and an attitude to never give up are especially relevant to programming.
 `,
 mainContentHistory:`Finally, I would like to mention my keen interest in history.
 Is it a result of my love for strategy games, or perhaps the other way around? Regardless, history has taught me many things, notably the unstable and fickle nature of life and society. 
 I've watched narratives of great empires crumbling to dust, changing the status quo and forcing people and nations to adapt.
 `,
 mainContentMarcus:`This historical understanding has led me down the path of stoicism, inspired by great figures like Marcus Aurelius, a personal idol of mine.
  I strive to implement stoicism in my own life, focusing on honesty, acceptance of circumstance and honing my energies on the things I can change, instead of lamenting the things I cannot.
 `,
 mainContentStoicism:`Though stoicism is applicable in all aspects of life, I feel its teachings are particularly effective in programming. 
 Facing situations where things don't go as planned is common. 
 Being able to focus on solutions without getting bogged down by uncontrollable factors is a considerable advantage.
 `
      }
      // `Greetings, and welcome to my portfolio!
      // I am Midas Petrych, and as the name implies, I strive to bring a golden touch to every project I undertake.
      // I have a great passion for coding and a deep desire for learning.`
      //`Greetings, and welcome to my portfolio!. 
       // I am Midas Petrych, named after the mythical King Midas, and just like him, I strive to bring a golden touch to every project I undertake. `,
      // other components...
    },
    no: {
      Header: {
        title: "Midas Petrych"
      },
      Nav: {
        home:'Hjem',
        introduction: 'Introduksjon',
        aboutMe: 'Om meg',
        portfolio: 'Portfølje',
      },
      Introduction:{
        title:'Welcome to my portfolio',
        mainContent: 'I am the gobgogabgalab and I love books.',
      },
      // other components...
    },
    nl: {
      Header: {
        title: "Midas Petrych"
      },
      Nav: {
        home: 'Home',
        introduction: 'Introductie',
        aboutMe: 'Over mij',
        portfolio:'Portefeuille'
      },
      Introduction:{
        title:'Welcome to my portfolio',
        mainContent: 'I am the gobgogabgalab and I love books.',
      },
      // other components...
    },
    // other languages...
  };

i18n.use(initReactI18next).init({
    resources,
    lng:"en",
    interpolation: {
        escapeValue:false
    }
});
export default i18n;