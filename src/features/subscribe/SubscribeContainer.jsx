import { useState } from "react";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import SubscribeForm from "./SubscribeForm";

function SubscribeContainer() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div className="flex justify-center pb-4">
            <div className="flex justify-center w-1/2" onClick={() => setIsOpenModal(true)}>
                <Button text={"Subscribe"} />
            </div>
            <Modal title={"Payment"} open={isOpenModal} onClose={() => setIsOpenModal(false)}>
                <SubscribeForm />
            </Modal>
        </div>
    );
}

export default SubscribeContainer;
