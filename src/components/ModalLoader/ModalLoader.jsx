import { useStyles } from './ModalLoader.styles';
import Modal from 'react-modal';
import Loader from 'react-loader-spinner';
import { modalSelectors } from '../../redux/modal/';
import { useSelector } from 'react-redux';

const ModalLoader = () => {
  const { logoutContainer, modal, modalThumb } = useStyles();

  const isLoading = useSelector(modalSelectors.getIsLoading);
  const type = useSelector(modalSelectors.getType);

  const loaderThumbnail = {
    register: 'Creating account',
    login: 'Logging in',
    logout: 'Logging out',
    add: 'Adding new contact',
    delete: 'Deleting contact',
  };

  return (
    <div className={logoutContainer}>
      {typeof isLoading === 'boolean' && (
        <Modal className={modal} isOpen={isLoading} ariaHideApp={false}>
          <Loader type="TailSpin" color="#2196F3" height={140} width={140} />
          {Object.keys(loaderThumbnail).find(value => value === type) ? (
            <p className={modalThumb}>{loaderThumbnail[type]}</p>
          ) : (
            <p className={modalThumb}>Loading...</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ModalLoader;
