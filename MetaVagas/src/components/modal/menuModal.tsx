import ReactModal from 'react-modal'
import { ButtonLogout, ModalWrapper } from './styled'

export const UserMenuModal = ({ isOpen, onRequestClose, onLogout }
    : { isOpen: boolean, onRequestClose: () => void, onLogout: () => void }) => {

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Menu"
            style={{
                overlay: {
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999,
                },
                content: {
                    border: 'none',
                    background: 'transparent',
                    overflow: 'visible',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: 0,
                    outline: 'none',
                    padding: 0,
                    width: '300px',
                },
            }}
        >
            <ModalWrapper>
                <ButtonLogout onClick={onLogout}>Logout</ButtonLogout>
            </ModalWrapper>
        </ReactModal>
    )
}