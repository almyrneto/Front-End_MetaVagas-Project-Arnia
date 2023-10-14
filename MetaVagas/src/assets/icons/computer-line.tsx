type props = { color : string}
function ComputerIcon(props : props){
    return(
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2516_318)">
<path d="M4.00001 16H20V5H4.00001V16ZM13 18V20H17V22H7.00001V20H11V18H2.99201C2.8607 17.9992 2.73083 17.9725 2.60985 17.9215C2.48887 17.8704 2.37916 17.7959 2.287 17.7024C2.19485 17.6088 2.12206 17.498 2.07281 17.3763C2.02356 17.2546 1.99882 17.1243 2.00001 16.993V4.007C2.00001 3.451 2.45501 3 2.99201 3H21.008C21.556 3 22 3.449 22 4.007V16.993C22 17.549 21.545 18 21.008 18H13Z" fill={props.color}/>
</g>
<defs>
<clipPath id="clip0_2516_318">
<rect width="24" height="24" fill={props.color}/>
</clipPath>
</defs>
</svg>)
}

export default ComputerIcon