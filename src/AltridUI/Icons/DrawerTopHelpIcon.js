import React from 'react';
import styled from 'styled-components';

const IconRoot = styled.svg``;

function DrawerTopHelpIcon({ width, height, viewBox, fillColor, style, ...restProps }) {
    return (
        <IconRoot width={width} height={height} viewBox={viewBox} style={style} {...restProps}>
            <path
                d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9 13V15H11V13H9ZM11 11.355C11.8037 11.1128 12.4936 10.59 12.9442 9.88174C13.3947 9.17353 13.5759 8.32705 13.4547 7.49647C13.3336 6.66588 12.9181 5.90644 12.284 5.35646C11.6499 4.80647 10.8394 4.50254 10 4.5C9.19085 4.49994 8.40666 4.78015 7.78079 5.29299C7.15492 5.80583 6.72601 6.51963 6.567 7.313L8.529 7.706C8.58468 7.42743 8.71832 7.1704 8.91437 6.96482C9.11042 6.75923 9.36081 6.61354 9.63643 6.54471C9.91204 6.47587 10.2015 6.48671 10.4712 6.57597C10.7409 6.66523 10.9797 6.82924 11.1598 7.04891C11.34 7.26858 11.454 7.53489 11.4887 7.81684C11.5234 8.0988 11.4773 8.3848 11.3558 8.64158C11.2343 8.89837 11.0423 9.11536 10.8023 9.26733C10.5623 9.4193 10.2841 9.49998 10 9.5C9.73478 9.5 9.48043 9.60536 9.29289 9.79289C9.10536 9.98043 9 10.2348 9 10.5V12H11V11.355Z"
                fill={fillColor}
            />
        </IconRoot>
    );
}

DrawerTopHelpIcon.defaultProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    fillColor: '#3B1689',
};

export default DrawerTopHelpIcon;
