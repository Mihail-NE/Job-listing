import PropTypes from "prop-types";
import RemoveIcon from "../assets/images/RemoveIcon.jsx";

const Badge = ({
    variant = "basic",
    colorScheme = "light",
    children,
    onClear,
    onClick,
}) => (
    <div
        className={`badge badge--${variant} badge--${colorScheme}`}
        onClick={onClick}
    >
        <span>{children}</span>
        {variant === "clearable" && (
            <div className="badge-remover" onClick={onClear}>
                <RemoveIcon />
            </div>
        )}
    </div>
);

export default Badge;

Badge.propTypes = {
    variant: PropTypes.oneOf(["basic", "clearable", "rounded"]),
    colorScheme: PropTypes.oneOf(["light", "primary", "dark"]),
    children: PropTypes.node.isRequired,
    onClear: PropTypes.func,
    onClick: PropTypes.func,
};
