import LocalEatDemo from "../LocalEatDemo"
import EcoSwitchDemo from "../EcoSwitchDemo";
function HardSkillsFr() {
    return (

        <div id="HardSkills">
            <span className="overline">
                <h2 className="sectionTitle">HardSkills</h2></span>

            <ul className="HSUl">
                <li className="skill HCJ">HTML & CSS, Javascript</li> <br />
                <div className="dDSection">
                    <li>Projet 1: Realisation d&apos;un quiz décalé sur la promo.Affichage des questions, réponses, et comptage des points.
                    </li> <br />
                    <li> <a href="https://fabienchbd.github.io/ProjectQuizz/" target="_blank" rel="noreferrer" className="pQL"> Projet Quiz</a> </li></div> <br />
                <li className="skill">Swift / SwiftUI</li> <br />
                <li className="projet1"> Projet 1: Realisation d&apos;une application iphone, visant a aider les particuliers dans leur transition energetique</li>
                <div className="eSSection">
                <li className="eSItemIcon"><img src="/EcoSwitchIcon.png" alt="icone app LocalEat" className="vidIcons"></img></li>
                    <li className="eSItemVid">
                        <EcoSwitchDemo width="200" height="600" className="EcoSwitchVid" />

                        </li></div><br/>
                <li className="projet2">Projet 2: Realisation d&apos;une application iphone, visant a aider les producteurs bio et locaux a rencontrer leurs clientele et mieux se remunerer. Aider les clients a trouver les producteurs pres de chez eux.</li>
                <div className="lESection">
                    <li className="lEItemIcon"><img src="/LocalEatIcon.png" alt="icone app LocalEat" className="vidIcons"></img></li>
                    <li className="lEItemVid">

                        <LocalEatDemo width="200" height="600" className="localEVid" />
                    </li></div> <br />
                <li>Adobe CS</li> <br />
                <li>Git / GitHub</li> <br />
                <li>Javascript</li> <br />
                <li>Office / iWork</li>
            </ul>

        </div >
    );
}

export default HardSkillsFr;
