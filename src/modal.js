import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import about from "./images/icons/about.png";
import {Button} from "react-bootstrap";

const Modal = ({
                   mypic, title, isOpen, onCancel, children,
               }) => {

    return (
        <>
            { isOpen &&
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                            <img height='80' src={about} id="about" onClick={onCancel}/>
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">
                            <Button onClick={onCancel} invert>Cancel</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    children: PropTypes.node,
};
Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    children: null,
};
export default Modal;