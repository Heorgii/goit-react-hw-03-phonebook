import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <div className={css.notifi_box}>
            <div className={css.notifi_item}>
                <p className={css.notifi_text}>{message}</p>
            </div>
        </div>
    );
}

Notification.protoType = {
    message: PropTypes.string,
}

export default Notification;