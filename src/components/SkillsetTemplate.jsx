import classes from './stylesheet/SkillsetTEmplate.module.css'



export const SkillsetTEmplate = (props) => {
    const { title, children, image } = props;

    return (
        <div className={classes.skillItem}>
            <div className={classes.skillName}>{ title }</div>
            <div className={classes.skillText}>
                {children}
            </div>
            { image }
        </div>
    )
};
