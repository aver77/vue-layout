import type { PropType } from 'vue';

const getSharedSvgProps = () => {
    return {
        height: {
            type: String as PropType<`${string}px`>,
            default: () => '28px'
        },
        width: {
            type: String as PropType<`${string}px`>,
            default: () => '28px'
        },
        style: {
            type: String,
            default: () => ''
        },
        className: {
            type: String,
            default: () => ''
        }
    };
};
export default getSharedSvgProps;
