import LoginContent from "../features/auth/LoginContent"
import LoginForm from "../features/auth/LoginForm"
import RegisterContainer from "../features/auth/RegisterContainer"

function LoginPage() {
  return (
    <>
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center">
                <div>
                    <LoginForm />
                </div> 
                <div>
                    <RegisterContainer />
                </div>
            </div>
            <div className="min-w-[400px] aspect-square bg-green-200">
                <LoginContent />
            </div>
        </div>
    </>
  )
}

export default LoginPage