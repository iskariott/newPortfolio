import PropTypes from 'prop-types';
import st from './index.module.scss';

export const HOVER_EFFECT = {
    NONE: 'none',
    SCALE: 'scale',
    OPACITY: 'opacity',
};

export default function StButton({ children, className, isActive, hoverEffect, onClick }) {
    const classes = [
        st.btn,
        className,
        isActive && st.active,
        hoverEffect !== HOVER_EFFECT.NONE && st[hoverEffect],
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
}

StButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    hoverEffect: PropTypes.oneOf(Object.values(HOVER_EFFECT)),
    onClick: PropTypes.func,
};

StButton.defaultProps = {
    isActive: false,
    hoverEffect: HOVER_EFFECT.NONE,
};
