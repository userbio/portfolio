import classes from './stylesheet/PageTemplate.module.css';



export const PageTemplate = (props) => {
    return (
        <div className={classes.contentBox}>
            <div className={classes.title}>
                {props.pageTitle}
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
};