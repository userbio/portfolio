import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import classes from './stylesheet/WorkInfoTemplate.module.css';



export const WorksInfo = (props) => {
    const { url = "", title, image1, image2, image3, text, link = "", githubLink = "", githubIcon= "" } = props;
    const bigImage1 = () => <img src={image1} alt="" className={classes.bigVisContent} />
    const bigImage2 = () => <img src={image2} alt="" className={classes.bigVisContent} />
    const bigImage3 = () => <img src={image3} alt="" className={classes.bigVisContent} />

    return (
        <div className={classes.workContentBox}>
            {console.log()}
            {title &&
                <div className={classes.workTitle}>{title}</div>
            }
            <div className={`${classes.workContent} ${classes.flexbox}`}>
                <BrowserRouter>
                    {image1 &&
                        <nav className={classes.mainVis}>
                                <NavLink exact to={'/portfolio/works/' + url }>
                                    <img src={image1} alt="" className={classes.mainVisContent} />
                                </NavLink>
                            {image2 &&
                                <NavLink exact to={'/portfolio/works/' + url +'vis2'}>
                                    <img src={image2} alt="" className={classes.mainVisContent} />
                                </NavLink>
                            }
                            {image3 &&
                                <NavLink exact to={'/portfolio/works/' + url +'vis3'}>
                                    <img src={image3} alt="" className={classes.mainVisContent} />
                                </NavLink>
                            }
                        </nav>
                    }
                    <div className={classes.workText}>{ text }</div>
                    <div className={`${classes.link} ${classes.flexbox}`}>
                        {link}
                        <a href={githubLink} target="_blank" rel="noopener noreferrer"> <img src={githubIcon} alt="" className={classes.linkImage} /></a>
                    </div>
                    {image1 &&
                        <Route exact path={'/portfolio/works/' + url} component={bigImage1} />
                    }
                        <Route exact path={'/portfolio/works/' + url +'vis2'} component={bigImage2} />
                        <Route exact path={'/portfolio/works/' + url +'vis3'} component={bigImage3} />
                </BrowserRouter>
            </div>
        </div>
    )
};
