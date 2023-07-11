import { PageTemplate } from './PageTemplate.jsx';
import classes from './stylesheet/contact.module.css';



export const Contact = () => {
    return (
        <PageTemplate pageTitle="CONTACT">
            <div className={classes.text}>下記のメールアドレスにご連絡頂ければ幸いです。</div>
            <div className={classes.contactList}>
                <span className={classes.contactItem}>2zubr6frzp@gmail.com</span>
                <a className={classes.contactItem} href="https://github.com/userbio" target="_blank" rel="noreferrer noopener">Github</a>
            </div>
        </PageTemplate>
    )
};
