import profileDefault from "../assets/Images/profile-default.png";

export default function Avatar({ className, src }) {
    const defaultclass = "rounded-full aspect-square";
    const classes = defaultclass + " " + className;
    return <img src={src ? src : profileDefault} alt="user" className={classes}></img>;
}
