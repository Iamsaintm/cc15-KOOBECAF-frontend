export default function Avatar({ className = "h-10", src }) {
    const defaultclass = "rounded-full aspect-square";
    const classes = defaultclass + " " + className;

    return <img src={src || defaultImage} alt="user" className={classes}></img>;
}
