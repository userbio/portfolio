import classes from './stylesheet/WorksListTemplate.module.css'

export const WorksList = (props) => {
    const { image, name, info } = props;
    return (
        <>
        {image &&
            <img src={image} alt="not found" className={classes.workImage} />
        }
            <div className={classes.worksName}>{name}</div>
            <div className={classes.worksInfo}>{ info }</div>
        </>
    )
};