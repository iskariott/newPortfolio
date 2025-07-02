import st from './index.module.scss';

interface StButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    hoverEffect?: HoverEffect;
    isActive?: boolean;
}

export type HoverEffect = 'none' | 'scale' | 'opacity';

export default function StButton({
    className,
    isActive,
    hoverEffect = 'none',
    ...rest
}: StButtonProps) {
    const classes = [
        st.btn,
        className,
        isActive && st.active,
        hoverEffect !== 'none' && st[hoverEffect],
    ]
        .filter(Boolean)
        .join(' ');
    return <button className={classes} {...rest} />;
}
