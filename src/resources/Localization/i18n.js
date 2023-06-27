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
        mainContent: `Greetings, and welcome to my portfolio!
        I am Midas Petrych, and as the name implies, I strive to bring a golden touch to every project I undertake.
        A great passion for coding and a deep lust for learning.`,
      },

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