import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/RegisterContainer";

function LoginPage() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col items-center w-full">
                    <div className="text-center w-1/3">
                        <div className="text-6xl font-fontHeader pb-8 mx-auto h-10 w-auto ">KOOBECAF</div>
                        <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            LOG IN TO KOOBECAF
                        </div>
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
