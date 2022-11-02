import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className={css.list_box}>
            <ul className={css.list}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={css.item}>
                        <p className={css.contact_name}>{name} ------------ {number}</p>
                        {/* <p className={css.contact_number}>{number}</p> */}

                        <button className={css.btn_delete_contact} type='submit' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}


ContactList.protoType = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            number: PropTypes.number,
        })
    ),

    onDeleteContact: PropTypes.func,
};

export default ContactList;