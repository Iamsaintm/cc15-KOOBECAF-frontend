import userImage from "../assets/Images/user.jpg";

export default function Avatar({ className = "h-10", src }) {
    const defaultclass = "rounded-full aspect-square";
    const classes = defaultclass + " " + className;

    return <img src={src ? src : userImage} alt="user" className={classes}></img>;
}
