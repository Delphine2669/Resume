import { useState } from 'react'
import './App.css'
import { imports } from './imports'

function App() {

  const {
    HobbiesFr,
    HardSkillsFr,
    EducationFr,
    LanguagesFr,
    Contact,
    SoftSkillsFr,
    TitleFr,
    NavbarFr, 
    WorkExpFr,
    ButtonSwitch,
    EducationEn,
    SoftSkillsEn,
    WorkExpEn,
    HardSkillsEn,
    HobbiesEn,
    LanguagesEn,
    NavbarEn,
    TitleEn,
  } = imports

  const [language, setLanguage] = useState('fr')
  const handleFrenchClick = () => { console.log("French button clicked"); setLanguage('fr') }
  const handleEnglishClick = () => { console.log("English button clicked"); setLanguage('en') }


  const hobbiesListFr = {
    hobbies: "Centre d'intérêts",
    photography: <a href='https://delphinethevenet.wordpress.com/portfolio-2/' target="_blank"rel="noreferrer">Photographe amatrice depuis une dizaine d&apos;année</a>,
    travel: 'Hibernophile - Voyages à la découverte de cultures différentes Européene',
    america: 'Passionnée de culture nord-américaine (histoire, lifestyle)',
    journalism: <a href='https://delphinethevenet.wordpress.com/articles/sparks-newspaper/' target="_blank" rel="noreferrer">Rédaction d&apos;articles dans un journal étudiant</a>,

  }

  const hobbiesListEn = {
    hobbies: "Hobbies",
    photography: <a href='https://delphinethevenet.wordpress.com/portfolio-2/' target="_blank"rel="noreferrer">Enthusiast photographer for about 10 years</a>,
    travel: 'Hibernophile - wanderluster - Travels through Western Europe countries to experience cultural differences',
    america: "Fascinated by North American culture (history and lifestyle)",
    journalism: <a href='https://delphinethevenet.wordpress.com/articles/sparks-newspaper/sparks-newspaper/' target="_blank"rel="noreferrer">Written and published articles in a student-led newspaper</a>,
  }
  return (
    <>
      {language === 'fr' ? (<>
        <NavbarFr />
        <br/>
        <ButtonSwitch french={handleFrenchClick} english={handleEnglishClick} />
        <br/>
        <TitleFr />
        <SoftSkillsFr />
        <HardSkillsFr />
        <EducationFr />
        <WorkExpFr />
        <LanguagesFr />
        <HobbiesFr {...hobbiesListFr} />
        <Contact /> <br/> <br/>
        <ButtonSwitch french={handleFrenchClick} english={handleEnglishClick} /><br/> <br/>
        <NavbarFr />

      </>) : (
        <>
          <NavbarEn />
          <br/>
          <ButtonSwitch english={handleEnglishClick} french={handleFrenchClick} />
          <br/>
          <TitleEn />
          <SoftSkillsEn />
          <HardSkillsEn />
          <EducationEn />
          <WorkExpEn />
          <LanguagesEn />
          <HobbiesEn {...hobbiesListEn} />
          <Contact />    <br/>
          <br/>
          <ButtonSwitch english={handleEnglishClick} french={handleFrenchClick} />
          <br/> <br/>
          <NavbarEn />

        </>
      )}
   </>
)}

export default App
