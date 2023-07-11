import { NavLink, Route, Routes } from 'react-router-dom';

import { Contact } from './contact.jsx';
import faceIcon from './images/face.svg';
import { Profile } from './profile.jsx';
import { SkillSet } from './skillset.jsx';
import classes from './stylesheet/App.module.css';
import { Hardening, IPA, Line, Portfolio } from './workinfo.jsx';
import { Works } from './works.jsx';



const Top = () => (
  <div className={`${classes.topContainer} ${classes.flexbox}`}>
    <div className={`${classes.topTitleBackground} ${classes.flexbox}`}>
      <div className={classes.topTitle}>Matuda Keitarou's<br />PORTFOLIO</div>
    </div>
  </div>
)

const About = () => (
  <div className={`${classes.aboutContainer} ${classes.flexbox}`}>
    <div className={classes.aboutTitle}>
      <img src={faceIcon} alt="" className={classes.face} /> About this site
    </div>
    <div className={classes.aboutContent}>
      これはIT技術について関心をもって学習した履歴を記したポートフォリオです。<br />
      様々なことに挑戦した中でIT、Tech関係の情報をまとめました。
      すべて独学で学んでおり、<br />物事を形にできる力を意識して学習してきました。
      IT関連の方はもちろん、専門ではない方もどうぞごゆっくりご覧ください。
    </div>
  </div>
)

const Navbar = () => (
  <div className={classes.navContainer}>
      <nav className={`${classes.navbarBackground} ${classes.flexbox}`}>
        <NavLink to="/" className={(navData) => (navData.isActive ? classes.active : classes.headerItem)}>Profile</NavLink>
        <NavLink to="/works" className={(navData) => (navData.isActive ? classes.active : classes.headerItem)}>Works</NavLink>
        <NavLink to="/skillSet" className={(navData) => (navData.isActive ? classes.active : classes.headerItem)}>Skill set</NavLink>
        <NavLink to="/contact" className={(navData) => (navData.isActive ? classes.active : classes.headerItem)}>Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="works" element={<Works />}>
          <Route path="line" element={<Line />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="IPA" element={<IPA />} />
          <Route path="hardening" element={<Hardening />} />
        </Route>
        <Route path="skillSet" element={<SkillSet />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
  </div>
)

const Footer = () => (
  <div className={`${classes.fotterContainer} ${classes.flexbox}`}>
    ©Matuda Keitarou
  </div>
)

const Sidebar = () => (
  <div></div>
)

const App = () => {
  return (
    <div className={classes.mainPage}>
      <Top />
      <About />
      <Navbar />
      <div className={classes.leftbarContainer}>
        <Sidebar />
      </div>
      <div className={classes.rightbarContainer}>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App;
