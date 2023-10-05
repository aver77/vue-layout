const getSharedSvgProps = () => {
    return {
        height: {
            type: String,
            default: "24px"
        },
        width: {
            type: String,
            default: "24px"
        },
        style: {
            type: String,
            default: ""
        },
        className: {
            type: String,
            default: ""
        }
    };
};
export default getSharedSvgProps;
