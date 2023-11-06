function ProfileModal({ children, maxWidth = 40, open, onClose }) {
    return (
        <>
            {open && (
                <>
                    <div className="fixed inset-0 backdrop-blur-sm z-20" />
                    <div className="fixed inset-0 z-30">
                        <div className="flex justify-center items-center min-h-full" >
                            <div
                                className="rounded-lg w-full bg-second-light shadow-2xl"
                                style={{ maxWidth: `${maxWidth}rem` }}
                            >
                                <div className="">{children}</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default ProfileModal;
