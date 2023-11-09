import blank from "../assets/Images/blank.png";

export default function Avatar({ className, src }) {
    const defaultclass = "rounded-full aspect-square";
    const classes = defaultclass + " " + className;
    return <img src={src ? src : blank} alt="user" className={classes}></img>;
}
