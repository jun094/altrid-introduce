import React from 'react';
import styled from 'styled-components';

const IconRoot = styled.svg``;

function OCRSwapIcon({ width, height, viewBox, fillColor, style, ...restProps }) {
    return (
        <IconRoot width={width} height={height} viewBox={viewBox} style={style} {...restProps}>
            <path d="M13 14V10L18 15L13 20V16H1V14H13ZM5 0V3.999L17 4V6H5V10L0 5L5 0Z" fill={fillColor} />
        </IconRoot>
    );
}

OCRSwapIcon.defaultProps = {
    width: 18,
    height: 20,
    viewBox: '0 0 18 20',
    fillColor: '#3B1689',
};

export default OCRSwapIcon;
