import ReactModal from 'react-modal'

export const UserMenuModal = ({ isOpen, onRequestClose, onLogout }
    : { isOpen: boolean, onRequestClose: () => void, onLogout: () => void }) => {

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Menu"
        >
            <button onClick={onLogout}>Logout</button>
        </ReactModal>
    )
}