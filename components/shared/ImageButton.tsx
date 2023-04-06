export default function ImageButton({
    children,
    label,
    onClick,
    isResponsive = false,
    style = '',
}) {
    return (
        <button
            className={
                'flex w-fit flex-row items-center py-2 text-light-gray hover:fill-black hover:text-black focus:rounded-md focus:outline-2 focus:outline-hover-blue ' +
                style
            }
            type="button"
            onClick={onClick}
        >
            {children}
            <span
                className={
                    'ml-2.5 text-sm font-semibold tracking-widest ' +
                    (isResponsive ? ' hidden md:block' : '')
                }
            >
                {label}
            </span>
        </button>
    )
}
