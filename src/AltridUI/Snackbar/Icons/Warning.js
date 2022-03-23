import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const IconRoot = styled.svg`
    fill: ${({ color }) => (color ? color : null)};
    width: ${({ fontSize }) => (fontSize ? fontSize : null)};
    height: ${({ fontSize }) => (fontSize ? fontSize : null)};
`;

export default function Warning({ color, fontSize }) {
    const rootRef = useRef();
    const [inheritFontSize, setInheritFontSize] = useState('16px');
    const [inheritFontColor, setInheritFontColor] = useState('#000000');
    useEffect(() => {
        const parentElement = rootRef.current.parentElement.parentElement;
        const parentStyles = window.getComputedStyle(parentElement);
        const parentFontSize = parentStyles.fontSize;
        const parentColor = parentStyles.color;
        setInheritFontSize(parentFontSize);
        setInheritFontColor(parentColor);
    }, []);
    return (
        <IconRoot
            color={color === 'inherit' ? inheritFontColor : color}
            fontSize={fontSize === 'inherit' ? inheritFontSize : fontSize}
            viewBox="0 0 22 22"
            ref={rootRef}
        >
            <path d="M9.90924 0.782279C10.949 0.206366 12.247 0.541008 12.8849 1.52252L12.9677 1.66035L20.7266 15.6686C20.9114 16.0022 21.0084 16.3774 21.0084 16.7588C21.0084 17.9497 20.0832 18.9244 18.9124 19.0036L18.7584 19.0088H3.24263C2.86132 19.0088 2.48626 18.9119 2.15268 18.7272C1.11284 18.1514 0.707798 16.8736 1.20135 15.8122L1.27425 15.6688L9.03105 1.66058C9.23557 1.29121 9.5399 0.98685 9.90924 0.782279ZM19.4145 16.3954L11.6555 2.38713C11.4548 2.02479 10.9984 1.89375 10.636 2.09444C10.5437 2.14559 10.4635 2.21544 10.4005 2.29911L10.3433 2.38721L2.5865 16.3955C2.38585 16.7578 2.51694 17.2143 2.87931 17.4149C2.96271 17.4611 3.05388 17.4908 3.14787 17.5028L3.24263 17.5088H18.7584C19.1726 17.5088 19.5084 17.173 19.5084 16.7588C19.5084 16.6634 19.4902 16.5693 19.4551 16.4812L19.4145 16.3954L11.6555 2.38713L19.4145 16.3954ZM11.0003 14.0019C11.5518 14.0019 11.999 14.449 11.999 15.0006C11.999 15.5521 11.5518 15.9992 11.0003 15.9992C10.4488 15.9992 10.0016 15.5521 10.0016 15.0006C10.0016 14.449 10.4488 14.0019 11.0003 14.0019ZM10.9961 6.49966C11.3758 6.49936 11.6898 6.78126 11.7398 7.1473L11.7467 7.24907L11.7503 11.7507C11.7506 12.1649 11.4151 12.5009 11.0009 12.5013C10.6212 12.5016 10.3072 12.2197 10.2572 11.8536L10.2503 11.7519L10.2467 7.25027C10.2464 6.83605 10.5819 6.5 10.9961 6.49966Z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4611 1.78803C11.9637 1.03041 10.9576 0.773198 10.1515 1.21967C9.86424 1.37878 9.62754 1.61551 9.46846 1.90279L1.71592 15.9034L1.65126 16.0305C1.27298 16.8541 1.58876 17.8434 2.39489 18.2897C2.65434 18.4334 2.94605 18.5088 3.24263 18.5088H18.75L18.8866 18.5042C19.793 18.4388 20.5084 17.6821 20.5084 16.7588C20.5084 16.4621 20.433 16.1704 20.2892 15.9109L12.5345 1.9103L12.4611 1.78803ZM9.66698 0.34489C10.938 -0.359106 12.5243 0.0500314 13.3041 1.25007L13.3089 1.25747L13.4008 1.4104L21.164 15.4263C21.3899 15.8341 21.5084 16.2926 21.5084 16.7588C21.5084 18.2145 20.3776 19.4057 18.9462 19.5025L18.9377 19.503L18.7668 19.5088H3.24263C2.77658 19.5088 2.31818 19.3903 1.91047 19.1646C0.639366 18.4607 0.144529 16.8991 0.747972 15.6013L0.751693 15.5933L0.832576 15.4343L8.59363 1.41837C8.84361 0.966922 9.21556 0.594922 9.66698 0.34489ZM10.3938 1.65706C10.9977 1.32256 11.7584 1.54096 12.0929 2.14487L19.8595 16.167L19.9138 16.2815L19.9196 16.2962C19.9781 16.4429 20.0084 16.5999 20.0084 16.7588C20.0084 17.4491 19.4487 18.0088 18.7584 18.0088H3.22679L3.10042 18.0008L3.0847 17.9988C2.92805 17.9788 2.7761 17.9293 2.6371 17.8523C2.03315 17.5179 1.81466 16.7572 2.14908 16.1533L9.91437 2.12967L9.99065 2.01217L10.0012 1.99817C10.1063 1.85872 10.2399 1.7423 10.3938 1.65706ZM11.2181 2.6294C11.1512 2.50861 10.9991 2.46493 10.8783 2.53183C10.8513 2.54679 10.8274 2.56655 10.8078 2.59001L10.7722 2.64476L3.02392 16.6377C2.95703 16.7585 3.00073 16.9106 3.12152 16.9775C3.14591 16.991 3.1723 17.0003 3.19957 17.0051L3.25846 17.0088H18.7584C18.8965 17.0088 19.0084 16.8969 19.0084 16.7588C19.0084 16.7309 19.0037 16.7033 18.9947 16.6771L18.9694 16.6238L11.2181 2.6294ZM11.2424 7.20272C11.2207 7.08717 11.1184 6.99957 10.9965 6.99966C10.8584 6.99977 10.7466 7.11179 10.7467 7.24987L10.7503 11.7347L10.7546 11.7982C10.7763 11.9138 10.8786 12.0014 11.0005 12.0013C11.1386 12.0011 11.2504 11.8891 11.2503 11.7511L11.2467 7.26625L11.2424 7.20272ZM10.9957 5.99966C11.6289 5.99916 12.1519 6.46914 12.2352 7.07969L12.2375 7.09646L12.2467 7.23187L12.2503 11.7503C12.2508 12.4406 11.6917 13.0007 11.0013 13.0013C10.3681 13.0018 9.84514 12.5318 9.76182 11.9212L9.75953 11.9045L9.75031 11.7691L9.7467 7.25066C9.74615 6.56031 10.3053 6.00022 10.9957 5.99966ZM11.0003 14.5019C10.7249 14.5019 10.5016 14.7252 10.5016 15.0006C10.5016 15.276 10.7249 15.4992 11.0003 15.4992C11.2757 15.4992 11.499 15.276 11.499 15.0006C11.499 14.7252 11.2757 14.5019 11.0003 14.5019ZM9.50163 15.0006C9.50163 14.1729 10.1726 13.5019 11.0003 13.5019C11.828 13.5019 12.499 14.1729 12.499 15.0006C12.499 15.8283 11.828 16.4992 11.0003 16.4992C10.1726 16.4992 9.50163 15.8283 9.50163 15.0006Z"
            />
        </IconRoot>
    );
}
