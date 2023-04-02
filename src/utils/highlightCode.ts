const code = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="27 27 46 46">
<g id="l" fill="#fff" stroke="#fff">
    <circle id="c1" cx="30" cy="50" r="1" />
    <circle id="c2" cx="40" cy="50" r="1" />
    <circle id="c3" cx="50" cy="50" r="1" />
    <circle id="c4" cx="60" cy="50" r="1" />
    <circle id="c5" cx="70" cy="50" r="1" />
    <animateTransform href="#c1" attributeName="transform" attributeType="XML" type="translateX" values="0;40;0"
        dur="3" repeatCount="indefinite" />
    <animateTransform href="#c2" attributeName="transform" attributeType="XML" type="rotate"
        values="0 35 50;-180 35 50;-180 35 50;-360 35 50" keyTimes="0;0.1;0.9;1" dur="3" repeatCount="indefinite" />
    <animateTransform href="#c3" attributeName="transform" attributeType="XML" type="rotate"
        values="0 45 50;0 45 50;-180 45 50;-180 45 50;-360 45 50;-360 45 50" keyTimes="0;0.125;0.225;0.775;0.875;1"
        dur="3" repeatCount="indefinite" />
    <animateTransform href="#c4" attributeName="transform" attributeType="XML" type="rotate"
        values="0 55 50;0 55 50;-180 55 50;-180 55 50;-360 55 50;-360 55 50" keyTimes="0;0.25;0.35;0.65;0.75;1"
        dur="3" repeatCount="indefinite" />
    <animateTransform href="#c5" attributeName="transform" attributeType="XML" type="rotate"
        values="0 65 50;0 65 50;-180 65 50;-360 65 50;-360 65 50" keyTimes="0;0.375;0.5;0.625;1" dur="3"
        repeatCount="indefinite" />
</g>
</svg>`;

console.log(code.replaceAll(/>(\s*)</g, '$1'));

// class HighlightCode {}

export default {};
