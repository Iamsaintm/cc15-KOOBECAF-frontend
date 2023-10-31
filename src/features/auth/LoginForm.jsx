import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import { useState } from "react";
import { loginUser } from "../../stores/slices/authSlice";

function LoginForm() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        emailOrMobile: "",
        password: "",
    });

    const onChangeInput = (e) => setInput({ ...input, [e.target.name]: e.target.value });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(loginUser(input));
    };

    return (
        <>
            <form onSubmit={handleSubmitForm} className="flex flex-col">
                <div className="w-72">
                    <InputForm
                        name={"emailOrMobile"}
                        placeholder={"Email address or phone number"}
                        value={input.emailOrMobile}
                        onChange={onChangeInput}
                    />
                    <InputForm
                        name={"password"}
                        type="password"
                        placeholder={"Password"}
                        value={input.password}
                        onChange={onChangeInput}
                    />
                </div>
                <div className="flex self-center w-48 pt-4">
                    <Button type={"submit"} text={"Log in"} />
                </div>
            </form>
        </>
    );
}

export default LoginForm;
