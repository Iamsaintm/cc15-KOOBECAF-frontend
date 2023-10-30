import { useState } from "react"
import Button from "../../components/Button"
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

function RegisterContainer() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div>
           <Button onClick={() => setIsOpen(true)} text={"Create new account"} /> 
        </div>
        <Modal title={"Sign up"} open={isOpen} onClose={() => setIsOpen(false)}>
            <RegisterForm />
        </Modal>
    </>
  )
}

export default RegisterContainer