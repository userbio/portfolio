import { PageTemplate } from './PageTemplate.jsx';
import { SkillsetTEmplate } from './SkillsetTemplate.jsx';
import classes from './stylesheet/skillset.module.css';

import git from './images/Git.png';
import github from './images/GitHub.png';
import Postgre from './images/PostgreSQL.png';
import react from './images/React.png';
import flask from './images/flask.png';
import python from './images/python.png';



export const SkillSet = () => {
    return (
        <PageTemplate pageTitle="SKILL">
            <div className={classes.skillList}>
                <SkillsetTEmplate
                    title="Python"
                    image={<>
                        <img src={python} alt="" className={classes.skillImage} />
                        <img src={flask} alt="" className={classes.skillImage} />
                    </>}
                >
                    FlaskによるWebアプリケーション制作やスクレイビングなどで用いています。最近では機械学習の際にも利用している、最も使用している言語です。
                </SkillsetTEmplate>
                <SkillsetTEmplate
                    title="JavaScript"
                    image={<>
                    <div className={classes.flexbox}>
                        <div className={classes.imageText}>JavaScript</div>
                        <div className={classes.imageText}>Canvas</div>
                        <img src={react} alt="" className={classes.skillImage} />
                    </div>
                    </>}
                >
                    Reactによるフロントエンド開発やSPAの開発や、Canvasでのアニメーション制作などに利用しています。Web技術に必須の利用頻度の高い言語です。
                </SkillsetTEmplate>
                <SkillsetTEmplate
                    title="MySQL PostgreSQL"
                    image={<>
                        <div className={classes.flexbox}>
                            <div className={classes.imageText}>MySQL</div>
                            <img src={Postgre} alt="" className={classes.skillImage} />
                        </div>
                    </>}
                >
                    サーバーサイド開発に必要なデータベースに用いています。Pythonからのアクセスが多く、機械学習にも必須のスキルです。
                </SkillsetTEmplate>
                <SkillsetTEmplate
                    title="Others"
                    image={<>
                        <div className={classes.flexbox}>
                            <div className={classes.imageText}>Apache</div>
                            <div className={classes.imageText}>Linux</div>
                            <img src={github} alt="" className={classes.skillImage} />
                            <img src={git} alt="" className={classes.skillImage} />
                        </div>
                    </>}
                >
                    Git/Githubは普段の開発の中でバージョン管理、ソースコード共有に利用しています。<br />Linux、Aparchはサーバーやセキュリティについての学習である程度の操作が出来ます。<br />C言語については簡単なプログラムやファイル操作などの知識があります。
                </SkillsetTEmplate>
                <div className={classes.flexbox}>
                    <div className={classes.text}>Attribution</div>
                    <div className={classes.text}>
                        {<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>} : {<a href="https://www.python.org/community/logos/" target="_blank" rel="noopener noreferrer">logo</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://palletsprojects.com/p/flask/" target="_blank" rel="noopener noreferrer">Flask</a>} : {<a href="https://github.com/pallets/flask/blob/main/artwork/LICENSE.rst" target="_blank" rel="noopener noreferrer">logo</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://ja.reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>} : {<a href="https://github.com/facebook/react/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">logo</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://www.mysql.com/jp/" target="_blank" rel="noopener noreferrer">MySQL</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a>} : {<a href="https://www.postgresql.org/about/policies/trademarks/" target="_blank" rel="noopener noreferrer">logo</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">Apache</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://www.kernel.org/" target="_blank" rel="noopener noreferrer">Linux</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>} : {<a href="https://github.com/logos" target="_blank" rel="noopener noreferrer">logo</a>}
                    </div>
                    <div className={classes.text}>
                        {<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Github</a>} : {<a href="https://git-scm.com/downloads/logos" target="_blank" rel="noopener noreferrer">logo</a>} {<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>}
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
};
