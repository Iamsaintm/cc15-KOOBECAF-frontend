import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/RegisterContainer";

function LoginPage() {
    return (
        <>
            <div className="flex justify-center gap-10 items-center h-full bg-main-light">
                <div className="flex flex-col items-center w-full">
                    <div className="text-center w-1/3">
                        <div className="text-6xl font-fontHeader pb-8 ">KOOBECAF</div>
                        <div className="text-2xl">LOG IN TO KOOBECAF</div>
                        <LoginForm />
                    </div>
                    <div className="border-b mt-3 my-3 border-dashed w-72 border-main-dark" />
                    <div>
                        <RegisterContainer />
                    </div>
                </div>
                <div className="w-2/3">
                    <LoginContent />
                </div>
            </div>
        </>
    );
}

export default LoginPage;
