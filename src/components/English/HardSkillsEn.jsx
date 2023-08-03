import LocalEatDemo from "../LocalEatDemo";
import EcoSwitchDemo from "../EcoSwitchDemo";
function HardSkillsEn() {
  return (
    <div id="HardSkills">
      <span className="overline">
        <h2 className="sectionTitle">HardSkills</h2>
      </span>

      <ul className="HSUl">
        <li className="skill HCJ">HTML & CSS, Javascript</li>
        <div className="dDSection">
          <li>
            1st Project - Creation of an amusing quiz about the web dev crew.
            With goals such as showing questions and linked answer
            possibilities, counting points and respecting a deadline. 3 weeks
            total.
          </li>
          <br />

          <li>
            <a
              href="https://fabienchbd.github.io/ProjectQuizz/"
              target="_blank"
              rel="noreferrer"
              className="pQL"
            >
              Project Quiz
            </a>
          </li>
          <br />
          <li>
            2nd Project - Creation of a 3-in-1 site, grouping important
            informations especially for travel. Weather forecast, time
            difference and exchange rate. France (Paris) and Euro based. 4 weeks
            total. Scrum methodology (AGILE)
          </li>
          <br />
          <li>
            <a
              href="https://delphine2669.github.io/MeteoSauvage/"
              target="blank"
              rel="noreferrer"
              className="pM"
            >
              Project Weather 3-in-1
            </a>
          </li>
          <br />
          <li>
            Hackathon - with the partnership of Emmaus, creation of site to help
            them calculating price of second-hand devices. 3 days total.
          </li>
          <br />
          <li>
            <a
              href="https://delphine2669.github.io/hackathon-emmaus/"
              target="blank"
              rel="noreferrer"
              className="hE"
            >
              Project tech-Refurb
            </a>
          </li>
        </div>
        <br />
        <li className="skill">Swift / SwiftUI</li>
        <br />
        <li>
          1st Project - Creation of an iphone app aiming to help out citizen
          towards energy transition. Conceptualizing, modelling, use of marvel
          as wireframe and prototyping. The goal was to achieve an multi-screen
          and navigation interfaces, HIG standards. 20 days total, Certification
          by Apple Foundation Program.{" "}
        </li>{" "}
        <br />
        <div className="eSSection">
          <li className="eSItemIcon">
            <img
              src="/EcoSwitchIcon.png"
              alt="icone app LocalEat"
              className="vidIcons"
            ></img>
          </li>
          <li className="eSItemVid">
            <EcoSwitchDemo width="200" height="600" className="EcoSwitchVid" />
          </li>
        </div>
        <br />
        <li>
          {" "}
          2nd Project - Creation of an iphone app, attempting to help organic
          and local farmers to meet customers and have a better income. But also
          to help consumers find better products near them and manage their
          budget by cutting intermediairies.Conceptualizing, modelling,
          wireframe using Figma and prototyping. Use of Git/GitHub for
          versionning, creation of database and use of API to fetch
          data.Multi-screen and Navigation interfaces,HIG standards MVVM. 20
          days total, Certification by Apple Foundation Extended Program.{" "}
        </li>
        <div className="lESection">
          <li className="lEItemIcon">
            <img
              src="/LocalEatIcon.png"
              alt="icone app LocalEat"
              className="vidIcons"
            ></img>
          </li>
          <li className="lEItemVid">
            <LocalEatDemo width="200" height="600" className="localEVid" />
          </li>
        </div>
        <br />
        <li>Adobe CS</li>
        <br />
        <li>Git / GitHub</li>
        <br />
        <li>Javascript</li>
        <br />
        <li>Office / iWork</li>
        <br />
      </ul>
    </div>
  );
}

export default HardSkillsEn;
