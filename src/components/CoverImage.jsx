import cover from "../assets/Images/cover.png";

export default function CoverImage({ className, src }) {
    const defaultclass = "bg-cover w-full h-[200px]";
    const classes = defaultclass + " " + className;

    return <img src={src ? src : cover} alt="coverImage" className={classes}></img>;
}
