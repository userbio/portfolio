import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-scroll';

import { PageTemplate } from "./PageTemplate.jsx";
import { WorksList } from './WorksListTemplate.jsx';
import ipa from './images/IPA.jpg';
import cmd from './images/cmd_img.png';
import lineMain from './images/lineMain.png';
import portMain from './images/portMain.png';
import classes from './stylesheet/works.module.css';
import { Default } from './workinfo.jsx';



export const Works = () => {
    return (
        <PageTemplate pageTitle="WORKS">
            <Link to='workContentBox' smooth={true}>
            <nav className={classes.worksList}>
                <NavLink to="line" className={classes.worksItem}>
                    <WorksList
                        image={lineMain}
                        name={<>LINEAPIを用いたアルバイトのシフト < br /> 集計サービス</>}
                        info={<>Python、Flask、LINEAPI</>}
                    />
                </NavLink>
                <NavLink to="portfolio" className={classes.worksItem}>
                    <WorksList
                        image={portMain}
                        name={<>ポートフォリオサイト</>}
                        info={<>JavaScript、React、CSS<br />SPA,Responsive</>}
                    />
                </NavLink>
                <NavLink to="IPA" className={classes.worksItem}>
                    <WorksList
                        image={ipa}
                        name={<>IPA 応用情報技術者試験　合格</>}
                        info={<>基礎知識、マネジメント</>}
                    />
                </NavLink>
                <NavLink to="hardening" className={classes.worksItem}>
                    <WorksList
                        image={cmd}
                        name={<>Micro Hardening for Youth 2021 参加</>}
                        info={<>セキュリティ、チーム活動</>}
                    />
                </NavLink>
            </nav>
            </Link>
            <Default />
            <Outlet />
        </PageTemplate>
    )
};
