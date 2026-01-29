export interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const ProfileModal = ({ isOpen, onClose, className }: ProfileModalProps) => {
    if (!isOpen) return null;
    return (
        <div className={className} onClick={onClose}>
            <div className="modal-buttons"><p onClick={onClose}>My Stats </p></div>
            <div className="modal-divider"></div>
            <div className="modal-buttons"><p onClick={onClose}>Log Out </p></div>
        </div>
    );
};