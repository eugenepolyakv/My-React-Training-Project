import classes from './Post.module.css';

const MyPosts = (props) => {
    return <div className={classes.item}>{props.message}</div>;
};

export default MyPosts;
