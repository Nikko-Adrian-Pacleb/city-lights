import { React, useEffect } from "react";
import "./index.css";
function HomeBG() {
  const sensorRadius = 200;
  const lightGroupArrays = [
    <>
      <path
        fill="#fff"
        d="m616.145 468.247 29.959-10.714v15.162l-29.959 10.304v-14.752Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 452.535 26.963-9.644v15.711l-26.963 9.275v-15.342Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.982 426.11v16.341l-33.953 11.683v-15.881l33.953-12.143Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m616.145 498.231 29.959-9.885v15.152l-29.959 9.485v-14.752Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 483.728 26.963-8.905v15.702l-26.963 8.545v-15.342Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.982 459.332v16.331l-33.953 10.754v-15.881l33.953-11.204Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m616.145 528.214 29.959-9.065v15.152l-29.959 8.665v-14.752Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 514.911 26.963-8.155v15.701l-26.963 7.796v-15.342Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.982 492.544v16.341l-33.953 9.825v-15.892l33.953-10.274Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m616.145 558.198 29.959-8.245v15.151l-29.959 7.846v-14.752Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 546.105 26.963-7.416v15.701l-26.963 7.056v-15.341Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.982 525.766v16.341l-33.953 8.885v-15.881l33.953-9.345Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m616.145 588.182 29.959-7.426v15.162l-29.959 7.016v-14.752Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 577.288 26.963-6.677v15.712l-26.963 6.316v-15.351Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.982 558.978v16.351l-33.953 7.956v-15.892l33.953-8.415Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m758.947 425.27 32.635 9.405v16.251l-32.635-9.045V425.27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M828.85 445.419v15.832l-17.206-4.768v-16.021l17.206 4.957Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m758.947 459.252 32.635 8.665v15.292l-32.635-8.326v-15.631Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M830.848 478.351v14.882l-19.204-4.897v-15.082l19.204 5.097Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m758.947 491.234 32.635 7.976v15.841l-32.635-7.625v-16.192Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M830.848 508.805v15.412l-19.204-4.488v-15.622l19.204 4.698Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m758.947 524.217 32.635 7.256v15.191l-32.635-6.926v-15.521Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M831.846 540.428V555.2l-20.202-4.288V535.94l20.202 4.488Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#fff"
        d="m834.842 293.342 21.97-9.475v18l-21.97 9.175v-17.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 267.496v18.51l-24.965 10.434v-18.17l24.965-10.774Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.842 329.322 21.97-8.875v18l-21.97 8.576v-17.701Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 305.115v18.51l-24.965 9.745V315.2l24.965-10.085Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.842 365.303 21.97-8.276v18.001l-21.97 7.975v-17.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 342.745v18.51l-24.965 9.065v-18.18l24.965-9.395Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.842 401.283 21.97-7.666v18.001l-21.97 7.366v-17.701Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 380.365v18.52l-24.965 8.375v-18.18l24.965-8.715Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.842 437.264 21.97-7.066v18l-21.97 6.766v-17.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 417.994v18.51l-24.965 7.696v-18.18l24.965-8.026Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.842 473.244 21.97-6.456v17.99l-21.97 6.167v-17.701Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 455.624v18.51l-24.965 7.006v-18.17l24.965-7.346Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.842 509.225 21.97-5.857v17.99l-21.97 5.567v-17.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 493.244v18.51l-24.965 6.326V499.9l24.965-6.656Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.842 545.205 21.97-5.257v18l-21.97 4.958v-17.701Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.759 530.873v18.51l-24.965 5.637v-18.17l24.965-5.977Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.894 286.705v17.661l-36.17-15.952v-18.17l36.17 16.461Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.894 323.316v17.66l-36.17-14.892v-18.17l36.17 15.402Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m919.724 343.834 36.17 14.392v17.651l-36.17-13.883v-18.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.894 395.566v17.661l-36.17-12.803v-18.171l36.17 13.313Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m919.724 419.273 36.17 12.284v17.65l-36.17-11.773v-18.161Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.894 467.827v17.651l-36.17-10.725v-18.16l36.17 11.234Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.894 504.427v17.651l-36.17-9.655v-18.17l36.17 10.174Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#fff"
        d="m2.497 590.681 3.734-2.099v6.516l-3.734 2.039v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 586.353 8.997-5.047v6.686l-8.997 4.927v-6.566Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 579.077 10.026-5.627v6.876l-10.026 5.487v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 571.221 8.728-4.897v7.056l-8.728 4.768v-6.927Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 557.089v7.276l-12.482 6.826v-7.106l12.482-6.996Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 602.674 3.734-1.999v6.507l-3.734 1.949v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 598.536 8.997-4.817v6.686l-8.997 4.698v-6.567Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 591.59 10.026-5.377v6.876l-10.026 5.238v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 584.084 8.728-4.677v7.046l-8.728 4.558v-6.927Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 570.582v7.276l-12.482 6.516v-7.106l12.482-6.686Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 614.668 3.734-1.909v6.506l-3.734 1.859v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 610.73 8.997-4.598v6.687l-8.997 4.467v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 604.104 10.026-5.118v6.867l-10.026 4.987v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 596.947 8.728-4.447v7.036l-8.728 4.338v-6.927Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 584.084v7.266l-12.482 6.207v-7.096l12.482-6.377Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 626.661 3.734-1.809v6.507l-3.734 1.759v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 622.913 8.997-4.367v6.686l-8.997 4.248v-6.567Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 616.617 10.026-4.867v6.876l-10.026 4.727v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 609.81 8.728-4.237v7.056l-8.728 4.118v-6.937Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 597.577v7.276l-12.482 5.887v-7.106l12.482-6.057Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 638.655 3.734-1.719v6.506l-3.734 1.669v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 635.107 8.997-4.148v6.686l-8.997 4.018v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 629.13 10.026-4.618v6.877l-10.026 4.477v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 622.683 8.728-4.017v7.036l-8.728 3.908v-6.927Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 611.08v7.266l-12.482 5.577v-7.096l12.482-5.747Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 650.648 3.734-1.629v6.507l-3.734 1.579v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 647.29 8.997-3.918v6.686l-8.997 3.788v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 641.643 10.026-4.367v6.876l-10.026 4.228v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 635.546 8.728-3.807v7.056l-8.728 3.678v-6.927Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 624.572v7.276l-12.482 5.258v-7.097l12.482-5.437Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 662.642 3.734-1.529v6.506l-3.734 1.479v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 659.474 8.997-3.688v6.686l-8.997 3.568v-6.566Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 654.156 10.026-4.117v6.876l-10.026 3.978v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 648.41 8.728-3.578v7.046l-8.728 3.458v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 638.075v7.266l-12.482 4.948v-7.097l12.482-5.117Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 674.636 3.734-1.44v6.507l-3.734 1.389v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 671.667 8.997-3.468v6.686l-8.997 3.338v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 666.67 10.026-3.868v6.876l-10.026 3.728v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 661.273 8.728-3.358v7.036l-8.728 3.248v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 651.568v7.266l-12.482 4.637v-7.096l12.482-4.807Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 686.629 3.734-1.339v6.506l-3.734 1.289v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 683.85 8.997-3.238v6.686l-8.997 3.109v-6.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 679.183 10.026-3.608v6.866l-10.026 3.468v-6.726Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 674.136 8.728-3.139v7.037l-8.728 3.028v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 665.071v7.256l-12.482 4.327v-7.096l12.482-4.487Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 698.622 3.734-1.249v6.506l-3.734 1.2v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 696.034 8.997-3.009v6.687l-8.997 2.888v-6.566Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 691.696 10.026-3.358v6.866l-10.026 3.228v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 686.999 8.728-2.919v7.046l-8.728 2.799v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 678.563v7.266l-12.482 4.008v-7.096l12.482-4.178Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 710.616 3.734-1.159v6.506l-3.734 1.109v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 708.227 8.997-2.788v6.676l-8.997 2.669v-6.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 704.199 10.026-3.098v6.866l-10.026 2.969v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 699.862 8.728-2.699v7.036l-8.728 2.589v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 692.056v7.266l-12.482 3.698v-7.096l12.482-3.868Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 722.609 3.734-1.059v6.507l-3.734 1.009v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 720.411 8.997-2.559v6.686l-8.997 2.439v-6.566Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 716.722 10.026-2.858v6.876l-10.026 2.719v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 712.735 8.728-2.489v7.046l-8.728 2.369v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 705.559v7.266l-12.482 3.388v-7.106l12.482-3.548Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 734.603 3.734-.969v6.506l-3.734.92v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 732.604 8.997-2.339v6.677l-8.997 2.218v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 729.226 10.026-2.599v6.877l-10.026 2.458v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 725.598 8.728-2.269v7.046l-8.728 2.139v-6.916Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 719.051v7.266l-12.482 3.069v-7.096l12.482-3.239Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 746.596 3.734-.879v6.506l-3.734.83v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 744.787 8.997-2.109v6.677l-8.997 1.989v-6.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 741.739 10.026-2.349v6.867l-10.026 2.218v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 738.451 8.728-2.039v7.036l-8.728 1.929v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 732.544v7.266l-12.482 2.759v-7.097l12.482-2.928Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 758.59 3.734-.78v6.507l-3.734.729v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 756.971 8.997-1.879v6.676l-8.997 1.769v-6.566Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 754.252 10.026-2.099v6.877l-10.026 1.959v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 751.314 8.728-1.829v7.056l-8.728 1.709v-6.936Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 746.037v7.276l-12.482 2.448v-7.106l12.482-2.618Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 772.582 3.734-.669v6.506l-3.734.62v-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 771.193 8.997-1.619v6.686l-8.997 1.49v-6.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 768.854 10.026-1.809v6.877l-10.026 1.669v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 766.326 8.728-1.569v7.046l-8.728 1.459v-6.936Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 761.788v7.276l-12.482 2.079v-7.106l12.482-2.249Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 784.576 3.734-.58v6.507l-3.734.529v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 783.377 8.997-1.39v6.677l-8.997 1.279v-6.566Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 781.368 10.026-1.55v6.867l-10.026 1.419v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 779.199 8.728-1.359v7.046l-8.728 1.239v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 775.291v7.266l-12.482 1.769v-7.096l12.482-1.939Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M6.231 796.08v6.506l-3.734.44v-6.457l3.734-.489Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 795.57 8.997-1.169v6.676l-8.997 1.049v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 793.881 10.026-1.299v6.866l-10.026 1.169v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m37.208 792.062 8.728-1.14v7.047l-8.728 1.019v-6.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 788.784v7.266l-12.482 1.449v-7.096l12.482-1.619Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M6.231 809.183v6.506l-3.734.33v-6.457l3.734-.379Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 808.773 8.997-.93v6.687l-8.997.799v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 807.433 10.026-1.029v6.876l-10.026.89v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M45.936 805.095v7.046l-8.728.779v-6.926l8.728-.899Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 803.406v7.266l-12.482 1.109v-7.096l12.482-1.279Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M6.231 821.266v6.507l-3.734.239v-6.456l3.734-.29Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 820.956 8.997-.699v6.686l-8.997.58v-6.567Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m23.198 819.947 10.026-.78v6.877l-10.026.639v-6.736Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M45.936 818.178v7.056l-8.728.56v-6.937l8.728-.679Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 816.898v7.277l-12.482.799v-7.106l12.482-.97Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m2.497 834.549 3.734-.19v6.506l-3.734.14v-6.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m10.216 834.159 8.997-.46v6.687l-8.997.329v-6.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M23.198 833.499 33.224 833v6.866l-10.026.37v-6.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M45.936 832.35v7.046l-8.728.32v-6.926l8.728-.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M62.413 831.521v7.266l-12.482.459v-7.096l12.482-.629Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 557.199 12.982 1.789v7.096l-12.982-1.749v-7.136Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 559.538 13.981 1.919v7.036l-13.98-1.879v-7.076Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 562.016 13.981 1.919v6.976l-13.981-1.879v-7.016Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 566.274v6.916l-12.982-1.749v-6.956l12.982 1.789Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 570.192 12.982 1.709v7.496l-12.982-1.669v-7.536Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 572.431 13.981 1.839v7.426l-13.98-1.789v-7.476Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 574.799 13.981 1.839v7.366l-13.981-1.789v-7.416Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 578.877v7.306l-12.982-1.669v-7.346l12.982 1.709Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 584.184 12.982 1.629v6.896l-12.982-1.589v-6.936Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 586.313 13.981 1.749v6.846l-13.98-1.709v-6.886Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 588.572 13.981 1.749v6.776l-13.981-1.709v-6.816Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 592.45v6.726l-12.982-1.589v-6.766l12.982 1.629Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 597.177 12.982 1.549v7.306l-12.982-1.509v-7.346Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 599.206 13.981 1.669v7.236l-13.98-1.619v-7.286Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 601.345 13.981 1.669v7.186l-13.981-1.619v-7.236Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 605.043v7.126l-12.982-1.509v-7.166l12.982 1.549Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 611.17 12.982 1.469v6.706l-12.982-1.429v-6.746Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 613.089 13.981 1.579v6.656l-13.98-1.539v-6.696Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 615.117 13.981 1.58v6.596l-13.981-1.539v-6.637Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 618.616v6.546l-12.982-1.429v-6.587l12.982 1.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 624.163 12.982 1.369v7.216l-12.982-1.329v-7.256Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 625.952 13.981 1.479v7.156l-13.98-1.429v-7.206Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 627.851 13.981 1.479v7.086l-13.981-1.429v-7.136Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 631.119v7.036l-12.982-1.329v-7.076l12.982 1.369Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 638.155 12.982 1.309V647l-12.982-1.259v-7.586Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 639.864 13.981 1.409v7.476l-13.98-1.359v-7.526Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 641.673 13.981 1.409v7.416l-13.981-1.359v-7.466Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 644.791v7.356l-12.982-1.259v-7.406l12.982 1.309Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 651.148 12.982 1.229v7.936l-12.982-1.179v-7.986Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 652.757 13.981 1.329v7.866l-13.98-1.269v-7.926Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 654.456 13.981 1.33v7.805l-13.981-1.269v-7.866Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 657.395v7.745l-12.982-1.179v-7.796l12.982 1.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 665.14 12.982 1.15v6.316l-12.982-1.109v-6.357Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 666.64 13.981 1.239v6.267l-13.98-1.2v-6.306Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 668.229 13.981 1.239v6.217l-13.981-1.2v-6.256Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 670.967v6.167l-12.982-1.109v-6.207l12.982 1.149Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 678.134 12.982 1.069v7.746l-12.982-1.02v-7.795Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 679.533 13.981 1.159v7.676l-13.98-1.1v-7.735Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 681.012 13.981 1.159v7.616l-13.981-1.099v-7.676Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 683.57v7.556l-12.982-1.019v-7.606l12.982 1.069Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 692.126 12.982.989v7.157l-12.982-.95v-7.196Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 693.415 13.981 1.069v7.087l-13.98-1.01v-7.146Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 694.784 13.981 1.07v7.026l-13.981-1.009v-7.087Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 697.143v6.977l-12.982-.95v-7.016l12.982.989Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 705.119 12.982.909v7.556l-12.982-.869v-7.596Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 706.308 13.981.98v7.496l-13.98-.94v-7.536Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 707.568 13.981.979v7.436l-13.981-.939v-7.476Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 709.736v7.376l-12.982-.869v-7.416l12.982.909Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 719.111 12.982.83v6.966l-12.982-.789v-7.007Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 720.191 13.981.889v6.906l-13.98-.839v-6.956Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 721.34 13.981.89v6.846l-13.981-.84v-6.896Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 723.309v6.796l-12.982-.789v-6.837l12.982.83Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 732.104 12.982.75v7.366l-12.982-.71v-7.406Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 733.084 13.981.809v7.306l-13.98-.769v-7.346Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 734.123 13.981.81v7.246l-13.981-.77v-7.286Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 735.912v7.186l-12.982-.709v-7.226l12.982.749Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 746.097 12.982.669v6.767l-12.982-.63v-6.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 746.966 13.981.72v6.716l-13.98-.679v-6.757Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 747.896 13.981.719v6.657l-13.981-.68v-6.696Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 749.485v6.606l-12.982-.629v-6.647l12.982.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 761.089 12.982.579v7.236l-12.982-.539v-7.276Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 761.848 13.981.62v7.176l-13.98-.58v-7.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 762.648 13.981.62v7.116l-13.981-.58v-7.156Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 764.027v7.056l-12.982-.54v-7.096l12.982.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 775.081 12.982.5v7.656l-12.982-.45v-7.706Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 775.731 13.981.529v7.606l-13.98-.49v-7.645Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 776.42 13.981.53v7.536l-13.981-.49v-7.576Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 777.6v7.476l-12.982-.45V777.1l12.982.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 789.073 12.982.41v7.077l-12.982-.37v-7.117Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 789.613 13.981.45v7.006l-13.98-.399v-7.057Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 790.183 13.981.449v6.957l-13.981-.4v-7.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 791.172v6.897l-12.982-.37v-6.936l12.982.409Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 803.066 12.982.33v7.506l-12.982-.29v-7.546Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 803.496 13.981.359v7.436l-13.98-.309v-7.486Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 803.956 13.981.359v7.376l-13.981-.309v-7.426Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 804.745v7.316l-12.982-.29v-7.356l12.982.33Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 817.058 12.982.25v6.906l-12.982-.199v-6.957Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 817.378 13.981.27v6.856l-13.98-.22v-6.906Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 817.718 13.981.27v6.796l-13.981-.22v-6.846Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 818.308v6.746l-12.982-.2v-6.796l12.982.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m72.899 831.051 12.982.16v7.346l-12.982-.12v-7.386Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m89.875 831.261 13.981.18v7.286l-13.98-.13v-7.336Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m107.85 831.49 13.981.18v7.217l-13.981-.13v-7.267Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M138.807 831.88v7.166l-12.982-.12v-7.206l12.982.16Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#fff"
        d="m104.855 498.73 9.986-6.586v7.946l-9.986 6.446v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 489.505 10.985-7.246v8.166l-10.985 7.086v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 479.621 13.981-9.225v8.425l-13.981 9.025v-8.225Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 467.757 14.96-9.864v8.685l-14.96 9.665v-8.486Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 443.38v9.006l-17.046 11.004v-8.766l17.046-11.244Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 514.722 9.986-6.297v7.946l-9.986 6.157v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 505.907 10.985-6.927v8.166l-10.985 6.766v-8.005Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 496.462 13.981-8.816v8.416l-13.981 8.615v-8.215Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 485.128 14.96-9.435v8.695l-14.96 9.215v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 461.831v9.005l-17.046 10.504v-8.765l17.046-10.744Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 530.713 9.986-6.006v7.955l-9.986 5.857v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 522.308 10.985-6.607v8.166l-10.985 6.446v-8.005Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 513.303 13.981-8.406v8.416l-13.981 8.205v-8.215Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 502.499 14.96-8.996v8.686l-14.96 8.785v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 480.281v9.005l-17.046 10.004v-8.765l17.046-10.244Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 546.704 9.986-5.706v7.945l-9.986 5.567v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 538.709 10.985-6.287v8.166l-10.985 6.127v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 530.144 13.981-7.996v8.425l-13.981 7.796v-8.225Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 519.859 14.96-8.555v8.705l-14.96 8.336v-8.486Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 498.73v9.016l-17.046 9.504v-8.775l17.046-9.745Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 562.696 9.986-5.417v7.946l-9.986 5.277v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 555.11 10.985-5.957v8.156l-10.985 5.807v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 546.984 13.981-7.586v8.416l-13.981 7.386v-8.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 537.23 14.96-8.116v8.685l-14.96 7.906v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 517.181v9.005l-17.046 9.005v-8.765l17.046-9.245Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 578.687 9.986-5.127v7.946l-9.986 4.987v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 571.511 10.985-5.637v8.166l-10.985 5.477v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 563.825 13.981-7.176v8.416l-13.981 6.976v-8.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 554.6 14.96-7.685v8.695l-14.96 7.466V554.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 535.631v9.005l-17.046 8.505v-8.765l17.046-8.745Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 594.679 9.986-4.838v7.956l-9.986 4.687v-7.805Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 587.912 10.985-5.317v8.166l-10.985 5.157v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 580.666 13.981-6.766v8.425l-13.981 6.557v-8.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 571.961 14.96-7.236v8.695l-14.96 7.026v-8.485Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 554.081v9.015l-17.046 8.005v-8.775l17.046-8.245Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 610.67 9.986-4.537v7.945l-9.986 4.398v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 604.313 10.985-4.997v8.166l-10.985 4.837v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 597.507 13.981-6.356v8.415l-13.981 6.157v-8.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 589.331 14.96-6.806v8.695l-14.96 6.587v-8.476Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 572.531v9.005l-17.046 7.506v-8.765l17.046-7.746Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 626.661 9.986-4.247v7.945l-9.986 4.108v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 620.715 10.985-4.668v8.156l-10.985 4.517v-8.005Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 614.348 13.981-5.947v8.416l-13.981 5.747v-8.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 606.702 14.96-6.367v8.686l-14.96 6.156v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 590.981v9.005l-17.046 7.006v-8.765l17.046-7.246Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 642.653 9.986-3.958v7.956l-9.986 3.807v-7.805Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 637.116 10.985-4.348v8.156l-10.985 4.197v-8.005Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 631.179 13.981-5.537v8.425l-13.981 5.337v-8.225Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 624.063 14.96-5.927v8.695l-14.96 5.707v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 609.431v9.005l-17.046 6.506v-8.765l17.046-6.746Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 658.644 9.986-3.658v7.946l-9.986 3.518v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 653.517 10.985-4.028v8.166l-10.985 3.867v-8.005Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 648.02 13.981-5.127v8.425l-13.981 4.927v-8.225Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 641.433 14.96-5.487v8.696l-14.96 5.267v-8.476Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 627.881v9.015l-17.046 6.007v-8.776l17.046-6.246Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 674.636 9.986-3.369v7.946l-9.986 3.228v-7.805Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 669.918 10.985-3.708v8.166l-10.985 3.548v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 664.861 13.981-4.718v8.426l-13.981 4.517v-8.225Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 658.794 14.96-5.047v8.695l-14.96 4.838v-8.486Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 646.331v9.005l-17.046 5.507v-8.755l17.046-5.757Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 690.627 9.986-3.079v7.946l-9.986 2.938v-7.805Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 686.319 10.985-3.388v8.166l-10.985 3.228v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 681.702 13.981-4.308v8.425l-13.981 4.108v-8.225Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 676.165 14.96-4.608v8.685l-14.96 4.398v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 664.781v9.005l-17.046 5.007v-8.755l17.046-5.257Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 706.618 9.986-2.788v7.955l-9.986 2.639v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 702.72 10.985-3.058v8.165l-10.985 2.899v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 698.543 13.981-3.898v8.425l-13.981 3.698v-8.225Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 693.535 14.96-4.178v8.706l-14.96 3.948v-8.476Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 683.231v9.015l-17.046 4.507v-8.765l17.046-4.757Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 722.609 9.986-2.488v7.946l-9.986 2.348v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 719.121 10.985-2.738v8.165l-10.985 2.579v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 715.383 13.981-3.488v8.426l-13.981 3.288v-8.226Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 710.896 14.96-3.728v8.695l-14.96 3.518v-8.485Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 701.681v9.015l-17.046 4.008v-8.765l17.046-4.258Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 738.601 9.986-2.199v7.946l-9.986 2.059v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 735.522 10.985-2.418v8.165l-10.985 2.259v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 732.224 13.981-3.078v8.415l-13.981 2.879v-8.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 728.266 14.96-3.298v8.696l-14.96 3.078v-8.476Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 720.131v9.005l-17.046 3.508v-8.755l17.046-3.758Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 754.592 9.986-1.909v7.956l-9.986 1.759v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 751.924 10.985-2.099v8.165l-10.985 1.939v-8.005Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 749.065 13.981-2.669v8.426l-13.981 2.469v-8.226Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 745.637 14.96-2.858v8.695l-14.96 2.638v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 738.581v9.015l-17.046 3.008v-8.765l17.046-3.258Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 770.583 9.986-1.609v7.946l-9.986 1.469v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 768.325 10.985-1.769v8.155l-10.985 1.62v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 765.906 13.981-2.259v8.426l-13.981 2.059v-8.226Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 763.008 14.96-2.419v8.695l-14.96 2.199v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 757.041v9.005l-17.046 2.509v-8.765l17.046-2.749Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 786.575 9.986-1.319v7.945l-9.986 1.18v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 784.726 10.985-1.449v8.155l-10.985 1.299v-8.005Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 782.747 13.981-1.849v8.415l-13.981 1.65v-8.216Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 780.368 14.96-1.979v8.696l-14.96 1.759v-8.476Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 775.481v9.005l-17.046 2.009v-8.755l17.046-2.259Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 802.566 9.986-1.029v7.946l-9.986.889v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 801.127 10.985-1.129v8.165l-10.985.97v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 799.588 13.981-1.439v8.415l-13.981 1.239v-8.215Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 797.739 14.96-1.549v8.695l-14.96 1.329v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 793.931v9.005l-17.046 1.509v-8.755l17.046-1.759Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 818.557 9.986-.739v7.956l-9.986.589v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 817.528 10.985-.809v8.165l-10.985.65v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 816.429 13.981-1.03v8.426l-13.981.819v-8.215Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 815.099 14.96-1.099v8.695l-14.96.89v-8.486Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 812.381v9.015l-17.046 1.009v-8.765l17.046-1.259Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m104.855 834.549 9.986-.44v7.946l-9.986.3v-7.806Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m118.835 833.929 10.985-.479v8.155l-10.985.33v-8.006Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m133.814 833.27 13.981-.62v8.426l-13.981.409v-8.215Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m151.789 832.47 14.96-.659v8.695l-14.96.45v-8.486Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M188.738 830.841v9.005l-17.046.51v-8.765l17.046-.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 443.26 14.899 3.319v8.515l-14.899-3.248v-8.586Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 447.718 17.326 3.858v8.415l-17.326-3.778v-8.495Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 455.924v8.325l-14.38-3.138v-8.386l14.38 3.199Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 462.25 14.899 3.169v9.095l-14.899-3.089v-9.175Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 466.508 17.326 3.688v8.985l-17.326-3.598v-9.075Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 474.344v8.895l-14.38-2.988v-8.966l14.38 3.059Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 480.24 14.899 3.019v8.645l-14.899-2.948v-8.716Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 484.308 17.326 3.508v8.546l-17.326-3.438v-8.616Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 491.784v8.446l-14.38-2.849v-8.515l14.38 2.918Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 498.231 14.899 2.878v8.176l-14.899-2.809v-8.245Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 502.109 17.326 3.338v8.085l-17.326-3.268v-8.155Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 509.225v7.995l-14.38-2.718v-8.056l14.38 2.779Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 517.22 14.899 2.729v8.775l-14.899-2.658v-8.846Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 520.888 17.326 3.169v8.675l-17.326-3.088v-8.756Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 527.635v8.575l-14.38-2.558v-8.646l14.38 2.629Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 535.211 14.899 2.579v9.344l-14.899-2.508v-9.415Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 538.689 17.326 2.998v9.225l-17.326-2.918v-9.305Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 545.076v9.125l-14.38-2.419v-9.195l14.38 2.489Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 554.2 14.899 2.429v8.905l-14.899-2.358V554.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 557.469 17.326 2.828v8.795l-17.326-2.738v-8.885Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 563.485v8.706l-14.38-2.279v-8.775l14.38 2.348Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 572.191 14.899 2.289v8.445l-14.899-2.219v-8.515Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 575.269 17.326 2.659v8.345l-17.326-2.578v-8.426Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 580.926v8.256l-14.38-2.139v-8.326l14.38 2.209Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 591.18 14.899 2.139v8.006l-14.899-2.069v-8.076Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 594.049 17.326 2.489v7.915l-17.326-2.408v-7.996Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 599.336v7.836l-14.38-1.999v-7.896l14.38 2.059Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 609.171 14.899 1.989v8.575l-14.899-1.919v-8.645Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 611.849 17.326 2.319v8.475l-17.326-2.238v-8.556Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 616.777v8.385l-14.38-1.859v-8.445l14.38 1.919Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M202.719 628.161 217.618 630v8.145l-14.899-1.769v-8.215Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 630.639 17.326 2.139v8.046l-17.326-2.059v-8.126Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 635.187v7.965l-14.38-1.709v-8.035l14.38 1.779Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 646.151 14.899 1.699v8.705l-14.899-1.629v-8.775Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 648.43 17.326 1.979v8.595l-17.326-1.889v-8.685Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 652.627v8.516l-14.38-1.569v-8.586l14.38 1.639Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 665.14 14.899 1.55v8.275l-14.899-1.479v-8.346Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 667.219 17.326 1.799v8.176l-17.326-1.719v-8.256Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 671.047v8.086l-14.38-1.429v-8.146l14.38 1.489Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 683.131 14.899 1.399v8.845l-14.899-1.329v-8.915Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 685.02 17.326 1.629v8.735l-17.326-1.549v-8.815Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 688.488v8.635l-14.38-1.279v-8.705l14.38 1.349Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 702.121 14.899 1.249v8.405l-14.899-1.179v-8.475Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 703.8 17.326 1.459v8.305l-17.326-1.379V703.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 706.898v8.216l-14.38-1.14v-8.285l14.38 1.209Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 720.111 14.899 1.109v8.965l-14.899-1.029v-9.045Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 721.6 17.326 1.289v8.856l-17.326-1.2V721.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 724.338v8.766l-14.38-1v-8.835l14.38 1.069Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 738.101 14.899.96v8.515l-14.899-.899v-8.576Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 739.4 17.326 1.12v8.405l-17.326-1.049V739.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 741.779v8.316l-14.38-.86v-8.385l14.38.929Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 757.091 14.899.809v9.105l-14.899-.739v-9.175Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 758.18 17.326.95v8.985l-17.326-.86v-9.075Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 760.189v8.895l-14.38-.709v-8.965l14.38.779Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 775.081 14.899.67v9.664l-14.899-.589v-9.745Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 775.981 17.326.769v9.555l-17.326-.69v-9.634Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 777.63v9.445l-14.38-.57v-9.515l14.38.64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 794.071 14.899.52v9.224l-14.899-.439v-9.305Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 794.76 17.326.6v9.125l-17.326-.51v-9.215Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 796.04v9.025l-14.38-.43v-9.095l14.38.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 812.061 14.899.37v8.775l-14.899-.3v-8.845Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 812.561 17.326.43v8.675l-17.326-.35v-8.755Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 813.48v8.576l-14.38-.29v-8.645l14.38.359Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m202.719 831.051 14.899.22v8.335l-14.899-.15v-8.405Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m222.771 831.351 17.326.249v8.246l-17.326-.18v-8.315Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M259.64 831.89v8.156l-14.38-.15v-8.216l14.38.21Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#fff"
        d="m253.648 591.18 13.981-5.167v9.975l-13.981 4.977v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 579.007v10.234l-13.98 4.968v-10.035l13.98-5.167Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 571.631v10.504l-14.979 5.327v-10.294l14.979-5.537Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 564.625v10.754l-13.98 4.977v-10.574l13.98-5.157Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 556.879v11.034l-15.977 5.687v-10.824l15.977-5.897Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 548.933v11.334l-15.499 5.517V554.66l15.499-5.727Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 541.018v11.623l-15.499 5.507v-11.413l15.499-5.717Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 532.532v11.934l-15.978 5.686v-11.723l15.978-5.897Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 522.567v12.304l-17.976 6.396v-12.053l17.976-6.647Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 512.983v12.643l-17.976 6.396v-12.403l17.976-6.636Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 503.018v13.023l-17.975 6.397v-12.774l17.975-6.646Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 611.17 13.981-4.778v9.975l-13.981 4.587v-9.784Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 599.906v10.234l-13.98 4.588v-10.045l13.98-4.777Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 593.079v10.505l-14.979 4.917v-10.304l14.979-5.118Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 586.593v10.764l-13.98 4.588V591.37l13.98-4.777Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 579.427v11.044l-15.977 5.247v-10.824l15.977-5.467Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 572.081v11.334l-15.499 5.087v-11.124l15.499-5.297Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 564.755v11.613l-15.499 5.088v-11.404l15.499-5.297Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 556.909v11.923l-15.978 5.248v-11.714l15.978-5.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 547.694v12.283l-17.976 5.907v-12.053l17.976-6.137Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 538.819v12.643l-17.976 5.897v-12.404l17.976-6.136Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 529.604v13.003l-17.975 5.907V535.74l17.975-6.136Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 631.159 13.981-4.388v9.965l-13.981 4.207v-9.784Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 620.804v10.235l-13.98 4.198v-10.035l13.98-4.398Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 614.528v10.504l-14.979 4.508v-10.305l14.979-4.707Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 608.571v10.754l-13.98 4.208v-10.574l13.98-4.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 601.984v11.034l-15.977 4.808v-10.824l15.977-5.018Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 595.228v11.334l-15.499 4.658v-11.124l15.499-4.868Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 588.492v11.623l-15.499 4.658v-11.414l15.499-4.867Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 581.276v11.933l-15.978 4.798v-11.714l15.978-5.017Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 572.8v12.304l-17.976 5.397v-12.054l17.976-5.647Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 564.645v12.653l-17.976 5.397v-12.403l17.976-5.647Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 556.169v13.023l-17.975 5.397v-12.773l17.975-5.647Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 651.148 13.981-4.008v9.975l-13.981 3.818v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 641.703v10.234l-13.98 3.818v-10.044l13.98-4.008Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 635.976v10.504l-14.979 4.088v-10.294l14.979-4.298Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 630.539v10.764l-13.98 3.818v-10.574l13.98-4.008Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 624.532v11.044l-15.977 4.358V629.11l15.977-4.578Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 618.376v11.334l-15.499 4.227v-11.124l15.499-4.437Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 612.229v11.624l-15.499 4.227v-11.413l15.499-4.438Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 605.643v11.933l-15.978 4.368V610.22l15.978-4.577Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 597.917v12.293l-17.976 4.907v-12.053l17.976-5.147Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 590.471v12.653l-17.976 4.907v-12.403l17.976-5.157Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 582.745v13.013l-17.975 4.907v-12.763l17.975-5.157Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 671.137 13.981-3.618v9.975l-13.981 3.428v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 662.602v10.234l-13.98 3.428V666.22l13.98-3.618Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 657.435v10.494l-14.979 3.678v-10.295l14.979-3.877Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 652.517v10.754l-13.98 3.438v-10.574l13.98-3.618Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 647.09v11.034l-15.977 3.928v-10.824l15.977-4.138Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 641.523v11.334l-15.499 3.798v-11.124l15.499-4.008Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 635.966v11.624l-15.499 3.798v-11.414l15.499-4.008Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 630.019v11.934l-15.978 3.918v-11.714l15.978-4.138Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 623.033v12.304l-17.976 4.407v-12.053l17.976-4.658Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 616.307v12.653l-17.976 4.408v-12.404l17.976-4.657Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 609.331v13.013l-17.975 4.407v-12.773l17.975-4.647Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 691.126 13.981-3.238v9.975l-13.981 3.048v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 683.5v10.235l-13.98 3.038v-10.034l13.98-3.239Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 678.883v10.494l-14.979 3.269v-10.305l14.979-3.458Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 674.485v10.765l-13.98 3.038v-10.564l13.98-3.239Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 669.638v11.044l-15.977 3.478v-10.824l15.977-3.698Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 664.661v11.333l-15.499 3.379v-11.124l15.499-3.588Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 659.703v11.624l-15.499 3.368v-11.414l15.499-3.578Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 654.386v11.934l-15.978 3.478v-11.714l15.978-3.698Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 648.15v12.293l-17.976 3.918v-12.054l17.976-4.157Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 642.143v12.643l-17.976 3.918v-12.403l17.976-4.158Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 635.896v13.023l-17.975 3.908v-12.773l17.975-4.158Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 711.115 13.981-2.848v9.975l-13.981 2.658v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 704.399v10.235l-13.98 2.658v-10.044l13.98-2.849Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 700.331v10.495l-14.979 2.858V703.38l14.979-3.049Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 696.463v10.755l-13.98 2.658v-10.564l13.98-2.849Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 692.186v11.044l-15.977 3.038v-10.824l15.977-3.258Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 687.808v11.334l-15.499 2.948v-11.124l15.499-3.158Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 683.44v11.614l-15.499 2.949v-11.404l15.499-3.159Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 678.763v11.924l-15.978 3.038v-11.714l15.978-3.248Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 673.266v12.293l-17.976 3.418v-12.053l17.976-3.658Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 667.979v12.643l-17.976 3.418v-12.403l17.976-3.658Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 662.482v13.003l-17.975 3.418V666.14l17.975-3.658Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 731.105 13.981-2.459v9.965l-13.981 2.278v-9.784Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 725.298v10.234l-13.98 2.269v-10.035l13.98-2.468Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 721.78v10.504l-14.979 2.429v-10.295l14.979-2.638Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 718.432v10.764l-13.98 2.269V720.9l13.98-2.468Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 714.744v11.044l-15.977 2.598v-10.834l15.977-2.808Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 710.956v11.333l-15.499 2.519v-11.124l15.499-2.728Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 707.178v11.623l-15.499 2.519v-11.414l15.499-2.728Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 703.13v11.934l-15.978 2.598v-11.714l15.978-2.818Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 698.382v12.294l-17.976 2.928v-12.063l17.976-3.159Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 693.805v12.653l-17.976 2.918v-12.403l17.976-3.168Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 689.047v13.023l-17.975 2.919v-12.773l17.975-3.169Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 751.094 13.981-2.079v9.975l-13.981 1.889v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 746.197v10.234l-13.98 1.889v-10.045l13.98-2.078Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 743.228v10.504l-14.979 2.019v-10.294l14.979-2.229Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 740.41v10.754l-13.98 1.889v-10.564l13.98-2.079Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 737.292v11.044l-15.977 2.158V739.67l15.977-2.378Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 734.103v11.324l-15.499 2.099v-11.124l15.499-2.299Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 730.915v11.623l-15.499 2.089v-11.413l15.499-2.299Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 727.507v11.923l-15.978 2.159v-11.714l15.978-2.368Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 723.499v12.293l-17.976 2.429v-12.054l17.976-2.668Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 719.641v12.643l-17.976 2.429v-12.404l17.976-2.668Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 715.633v13.003l-17.975 2.429v-12.763l17.975-2.669Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 771.083 13.981-1.689v9.975l-13.981 1.499v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 767.095v10.235l-13.98 1.499v-10.045l13.98-1.689Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 764.677v10.504l-14.979 1.609v-10.295l14.979-1.818Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 762.388v10.754l-13.98 1.499v-10.564l13.98-1.689Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 759.849v11.044l-15.977 1.709v-10.824l15.977-1.929Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 757.25v11.324l-15.499 1.669V759.12l15.499-1.87Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 754.652v11.624l-15.499 1.659v-11.414l15.499-1.869Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 751.874v11.933l-15.978 1.719v-11.724l15.978-1.928Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 748.605v12.304l-17.976 1.929v-12.054l17.976-2.179Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 745.467v12.653l-17.976 1.929v-12.403l17.976-2.179Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 742.209v13.013l-17.975 1.929v-12.773l17.975-2.169Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 791.072 13.981-1.309v9.975l-13.981 1.119v-9.785Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 787.994v10.234l-13.98 1.11v-10.035l13.98-1.309Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 786.135v10.494l-14.979 1.2v-10.305l14.979-1.389Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 784.356v10.754l-13.98 1.119v-10.564l13.98-1.309Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 782.397v11.044l-15.977 1.269v-10.814l15.977-1.499Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 780.398v11.324l-15.499 1.239v-11.124l15.499-1.439Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 778.389v11.624l-15.499 1.229v-11.404l15.499-1.449Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 776.25v11.924l-15.978 1.279v-11.714l15.978-1.489Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 773.732v12.293l-17.976 1.429v-12.043l17.976-1.679Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 771.303v12.643l-17.976 1.439v-12.403l17.976-1.679Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 768.784v13.013l-17.975 1.43v-12.763l17.975-1.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 811.062 13.981-.92v9.975l-13.981.729v-9.784Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 808.893v10.234l-13.98.73v-10.045l13.98-.919Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 807.583v10.495l-14.979.779v-10.294l14.979-.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 806.334v10.754l-13.98.73v-10.564l13.98-.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 804.955v11.034l-15.977.839v-10.824l15.977-1.049Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 803.545v11.324l-15.499.81v-11.114l15.499-1.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 802.136v11.604l-15.499.82v-11.414l15.499-1.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 800.617v11.924l-15.978.839v-11.703l15.978-1.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 798.848v12.284l-17.976.939v-12.043l17.976-1.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 797.139v12.633l-17.976.94v-12.394l17.976-1.179Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 795.37v12.993l-17.975.939v-12.753l17.975-1.179Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m253.648 831.051 13.981-.53v9.965l-13.981.349v-9.784Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M286.602 829.791v10.235l-13.98.34v-10.035l13.98-.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M306.575 829.032v10.494l-14.979.37v-10.295l14.979-.569Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M325.548 828.302v10.764l-13.98.34v-10.564l13.98-.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M346.519 827.503v11.044l-15.977.389v-10.824l15.977-.609Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M368.01 826.683v11.334l-15.499.38v-11.124l15.499-.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M389.46 825.863v11.624l-15.499.38v-11.414l15.499-.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M412.428 824.994v11.923l-15.978.39v-11.703l15.978-.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M439.391 823.965v12.283l-17.976.45v-12.054l17.976-.679Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M465.355 822.965v12.643l-17.976.45v-12.403l17.976-.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M492.317 821.936v13.013l-17.975.439v-12.763l17.975-.689Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 496.232 21.969 4.577v13.803l-21.969-4.398v-13.982Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 502.678 25.315 5.267v13.533l-25.315-5.067v-13.733Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 509.824 24.616 5.117v13.263l-24.616-4.927v-13.453Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 516.821 27.962 5.816v12.973l-27.962-5.597v-13.192Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 524.516 23.967 4.988v12.703l-23.967-4.798v-12.893Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 535.74v12.463l-20.971-4.197v-12.633l20.971 4.367Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 523.217 21.969 4.238v11.534l-21.969-4.088v-11.684Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 529.184 25.315 4.877v11.304l-25.315-4.707v-11.474Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 535.8 24.616 4.738v11.084l-24.616-4.588V535.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 542.277 27.962 5.387v10.824l-27.962-5.197v-11.014Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 549.393 23.967 4.617v10.605l-23.967-4.458v-10.764Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 559.787v10.405l-20.971-3.898V555.75l20.971 4.037Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 550.202 21.969 3.898v13.683l-21.969-3.718v-13.863Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 555.689 25.315 4.488v13.413l-25.315-4.288v-13.613Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 561.766 24.616 4.368v13.143l-24.616-4.168v-13.343Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 567.723 27.962 4.957v12.853l-27.962-4.737v-13.073Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 574.28 23.967 4.247v12.583l-23.967-4.057V574.28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 583.834v12.344l-20.971-3.549v-12.513l20.971 3.718Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 577.188 21.969 3.548v12.513l-21.969-3.388v-12.673Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 582.195 25.315 4.088v12.273l-25.315-3.917v-12.444Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 587.742 24.616 3.978v12.024l-24.616-3.808v-12.194Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 593.179 27.962 4.518v11.753l-27.962-4.317v-11.954Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 599.146 23.967 3.878v11.514l-23.967-3.698v-11.694Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 607.871v11.294l-20.971-3.238v-11.444l20.971 3.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 604.173 21.969 3.209v12.453l-21.969-3.048v-12.614Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 608.701 25.315 3.698v12.203l-25.315-3.518v-12.383Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 613.718 24.616 3.598v11.964l-24.616-3.428v-12.134Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 618.625 27.962 4.098v11.684l-27.962-3.878v-11.904Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 624.032 23.967 3.509v11.443l-23.967-3.328v-11.624Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 631.918v11.234l-20.971-2.918V628.85l20.971 3.068Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 631.159 21.969 2.868v11.284l-21.969-2.728v-11.424Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 635.207 25.315 3.308v11.054l-25.315-3.139v-11.223Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 639.694 24.616 3.218v10.825l-24.616-3.049v-10.994Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 644.082 27.962 3.658v10.584l-27.962-3.468v-10.774Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 648.919 23.967 3.129v10.374l-23.967-2.979v-10.524Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 655.965v10.175l-20.971-2.609v-10.304l20.971 2.738Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 658.144 21.969 2.529v11.224l-21.969-2.389v-11.364Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 661.712 25.315 2.919v10.994l-25.315-2.749v-11.164Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 665.66 24.616 2.839v10.774l-24.616-2.669V665.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 669.538 27.962 3.218v10.535l-27.962-3.039v-10.714Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 673.786 23.967 2.768v10.314l-23.967-2.598v-10.484Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 680.002v10.125l-20.971-2.279v-10.264l20.971 2.418Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 686.129 21.969 2.179v12.383l-21.969-2.019v-12.543Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 689.197 25.315 2.509v12.143l-25.315-2.328v-12.324Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 692.595 24.616 2.439v11.904l-24.616-2.269v-12.074Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 695.934 27.962 2.768v11.624l-27.962-2.569v-11.823Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 699.592 23.967 2.379v11.383l-23.967-2.198v-11.564Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 704.939v11.174l-20.971-1.929V702.86l20.971 2.079Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 713.115 21.969 1.839v13.422l-21.969-1.669v-13.592Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 715.703 25.315 2.119v13.153l-25.315-1.919v-13.353Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 718.572 24.616 2.058v12.893l-24.616-1.869v-13.082Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 721.38 27.962 2.339v12.613l-27.962-2.129V721.38Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 724.478 23.967 1.999v12.354l-23.967-1.819v-12.534Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 728.986v12.113l-20.971-1.589v-12.283l20.971 1.759Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 740.1 21.969 1.499v12.253l-21.969-1.339V740.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 742.209 25.315 1.729v12.003l-25.315-1.539v-12.193Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 744.547 24.616 1.679V758l-24.616-1.509v-11.944Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 746.836 27.962 1.909v11.504l-27.962-1.709v-11.704Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 749.355 23.967 1.639v11.264l-23.967-1.459v-11.444Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 753.033v11.054l-20.971-1.279v-11.204l20.971 1.429Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 767.085 21.969 1.16v12.183l-21.969-.999v-12.344Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 768.714 25.315 1.33v11.953l-25.315-1.159v-12.124Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 770.523 24.616 1.29v11.713l-24.616-1.119v-11.884Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 772.292 27.962 1.47v11.444l-27.962-1.27v-11.644Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 774.231 23.967 1.26v11.214l-23.967-1.09v-11.384Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 777.07v11.004l-20.971-.96V775.97l20.971 1.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 794.071 21.969.819v13.233l-21.969-.65v-13.402Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 795.22 25.315.94v12.973l-25.315-.75V795.22Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 796.489 24.616.92v12.713l-24.616-.73v-12.903Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 797.739 27.962 1.039v12.433l-27.962-.829v-12.643Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 799.118 23.967.889v12.174l-23.967-.71v-12.353Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 801.117v11.943l-20.971-.619v-12.104l20.971.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m522.276 821.056 21.969.48v13.173l-21.969-.31v-13.343Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m553.233 821.726 25.315.549v12.913l-25.315-.359v-13.103Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m587.535 822.465 24.616.54v12.653l-24.616-.349v-12.844Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.138 823.195 27.962.609v12.364l-27.962-.39v-12.583Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m658.087 823.995 23.967.519v12.114l-23.967-.33v-12.303Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M712.013 825.164v11.883l-20.971-.289v-12.044l20.971.45Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#fff"
        d="m1275.75 106.962 43.42 33.062v22.518l-43.42-32.023v-23.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 177.294v21.338l-34.54-25.476v-22.168l34.54 26.306Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.75 154.337 43.42 30.983v22.518l-43.42-29.944v-23.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 220.241v21.338l-34.54-23.817v-22.168l34.54 24.647Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.75 198.713 43.42 28.894v22.528l-43.42-27.865v-23.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 260.179v21.349l-34.54-22.168v-22.168l34.54 22.987Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.75 246.087 43.42 26.815v22.518l-43.42-25.776v-23.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 303.116v21.349l-34.54-20.509v-22.168l34.54 21.328Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.75 292.462 43.42 24.727v22.517l-43.42-23.687v-23.557Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 345.063v21.339l-34.54-18.84v-22.178l34.54 19.679Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.75 337.837 43.42 22.648v22.518l-43.42-21.608v-23.558Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 386.001v21.349l-34.54-17.191v-22.168l34.54 18.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 427.949v21.338l-92.35-41.517v-23.558l92.35 43.737Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 471.885v21.348l-92.35-37.09v-23.557l92.35 39.299Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.1 511.833v21.339l-92.35-32.653v-23.557l92.35 34.871Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 164.041 55.13-24.187v22.129l-55.13 23.447v-21.389Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 104.573v23.218l-61.48 26.146v-22.388l61.48-26.976Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 206.468 55.13-22.717v22.138l-55.13 21.968v-21.389Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 150.629v23.217l-61.48 24.507v-22.388l61.48-25.336Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 248.896 55.13-21.239v22.138l-55.13 20.489v-21.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 196.694v23.217l-61.48 22.848v-22.388l61.48-23.677Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 291.323 55.13-19.76v22.128l-55.13 19.02v-21.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 242.749v23.217l-61.48 21.209v-22.388l61.48-22.038Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 333.75 55.13-18.281v22.129l-55.13 17.54V333.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 288.814v23.207l-61.48 19.56v-22.378l61.48-20.389Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 376.177 55.13-16.801v22.128l-55.13 16.061v-21.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 334.869v23.217l-61.48 17.911v-22.388l61.48-18.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 418.604 55.13-15.332v22.138l-55.13 14.582v-21.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 380.924v23.227l-61.48 16.262v-22.398l61.48-17.091Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 461.031 55.13-13.843v22.128l-55.13 13.103v-21.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 426.989v23.208l-61.48 14.622v-22.388l61.48-15.442Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1107.26 503.458 55.13-12.374v22.139l-55.13 11.623v-21.388Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.78 473.044v23.218l-61.48 12.963v-22.388l61.48-13.793Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#fff"
        d="m585.188 612.169 22.968-5.337v14.642l-22.968 5.028v-14.333Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 603.584 23.967-5.567v15.152l-23.967 5.247v-14.832Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 594.759 27.962-6.497v15.722l-27.962 6.126v-15.351Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 585.014 28.96-6.726v16.301l-28.96 6.336v-15.911Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 565.884v17.021l-36.379 7.966V574.34l36.379-8.456Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 640.154 22.968-4.727v14.642l-22.968 4.417v-14.332Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 632.538 23.967-4.937v15.162l-23.967 4.607v-14.832Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 624.722 27.962-5.756v15.721l-27.962 5.377v-15.342Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 616.087 28.96-5.967v16.302l-28.96 5.577v-15.912Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 599.126v17.021l-36.379 7.006v-16.531l36.379-7.496Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 668.139 22.968-4.128v14.642l-22.968 3.818v-14.332Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 661.502 23.967-4.307v15.152l-23.967 3.987v-14.832Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 654.686 27.962-5.027v15.721l-27.962 4.648v-15.342Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 647.15 28.96-5.207v16.301l-28.96 4.818V647.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 632.358v17.021l-36.379 6.047v-16.531l36.379-6.537Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 696.124 22.968-3.518v14.642l-22.968 3.208v-14.332Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 690.457 23.967-3.668v15.152l-23.967 3.348v-14.832Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 684.64 27.962-4.278v15.722l-27.962 3.908V684.64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 678.213 28.96-4.437v16.301l-28.96 4.048v-15.912Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 665.6v17.021l-36.379 5.087v-16.531l36.379-5.577Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 724.109 22.968-2.919v14.642l-22.968 2.609v-14.332Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 719.421 23.967-3.038v15.152l-23.967 2.718v-14.832Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 714.604 27.962-3.548v15.721l-27.962 3.168v-15.341Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 709.287 28.96-3.678v16.301l-28.96 3.288v-15.911Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 698.842v17.021l-36.379 4.128V703.46l36.379-4.618Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 752.093 22.968-2.308v14.642l-22.968 1.999v-14.333Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 748.376 23.967-2.409v15.162l-23.967 2.079v-14.832Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 744.568 27.962-2.809v15.712l-27.962 2.439v-15.342Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 740.35 28.96-2.909v16.302l-28.96 2.518V740.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 732.074v17.021l-36.379 3.168v-16.531l36.379-3.658Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 780.078 22.968-1.699v14.643l-22.968 1.389v-14.333Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 777.34 23.967-1.779v15.162l-23.967 1.449V777.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 774.532 27.962-2.079v15.721l-27.962 1.699v-15.341Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 771.413 28.96-2.139v16.301l-28.96 1.75v-15.912Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 765.316v17.021l-36.379 2.209v-16.531l36.379-2.699Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 808.063 22.968-1.099v14.642l-22.968.79v-14.333Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 806.304 23.967-1.149v15.152l-23.967.819v-14.822Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 804.485 27.962-1.329v15.721l-27.962.96v-15.352Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 802.486 28.96-1.379v16.301l-28.96.99v-15.912Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 798.558v17.021l-36.379 1.25v-16.532l36.379-1.739Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m585.188 836.048 22.968-.489v14.642l-22.968.18v-14.333Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m622.137 835.259 23.967-.51v15.152l-23.967.19v-14.832Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m660.084 834.449 27.962-.6v15.722l-27.962.22v-15.342Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m702.026 833.55 28.96-.62v16.311l-28.96.22V833.55Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M784.342 831.791v17.03l-36.379.28V832.57l36.379-.779Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 566.194 32.955 6.666v13.113l-32.955-6.356v-13.423Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 583.555v12.623l-32.954-6.357v-12.933l32.954 6.667Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 599.176 32.955 5.907v16.191l-32.955-5.537v-16.561Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 614.578v15.581l-32.954-5.536v-15.952l32.954 5.907Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 632.158 32.955 5.158v16.151l-32.955-4.787v-16.522Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 645.601v15.542l-32.954-4.778v-15.921l32.954 5.157Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 665.141 32.955 4.407v17.141l-32.955-4.008v-17.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 676.624v16.501l-32.954-4.007v-16.901l32.954 4.407Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 699.122 32.955 3.638v18.191l-32.955-3.209v-18.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 708.597v17.511l-32.954-3.209v-17.94l32.954 3.638Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 732.104 32.955 2.889v17.111l-32.955-2.489v-17.511Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 739.62v16.471l-32.954-2.488v-16.871l32.954 2.888Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 765.087 32.955 2.129v16.041l-32.955-1.759v-16.411Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 770.644v15.431l-32.954-1.759v-15.801l32.954 2.129Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 798.069 32.955 1.379v15.991l-32.955-1.009v-16.361Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 801.667v15.392l-32.954-1.01v-15.761l32.954 1.379Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.868 832.05 32.955.61v17.041l-32.955-.21V832.05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M901.749 833.629v16.412l-32.954-.21V833.02l32.954.609Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#fff"
        d="m889.656 529.104 36.06-8.705v18.93l-36.06 8.215v-18.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 505.207v19.779l-39.945 9.105v-19.239l39.945-9.645Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 565.425 36.06-7.746v18.939l-36.06 7.257v-18.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 544.166v19.779l-39.945 8.046v-19.25l39.945-8.575Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 601.755 36.06-6.786v18.929l-36.06 6.297v-18.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 583.125v19.779l-39.945 6.977v-19.24l39.945-7.516Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 638.075 36.06-5.827v18.93l-36.06 5.337v-18.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 622.084v19.769l-39.945 5.917v-19.229l39.945-6.457Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 674.396 36.06-4.868v18.94l-36.06 4.378v-18.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 661.033v19.789l-39.945 4.857V666.43l39.945-5.397Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 710.716 36.06-3.908v18.94l-36.06 3.418v-18.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 699.992v19.779l-39.945 3.788v-19.24l39.945-4.327Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 747.046 36.06-2.948v18.93l-36.06 2.458v-18.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 738.951v19.779l-39.945 2.728v-19.239l39.945-3.268Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 783.367 36.06-1.989v18.929l-36.06 1.5v-18.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 777.91v19.769l-39.945 1.669v-19.24l39.945-2.198Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.656 819.687 36.06-1.029v18.939l-36.06.54v-18.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.629 816.869v19.779l-39.945.6v-19.24l39.945-1.139Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 507.835 44.06 12.374v19.109l-44.06-11.673v-19.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 536.16v18.2l-38.8-10.274v-18.82l38.8 10.894Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 547.424 44.06 11.014v19.1l-44.06-10.314v-19.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 572.621v18.2l-38.8-9.075v-18.82l38.8 9.695Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 586.003 44.06 9.645v19.1l-44.06-8.945v-19.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 608.081v18.2l-38.8-7.875v-18.82l38.8 8.495Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 624.583 44.06 8.275v19.11l-44.06-7.586v-19.799Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 643.532v18.201l-38.8-6.677v-18.82l38.8 7.296Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 663.162 44.06 6.916v19.11l-44.06-6.217v-19.809Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 678.993v18.2l-38.8-5.477v-18.81l38.8 6.087Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 701.741 44.06 5.547v19.109l-44.06-4.847v-19.809Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 714.444v18.21l-38.8-4.268v-18.829l38.8 4.887Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 740.32 44.06 4.188v19.109l-44.06-3.488V740.32Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 749.905v18.2l-38.8-3.068v-18.82l38.8 3.688Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 778.839 44.06 2.829v19.099l-44.06-2.129v-19.799Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 785.306v18.2l-38.8-1.869v-18.82l38.8 2.489Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.47 817.488 44.06 1.46v19.099l-44.06-.759v-19.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1118.3 820.816v18.201l-38.8-.67v-18.81l38.8 1.279Z"
        className="light"
      />
    </>,
    <>
      <path
        fill="#FFFCFA"
        d="m1084.3 572.111 43.14-7.926v21.648l-43.14 7.346v-21.068Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1145.55 560.857 43.8-8.046v22.488l-43.8 7.456v-21.898Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1208.9 549.213 53.35-9.805v23.488l-53.35 9.075v-22.758Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1084.3 614.538 43.14-6.757v21.669l-43.14 6.166v-21.078Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1145.55 604.953 43.8-6.856v22.498l-43.8 6.266v-21.908Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1208.9 595.038 53.35-8.355v23.487l-53.35 7.626v-22.758Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1084.3 656.975 43.14-5.577v21.658l-43.14 4.997v-21.078Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1145.55 649.049 43.8-5.657v22.488l-43.8 5.077v-21.908Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1208.9 640.864 53.35-6.907v23.488l-53.35 6.176v-22.757Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1331.15 625.052v24.407l-47.59 5.517v-23.767l47.59-6.157Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1354.2 622.074 50.85-6.577v25.397l-50.85 5.896v-24.716Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1441.5 610.78v25.896l-11.46 1.329v-25.746l11.46-1.479Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1084.3 699.412 43.14-4.408v21.659l-43.14 3.817v-21.068Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1145.55 693.155 43.8-4.467v22.488l-43.8 3.877v-21.898Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1208.9 686.689 53.35-5.447v23.467l-53.35 4.727v-22.747Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1283.56 679.063 47.59-4.857v24.396l-47.59 4.218v-23.757Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1354.2 671.847 50.85-5.197v25.406l-50.85 4.507v-24.716Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1441.5 662.932v25.896l-11.46 1.019v-25.746l11.46-1.169Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1084.3 741.839 43.14-3.228v21.658l-43.14 2.649v-21.079Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1145.55 737.251 43.8-3.278v22.488l-43.8 2.699v-21.909Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1208.9 732.504 53.35-3.998v23.477l-53.35 3.279v-22.758Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1283.56 726.917 47.59-3.568v24.407l-47.59 2.928v-23.767Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1354.2 721.62 50.85-3.808v25.406l-50.85 3.119V721.62Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1441.5 715.083v25.896l-11.46.7v-25.736l11.46-.86Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1084.3 784.276 43.14-2.059v21.658l-43.14 1.48v-21.079Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1145.55 781.358 43.8-2.089v22.488l-43.8 1.499v-21.898Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1208.9 778.329 53.35-2.538v23.477l-53.35 1.819v-22.758Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1283.56 774.771 47.59-2.269v24.407l-47.59 1.629v-23.767Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1354.2 771.403 50.85-2.429v25.407l-50.85 1.739v-24.717Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1441.5 767.235v25.896l-11.46.39v-25.736l11.46-.55Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1084.3 826.713 43.14-.889v21.658l-43.14.3v-21.069Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1145.55 825.454 43.8-.9v22.488l-43.8.31v-21.898Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1208.9 824.154 53.35-1.089v23.467l-53.35.37v-22.748Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1283.56 822.625 47.59-.979v24.406l-47.59.33v-23.757Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1354.2 821.176 50.85-1.039v25.396l-50.85.35v-24.707Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1441.5 819.387v25.886l-11.46.08v-25.726l11.46-.24Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1283.22 535.211 47.93-8.816v25.476l-47.93 8.136v-24.796Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1354.12 522.168 50.93-9.365v26.515l-50.93 8.646v-25.796Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1441 506.186v27.026l-10.98 1.869v-26.876l10.98-2.019Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1283.22 584.184 47.93-7.486v25.237l-47.93 6.816v-24.567Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="m1354.12 573.12 50.93-7.956v26.276l-50.93 7.236V573.12Z"
        className="light"
      />
      <path
        fill="#FFFCFA"
        d="M1442 559.397v26.786l-11.98 1.699v-26.616l11.98-1.869Z"
        className="light"
      />
    </>,
  ];
  console.log(lightGroupArrays);
  const bgsvgCode = (
    <svg
      className="home-bg"
      viewBox="0 0 1432 836"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g className="buildings">
        <g className="building">
          <g className="walls">
            <path
              fill="#000"
              d="m745.466 904.511-136.81-5.127V456.753l136.81-50.712v498.47Z"
              className="Vector"
            />
            <path
              fill="#000"
              d="m865.3 899.514-119.834 3.498V405.781l119.834 35.77v457.963Z"
              className="Vector"
            />
          </g>
          {/* Light Group 0 */}
          <g className="lights">
            {lightGroupArrays[0].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="walls">
            <path
              fill="#000"
              d="m908.24 893.517-84.882-2.179V279.849l84.882-38.689v652.357Z"
              className="Vector"
            />
            <path
              fill="#000"
              d="m964.163 899.514-55.923 1.719V240.87l55.923 24.966v633.678Z"
              className="Vector"
            />
          </g>
          {/* Light Group 1 */}
          <g className="lights">
            {lightGroupArrays[1].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="walls">
            <path
              fill="#000"
              d="M67.406 913.266 0 907.729V585.463l67.406-36.68v364.483Z"
              className="Vector"
            />
            <path
              fill="#000"
              d="m144.3 913.266-76.894 1.739V548.703l76.894 11.094v353.469Z"
              className="Vector"
            />
          </g>
          {/* Light Group 2 */}
          <g className="lights">
            {lightGroupArrays[2].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="walls">
            <path
              fill="#000000"
              d="m195.229 907.01-94.868-6.127V491.445l94.868-61.307V907.01Z"
              className="Vector"
            />
            <path
              fill="#000000"
              d="m268.128 903.981-72.899 1.47V429.768l72.899 15.302v458.911Z"
              className="Vector"
            />
          </g>
          {/* Light Group 3 */}
          <g className="lights">
            {lightGroupArrays[3].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="walls">
            <path
              fill="#000"
              d="M511.79 475.573v448.048l-266.63-14.392V582.165l103.856-41.517 87.878-35.131 74.896-29.944Z"
              className="Vector"
            />
            <path
              fill="#000"
              d="M720.501 522.298v396.185L511.79 925V475.203l208.711 47.095Z"
              className="Vector"
            />
          </g>
          {/* Light Group 4 */}
          <g className="lights">
            {lightGroupArrays[4].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="walls">
            <path
              fill="#000"
              d="M1263.75 71.961v844.294l-173.76-5.747V150.559l173.76-78.598Z"
              className="Vector"
            />
            <path
              fill="#000"
              d="M1374.59 158.824v734.693l-110.84 4.598V71.741l17.66 13.883.98.77 92.2 72.43Z"
              className="Vector"
            />
          </g>
          {/* Light Group 5 */}
          <g className="lights">
            {lightGroupArrays[5].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="walls">
            <path
              fill="#000"
              d="m798.393 912.007-220.694-8.255V600.665l220.694-55.25v366.592Z"
              className="Vector"
            />
            <path
              fill="#000"
              d="m914.232 906.92-114.841 3.628V544.706l114.841 25.086V906.92Z"
              className="Vector"
            />
          </g>
          {/* Light Group 6 */}
          <g className="lights">
            {lightGroupArrays[6].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="logo">
            <g className="b">
              <g className="Group">
                <path
                  fill="#682E02"
                  d="M923.719 332.39v168.839l-1.917.49-16.058-4.278V325.454l.159-.07.46.18.1.04 6.521 2.569 10.735 4.217Z"
                  className="Vector"
                />
                <path
                  fill="#682E02"
                  d="m989.627 485.238-19.972-5.857v-81.096l19.972 7.106v79.847Z"
                  className="Vector"
                />
                <path
                  fill="#682E02"
                  d="m965.661 337.777-27.382 10.615-18.265-28.785.21-.08 45.437 18.25Z"
                  className="Vector"
                />
                <path
                  fill="#682E02"
                  d="M977.135 363.693v37.25l-.49-.17v.51l-6.75-2.399v-.399l-16.517-26.106 23.267-8.506.49-.18Z"
                  className="Vector"
                />
              </g>
            </g>
            <g className="c">
              <g className="Group">
                <path
                  fill="#3A0701"
                  d="m923.719 501.229-1.917.49-23.528 6.006-16.277-4.187-1.129-.29-.09-.02.09-.02 24.876-6.517.479-.129.14.04 17.356 4.627Z"
                  className="Vector"
                />
                <path
                  fill="#3A0701"
                  d="m989.627 485.238-7.549 1.919-19.503-5.657-.799-.23-.11-.03.08-.02 7.48-1.969.449-.12v.25l19.952 5.857Z"
                  className="Vector"
                />
                <path
                  fill="#3A0701"
                  d="m948.504 459.142-24.396 6.846-17.206-5.047 16.817-5.117 6.171-1.879.25-.08 12.852-3.908.11.18 5.402 9.005Z"
                  className="Vector"
                />
                <path
                  fill="#3A0701"
                  d="m906.243 460.751 23.647-6.806-6.171 1.879-16.817 5.117h-.01l-.649-.19Z"
                  className="Vector"
                />
                <path
                  fill="#3A0701"
                  d="m964.163 454.754-15.659 4.388-5.402-9.005 3.225-.93 17.836 5.547Z"
                  className="Vector"
                />
                <path
                  fill="#3A0701"
                  d="M1118.45 408.329c0 25.347-17.28 41.908-42.52 41.908-5.84 0-12.11-.89-18.69-2.759l-25.47-7.226-.2-.06V315.449l2.16-.789 11.82 5.177 11.69 5.127c35.02 15.342 61.21 52.142 61.21 83.365Z"
                  className="Vector"
                />
                <path
                  fill="#3A0701"
                  d="m1031.57 476.243-29.63 7.515-22.838-6.786-1.967-.58v-.279l29.225-7.696.72.22 24.49 7.606Z"
                  className="Vector"
                />
              </g>
            </g>
            <g className="d">
              <path
                fill="#682E02"
                d="M1045.55 302.337v126.022l-13.78 3.897-14.18 4.008V312.561l13.98-5.107 2.16-.79 11.82-4.327Z"
                className="Vector"
              />
            </g>
            <g className="e">
              <g className="Group">
                <path
                  fill="#F2811D"
                  d="m1071.22 435.855-25.67-7.286V302.087l25.67 11.254c35.02 15.342 61.21 52.132 61.21 83.355 0 31.223-26.19 49.093-61.21 39.159Z"
                  className="Vector"
                />
                <path
                  fill="#F2811D"
                  d="M1031.57 294.781v181.462l-24.49-7.606-.48-.15v-185.14l.15.07 24.82 11.364Z"
                  className="Vector"
                />
              </g>
            </g>
            <path
              fill="#F2811D"
              d="M1006.75 283.187v.23l-.15-.07v185.14l-.24-.07-29.225 7.696V363.694l-.49.179-23.267 8.506 16.517 26.106v.399l-.22 80.247v.57l-7.1 1.799-.799-.23-.03-.05-13.242-22.078-5.402-9.005-.11-.18-12.852 3.908-.25.08-6.171 1.879-16.817 5.117h-.01l-.529.17v35.761l-.619.169-23.747 6.497-1.129-.29v-167.31l24.736-10.424.14-.06.16-.07.459.18-.04 106.952 17.396-5.727 4.484-1.479-4.484-7.476-10.715-17.86-.02-71.801v-5.667l6.361-2.619.379-.16.29-.12 18.265 28.785 27.382-10.615 11.474-4.447v-37.94l29.615-12.203Z"
              className="Vector"
            />
          </g>
          <g className="walls">
            <path
              fill="#000"
              d="m1005.11 900.513-128.825-3.548V513.722l128.825-32.992v419.783Z"
              className="Vector"
            />
            <path
              fill="#000"
              d="m1127.94 896.515-123.83 4.128V479.741l123.83 37.28v379.494Z"
              className="Vector"
            />
          </g>
          {/* Light Group 7 */}
          <g className="lights">
            {lightGroupArrays[7].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
        <g className="building">
          <g className="walls">
            <path
              fill="#000"
              d="M1441.5 350.49v555.02l-.5-.01-372.98-9.105V554.7l217.7-42.867V391.788L1441 350.62l.5-.13Z"
              className="Vector"
            />
          </g>
          {/* Light Group 8 */}
          <g className="lights">
            {lightGroupArrays[8].props.children.map((light) => {
              const lightPos = light.props.d.split(/ |[a-zA-Z]+/);
              return (
                <g className="light-group">
                  <circle
                    cx={parseInt(lightPos[1])}
                    cy={parseInt(lightPos[2])}
                    r={sensorRadius}
                  />
                  {light}
                </g>
              );
            })}
          </g>
        </g>
      </g>
    </svg>
  );
  return <div>{bgsvgCode}</div>;
}
export default HomeBG;
