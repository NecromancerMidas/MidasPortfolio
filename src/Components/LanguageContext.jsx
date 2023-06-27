import React from "react";
import { useState } from "react";
import i18n from "../resources/Localization/i18n";

export const LanguageContext = React.createContext();


export const LanguageProvider = ({children}) => {
    const userLang = navigator.language || navigator.userLanguage || "en";
const [language, setLanguage] = useState(userLang.substring(0,2));

const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setLanguage(lang);
};


return (
<LanguageContext.Provider value={{language, changeLanguage}}>
    {children}
</LanguageContext.Provider>


)
}