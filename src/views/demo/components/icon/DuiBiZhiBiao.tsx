/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-01-09 13:41:19
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/copy.tsx
 * @Description: 漏斗icon
 */
import Icon from "@ant-design/icons";
const DuiBiZhiBiaoComp = (props) => {
  const Svg = () => (
    <svg version="1.1" width={props.width} height={props.height} viewBox="0 0 76.0 36.0" ><defs><clipPath id="i0"><path d="M360,0 L360,1778 L0,1778 L0,0 L360,0 Z"></path></clipPath><clipPath id="i1"><path d="M3,0 L3,36 L0,36 L0,0 L3,0 Z"></path></clipPath><clipPath id="i2"><path d="M6.704,0 C6.736,0 6.75466667,0.00315955766 6.76,0.00947867299 C6.76533333,0.0157977883 6.77333333,0.0252764613 6.784,0.0379146919 L11.84,11.7725118 L11.84,11.7345972 C11.8506667,11.7598736 11.856,11.7851501 11.856,11.8104265 L11.856,11.8293839 C11.856,11.943128 11.8133333,12 11.728,12 L10.464,12 C10.464,11.9873618 10.4586667,11.9684044 10.448,11.943128 L10.464,11.9620853 L9.264,9.17535545 L2.528,9.17535545 L1.344,11.9620853 L1.344,12 L0.144,12 C0.048,12 0,11.943128 0,11.8293839 L0,11.8104265 C0,11.7851501 0.0106666667,11.7598736 0.032,11.7345972 L0.032,11.7725118 L5.056,0.0379146919 C5.07733333,0.0126382306 5.10933333,0 5.152,0 Z M5.92,1.38388626 L3.2,7.67772512 L8.592,7.67772512 L5.92,1.38388626 Z"></path></clipPath><clipPath id="i3"><path d="M4.62792969,0 L4.62792969,9.91024782 L6.7265625,9.91024782 L6.7265625,12 L0,12 L0,9.91024782 L2.14648438,9.91024782 L2.14648438,3.58472873 L0,3.58472873 L0,1.6316142 C0.314453125,1.6316142 0.626627604,1.60750167 0.936523438,1.55927662 C1.24641927,1.51105157 1.49479167,1.43335566 1.68164062,1.32618888 C1.90039062,1.19758875 2.07014974,1.02478232 2.19091797,0.807769591 C2.3116862,0.590756865 2.3811849,0.321500335 2.39941406,0 L4.62792969,0 Z"></path></clipPath><clipPath id="i4"><path d="M3.35644531,0 C4.5641276,0 5.47900391,0.310935441 6.10107422,0.932806324 C6.72314453,1.55467721 7.03417969,2.42951252 7.03417969,3.55731225 C7.03417969,4.25296443 6.89290365,4.93412385 6.61035156,5.60079051 C6.32779948,6.26745718 5.85839844,6.9828722 5.20214844,7.74703557 C4.79199219,8.21607378 4.39322917,8.63372859 4.00585938,9 C3.61848958,9.36627141 3.33821615,9.62582345 3.16503906,9.77865613 L7.47851562,9.77865613 L7.47851562,12 L0,12 L0,10.0790514 C0.633463542,9.49934124 1.20198568,8.95125165 1.70556641,8.43478261 C2.20914714,7.91831357 2.65234375,7.42819499 3.03515625,6.96442688 C3.53190104,6.35836627 3.89192708,5.82608696 4.11523438,5.36758893 C4.33854167,4.90909091 4.45019531,4.43741765 4.45019531,3.95256917 C4.45019531,3.40447958 4.30891927,2.98418972 4.02636719,2.6916996 C3.7438151,2.39920949 3.34960938,2.25296443 2.84375,2.25296443 C2.58398438,2.25296443 2.33902995,2.28985507 2.10888672,2.36363636 C1.87874349,2.43741765 1.64518229,2.53227931 1.40820312,2.64822134 C1.17578125,2.76943347 0.977539062,2.89328063 0.813476562,3.01976285 C0.649414062,3.14624506 0.526367188,3.24110672 0.444335938,3.30434783 L0.24609375,3.30434783 L0.24609375,0.735177866 C0.533203125,0.577075099 0.982096354,0.415019763 1.59277344,0.249011858 C2.20345052,0.0830039526 2.79134115,0 3.35644531,0 Z"></path></clipPath><clipPath id="i5"><path d="M3.53417969,0 C4.14029948,0 4.66552734,0.05931657 5.10986328,0.17794971 C5.55419922,0.29658285 5.93359375,0.469374597 6.24804688,0.696324952 C6.59440104,0.938749194 6.85416667,1.24693746 7.02734375,1.62088975 C7.20052083,1.99484204 7.28710938,2.41650548 7.28710938,2.88588008 C7.28710938,3.54094133 7.11962891,4.11476467 6.78466797,4.6073501 C6.44970703,5.09993553 6.00878906,5.41843972 5.46191406,5.56286267 L5.46191406,5.67117988 C5.70345052,5.71244358 5.93929036,5.78207608 6.16943359,5.88007737 C6.39957682,5.97807866 6.62402344,6.1379755 6.84277344,6.35976789 C7.04785156,6.56092843 7.21761068,6.82011605 7.35205078,7.13733075 C7.48649089,7.45454545 7.55371094,7.83236622 7.55371094,8.27079304 C7.55371094,8.83301096 7.46142578,9.34622824 7.27685547,9.81044487 C7.09228516,10.2746615 6.82226562,10.6692456 6.46679688,10.9941973 C6.10677083,11.3191489 5.68408203,11.5680206 5.19873047,11.7408124 C4.71337891,11.9136041 4.12207031,12 3.42480469,12 C2.63183594,12 1.95166016,11.9252095 1.38427734,11.7756286 C0.816894531,11.6260477 0.35546875,11.4584139 0,11.2727273 L0,8.77369439 L0.24609375,8.77369439 C0.619791667,9.04190845 1.05843099,9.27401676 1.56201172,9.47001934 C2.06559245,9.66602192 2.52473958,9.76402321 2.93945312,9.76402321 C3.18554688,9.76402321 3.45328776,9.73952289 3.74267578,9.69052224 C4.0320638,9.6415216 4.27473958,9.53449387 4.47070312,9.36943907 C4.62565104,9.24049001 4.74983724,9.08188266 4.84326172,8.89361702 C4.9366862,8.70535139 4.98339844,8.43842682 4.98339844,8.09284333 C4.98339844,7.75241779 4.91731771,7.49065119 4.78515625,7.30754352 C4.65299479,7.12443585 4.47753906,6.99161831 4.25878906,6.90909091 C4.04003906,6.82140554 3.77799479,6.7724049 3.47265625,6.76208897 C3.16731771,6.75177305 2.8984375,6.74661509 2.66601562,6.74661509 L2.22851562,6.74661509 L2.22851562,4.71953578 L2.63183594,4.71953578 C2.94173177,4.71953578 3.2265625,4.7040619 3.48632812,4.67311412 C3.74609375,4.64216634 3.9671224,4.58027079 4.14941406,4.48742747 C4.33170573,4.38942618 4.47412109,4.25274017 4.57666016,4.07736944 C4.67919922,3.90199871 4.73046875,3.66473243 4.73046875,3.3655706 C4.73046875,3.13346228 4.68261719,2.94390716 4.58691406,2.79690522 C4.49121094,2.64990329 4.37272135,2.53513862 4.23144531,2.45261122 C4.06738281,2.35976789 3.87597656,2.29787234 3.65722656,2.26692456 C3.43847656,2.23597679 3.2516276,2.2205029 3.09667969,2.2205029 C2.84602865,2.2205029 2.59082031,2.25402966 2.33105469,2.32108317 C2.07128906,2.38813669 1.81835938,2.47324307 1.57226562,2.57640232 C1.38085938,2.65892972 1.18033854,2.76595745 0.970703125,2.89748549 C0.761067708,3.02901354 0.606119792,3.12830432 0.505859375,3.19535783 L0.293945312,3.19535783 L0.293945312,0.727272727 C0.644856771,0.557059961 1.11767578,0.393294649 1.71240234,0.235976789 C2.30712891,0.0786589297 2.91438802,0 3.53417969,0 Z"></path></clipPath><clipPath id="i6"><path d="M7.12,0 C9.46666667,0 10.64,1.02369668 10.64,3.07109005 C10.64,4.27172196 10.3946667,5.1121643 9.904,5.59241706 C10.7146667,6.0600316 11.12,7.00157978 11.12,8.41706161 C11.12,9.07424961 11.0426667,9.64296998 10.888,10.1232227 C10.7333333,10.6034755 10.4853333,10.9889415 10.144,11.2796209 C9.86666667,11.5323855 9.51466667,11.7156398 9.088,11.8293839 C8.66133333,11.943128 8.16,12 7.584,12 L0.144,12 C0.048,12 0,11.943128 0,11.8293839 L0,0.18957346 C0,0.0631911532 0.048,0 0.144,0 Z M7.904,6.50236967 L1.296,6.50236967 L1.296,10.4454976 L7.952,10.4454976 C8.60266667,10.4454976 9.08,10.2780411 9.384,9.94312796 C9.688,9.60821485 9.84,9.09952607 9.84,8.41706161 C9.84,7.671406 9.68,7.15323855 9.36,6.86255924 C9.21066667,6.74881517 9.016,6.66034755 8.776,6.5971564 C8.536,6.53396524 8.24533333,6.50236967 7.904,6.50236967 Z M7.52,1.57345972 L1.296,1.57345972 L1.296,4.96682464 L7.536,4.96682464 C8.16533333,4.96682464 8.59733333,4.85939968 8.832,4.64454976 C9.184,4.42969984 9.36,3.97472354 9.36,3.27962085 C9.36,2.68562401 9.20533333,2.25276461 8.896,1.98104265 C8.58666667,1.7093207 8.128,1.57345972 7.52,1.57345972 Z"></path></clipPath></defs><g transform="translate(-254.0 -895.0)"><g clipPath="url(#i0)"><g transform="translate(20.0 638.0)"><g transform="translate(234.0 257.0)"><g clipPath="url(#i1)"><polygon points="0,0 3,0 3,36 0,36 0,0" stroke="none" fill="#1ACEDB"></polygon></g><g transform="translate(7.319999999999937 1.872000000000071)"><g clipPath="url(#i2)"><polygon points="0,0 11.856,0 11.856,12 0,12 0,0" stroke="none" fill="#1ACEDB"></polygon></g></g><g transform="translate(8.3330078125 22.609375)"><g transform="translate(0.0 0.1845703125)"><g clipPath="url(#i3)"><polygon points="0,0 6.7265625,0 6.7265625,12 0,12 0,0" stroke="none" fill="#1ACEDB"></polygon></g></g><g transform="translate(8.61328125 0.013671875)"><g clipPath="url(#i4)"><polygon points="0,0 7.47851562,0 7.47851562,12 0,12 0,0" stroke="none" fill="#1ACEDB"></polygon></g></g><g transform="translate(17.19921875 0.0)"><g clipPath="url(#i5)"><polygon points="0,0 7.55371094,0 7.55371094,12 0,12 0,0" stroke="none" fill="#1ACEDB"></polygon></g></g></g><g transform="translate(42.0 0.0)"><g clipPath="url(#i1)"><polygon points="0,0 3,0 3,36 0,36 0,0" stroke="none" fill="#F2A820"></polygon></g><g transform="translate(7.751999999999952 1.872000000000071)"><g clipPath="url(#i6)"><polygon points="0,0 11.12,0 11.12,12 0,12 0,0" stroke="none" fill="#F2A820"></polygon></g></g><g transform="translate(8.3330078125 22.609375)"><g transform="translate(0.0 0.1845703125)"><g clipPath="url(#i3)"><polygon points="0,0 6.7265625,0 6.7265625,12 0,12 0,0" stroke="none" fill="#F2A820"></polygon></g></g><g transform="translate(8.61328125 0.013671875)"><g clipPath="url(#i4)"><polygon points="0,0 7.47851562,0 7.47851562,12 0,12 0,0" stroke="none" fill="#F2A820"></polygon></g></g><g transform="translate(17.19921875 0.0)"><g clipPath="url(#i5)"><polygon points="0,0 7.55371094,0 7.55371094,12 0,12 0,0" stroke="none" fill="#F2A820"></polygon></g></g></g></g></g></g></g></g></svg>
  );
  return <Icon component={Svg} {...props} />;
};

DuiBiZhiBiaoComp.defaultProps = {
  with: 76,
  height: 36
}
export default DuiBiZhiBiaoComp;
