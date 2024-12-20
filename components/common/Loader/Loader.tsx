'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from '@/hooks/useLoader';
import { LoaderExitAnimationVariants } from '@/animation';

export const Loader: React.FC = () => {
  const loaderProgress = useLoader(7, 300);

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (loaderProgress === 100) {
      const timeOut = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [loaderProgress]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          variants={LoaderExitAnimationVariants}
          initial="initial"
          exit="exit"
          className="fixed top-0 z-[60] flex h-screen w-full items-center justify-center bg-black"
        >
          {loaderProgress !== 100 && (
            <div className="absolute bottom-0 right-0 m-5">
              <p className="text-2xl font-bold uppercase text-white">{Math.floor(loaderProgress)}%</p>
            </div>
          )}

          <div
            className={`${loaderProgress === 100 ? 'opacity-100' : 'opacity-0'} absolute bottom-8 left-1/2 -translate-x-1/2 duration-300`}
          >
            <p className="$fonts.funkyVibes text-2xl font-bold uppercase text-white">Pravah 2025</p>
          </div>

          <svg width="300" height="300" viewBox="0 0 667 778" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: loaderProgress / 100 }}
              transition={{ ease: 'easeOut' }}
              d="M215.217 738.625L211.217 735.778L206.133 731.001L201.049 726.223L198.463 722.061L195.878 717.899L193.141 706.728L190.404 695.557L185.6 682.89L180.796 670.223L176.86 662.223L172.923 654.223L167.908 647.557L162.892 640.89L158.721 629.933L154.55 618.976V615.661V612.346L150.596 600.147L146.642 587.947L140.596 577.635L134.55 567.322V566.443V565.564L130.733 557.227L126.916 548.89L125.431 544.89L123.946 540.89L122.516 528.89L121.087 516.89L116.938 500.961L112.79 485.032L114.337 484.517L115.884 484.001V480.636V477.271L114.066 477.969L112.248 478.666L111.389 468.363L110.53 458.059L113.307 449.6L116.084 441.14L113.125 431.936L110.165 422.732L113.024 418.865L115.884 414.998V414.37V413.742L113.056 413.316L110.229 412.89L109.697 406.912L109.166 400.934L107.333 399.101L105.5 397.268L104.025 404.145L102.55 411.021L102.545 413.956L102.54 416.89L99.8465 421.308L97.1526 425.727L88.8021 429.635L80.4517 433.542L72.8966 434.939L65.3416 436.335L60.0568 432.999L54.7721 429.663L49.6612 423.396L44.5503 417.128L38.2525 410.034L31.9547 402.94L28.373 397.528L24.7913 392.116L26.187 390.72L27.5826 389.324L28.4785 390.774L29.3743 392.223L34.9623 392.215L40.5503 392.207L45.3805 390.866L50.2107 389.524L56.4384 384.042L62.6661 378.56L62.1622 378.056L61.6582 377.552L52.8704 379.721L44.0825 381.89L39.595 381.048L35.1074 380.206L27.5629 375.487L20.0185 370.768L17.951 366.623L15.8835 362.48V360.838V359.197L19.3325 356.937L22.7815 354.677L22.0561 353.951L21.3307 353.226L16.5309 356.058L11.7311 358.89H11.0521H10.373L10.7949 355.223L11.2168 351.557L16.1968 351.144L21.1767 350.731L23.1435 347.923L25.1104 345.115L30.8303 345.292L36.5502 345.468L44.1962 346.308L51.8421 347.147L58.5411 345.43L65.2401 343.713L66.8285 345.302L68.4168 346.89H71.5712H74.7255L77.2204 345.555L79.7152 344.22L78.9553 339.221L78.1954 334.223L75.0394 324.386L71.8835 314.55V312.709V310.868L66.538 308.73L61.1925 306.591L60.3874 303.383L59.5823 300.175L60.4955 292.866L61.4087 285.557H58.5799H55.7511L51.8366 283.532L47.9221 281.508L47.1158 278.296L46.3096 275.083L47.4299 273.128L48.5502 271.173L58.0517 261.031L67.5532 250.89H70.2952H73.0371L73.8453 253.436L74.6534 255.982L76.3284 257.373L78.0033 258.763L87.9434 256.978L97.8835 255.193L99.8835 254.292L101.883 253.391L107.217 246.606L112.55 239.821L116.271 236.356L119.992 232.89L125.922 227.055L131.852 221.22L135.409 213.949L138.966 206.679L142.425 204.538L145.884 202.398L148.884 199.745L151.884 197.092V195.182V193.272L157.335 186.414L162.786 179.557L164.455 178.609L166.125 177.662L165.808 168.609L165.492 159.557L167.515 157.274L169.539 154.99L174.378 153.433L179.217 151.876L180.884 150.553L182.55 149.23V147.376V145.522L176.785 142.721L171.02 139.92L169.568 136.072L168.115 132.223H165.521H162.926L155.072 128.264L147.217 124.305L145.638 106.597L144.059 88.89L151.529 82.1038L159 75.3177L158.102 72.9772L157.204 70.6368L154.618 69.9608L152.033 69.2848L151.625 66.4259L151.217 63.5671L146.55 61.3727L141.884 59.1783L139.344 56.3675L136.804 53.5567H133.057H129.311L127.857 50.8396L126.403 48.1226L127.143 45.7896L127.884 43.4565L134.607 36.8399L141.33 30.2233H148.273H155.217L154.765 27.6284L154.313 25.0334L156.169 26.5733L158.024 28.1132L161.954 26.0159L165.884 23.9187L175.618 23.7015L185.352 23.4844L194.422 32.1872L203.491 40.89L207.892 44.1611L212.294 47.4323L214.897 51.8442L217.5 56.2561L223.358 57.7313L229.217 59.2066V61.7149V64.2233H234.363H239.508L247.096 60.1741L254.684 56.1249L260.818 55.5042L266.951 54.8836L268.655 53.4697L270.359 52.0558L274.388 54.1395L278.418 56.2233H280.382H282.346L286.448 59.6752L290.55 63.127V65.4664V67.8059L287.988 75.252L285.427 82.6981L280.394 87.4447L275.362 92.1913L273.956 96.4784L272.55 100.765L267.884 100.828L263.217 100.89V105.108V109.325L262.217 110.33L261.217 111.334V114.467V117.6L265.884 119.825L270.55 122.051L270.598 124.804L270.645 127.557L272.55 130.89L274.456 134.223L274.503 135.932L274.55 137.64L272.217 138.462L269.883 139.284L265.534 142.501L261.185 145.717L258.867 141.645L256.55 137.574L255.047 137.566L253.543 137.558L251.829 139.623L250.114 141.689L253.108 148.912L256.101 156.135L257.062 163.213L258.022 170.292L259.015 171.897L260.007 173.503L262.645 171.864L265.283 170.224L268.542 174.382L271.802 178.54L279.38 182.128L286.958 185.716L289.589 189.061L292.221 192.407L299.255 195.518L306.289 198.628L299.378 205.763L292.468 212.898L289.328 223.475L286.188 234.053L290.036 237.132L293.883 240.211L295.084 240.218L296.284 240.225L303.751 243.814L311.217 247.402L314.209 250.291L317.202 253.18L322.876 255.887L328.55 258.595L333.217 260.229L337.883 261.863L341.587 262.534L345.291 263.205L346.603 265.658L347.916 268.11L352.419 268.955L356.922 269.8L366.736 268.243L376.55 266.687L381.355 268.726L386.16 270.764L388.375 274.144L390.589 277.524L395.85 280.208L401.111 282.892H405H408.89L410.411 284.724L411.932 286.557L418.908 287.55L425.883 288.544L432.849 288.795L439.815 289.046L440.738 289.969L441.661 290.892L449.772 290.871L457.883 290.851L459.502 289.822L461.12 288.794L461.229 272.843L461.337 256.892L461.423 253.978L461.509 251.064L466.895 248.909L472.28 246.755L473.682 248.157L475.084 249.559L475.468 259.102L475.852 268.646L477.885 271.747L479.917 274.849L483.567 275.855L487.217 276.86L495.883 276.66L504.55 276.46L510.55 276.256L516.55 276.052L531.598 273.915L546.646 271.777L545.761 265.668L544.877 259.558L544.217 258.422L543.558 257.286L539.054 255.404L534.55 253.523V250.784V248.045L537.375 248.942L540.201 249.839L543.709 248.225L547.217 246.611L551.759 244.429L556.302 242.246L556.882 240.027L557.463 237.807L562.673 233.62L567.883 229.433V227.448V225.464L573.782 222.935L579.681 220.406L587.463 212.229L595.245 204.052L599.231 206.13L603.217 208.209L607.469 208.217L611.721 208.225L617.814 202.951L623.907 197.677L626.985 200.618L630.062 203.558L628.973 204.825L627.883 206.091V208.654V211.218L630.028 209.438L632.172 207.659L634.028 210.196L635.883 212.734L635.836 214.146L635.789 215.558L633.883 218.891L631.978 222.225L631.931 223.282L631.883 224.34L636.217 224.043L640.55 223.745L645.519 223.985L650.489 224.225L652.723 227.634L654.957 231.044L652.068 234.634L649.179 238.225L647.686 241.146L646.194 244.067L648.994 248.812L651.794 253.558H650.76H649.726L647.138 251.6L644.55 249.643L641.751 249.6L638.951 249.558L633.563 253.225L628.175 256.891L619.362 265.179L610.55 273.467V284.587V295.706L607.116 300.299L603.682 304.891L604.402 310.225L605.122 315.558L600.909 327.558L596.696 339.558L595.442 340.415L594.188 341.272L586.41 340.567L578.632 339.862L579.924 344.368L581.217 348.874V357.073V365.273L579.217 366.04L577.217 366.808V379.928V393.048L575.55 395.181L573.883 397.313L570.957 396.172L568.031 395.032L567.157 389.961L566.283 384.891L563.164 372.891L560.046 360.891L558.292 355.558L556.538 350.225H554.562H552.586L550.71 354.14L548.833 358.055L548.181 363.837L547.53 369.619L546.172 370.458L544.814 371.298L542.232 367.754L539.651 364.211L538.605 364.857L537.558 365.504L535.268 359.508L532.978 353.511L534.764 347.95L536.55 342.389L540.425 341.366L544.3 340.344L548.697 336.082L553.094 331.821L554.073 327.689L555.053 323.558L554.743 321.891L554.433 320.225H555.988H557.543L555.883 318.225L554.224 316.225L531.387 316.092L508.55 315.959L505.217 315.032L501.883 314.105L500.915 306.165L499.947 298.225L498.437 294.891L496.927 291.558L494.929 294.528L492.931 297.499L490.074 296.024L487.217 294.549L484.136 291.053L481.054 287.558L480.358 289.225L479.661 290.891L477.439 290.849L475.217 290.806L472.629 288.849L470.04 286.891H468.883H467.726L468.493 288.133L469.261 289.375L465.905 294.319L462.55 299.263V300.524V301.785L466.883 305.599L471.217 309.412L475.781 312.485L480.345 315.558L480.892 317.225L481.439 318.891H478.631H475.824L469.854 324.394L463.883 329.897V332.326V334.755L468.343 338.157L472.802 341.558H474.984H477.166L477.971 344.766L478.776 347.973L476.533 351.397L474.289 354.821L477.086 359.347L479.883 363.873V366.173V368.474L482.445 369.144L485.008 369.814L484.395 374.019L483.782 378.225L486.37 388.785L488.958 399.346L488.278 401.119L487.598 402.891H484.361H481.123L477.768 405.089L474.413 407.288L473.278 406.089L472.142 404.891L471.68 402.322L471.217 399.752L467.732 404.988L464.247 410.225L457.417 412.606L450.586 414.988L446.97 418.098L443.354 421.209L444.849 427.717L446.343 434.225L444.446 436.329L442.55 438.434V440.618V442.802L437.983 447.37L433.416 451.937L426.065 455.414L418.715 458.891H416.744H414.772L414.248 457.318L413.724 455.745L411.459 456.614L409.194 457.483L407.557 461.187L405.92 464.891L396.382 477.558L386.844 490.225L379.237 496.744L371.631 503.263L367.733 508.644L363.835 514.024L357.526 517.664L351.217 521.303L348.217 524.149L345.217 526.995V532.214V537.433L338.883 540.385L332.55 543.336L327.291 543.447L322.032 543.558L317.958 549.032L313.883 554.506L312.176 557.032L310.469 559.558L309.732 557.891L308.995 556.224H305.402H301.81L298.829 558.313L295.848 560.401L293.149 565.69L290.451 570.979L291.089 584.642L291.727 598.306L293.139 602.019L294.55 605.731V606.978V608.224H292.55H290.55V609.511V610.797L293.384 612.314L296.218 613.831L295.351 621.212L294.484 628.592L292.738 632.075L290.992 635.558L287.229 642.793L283.465 650.028L283.7 666.793L283.935 683.558L284.652 685.847L285.368 688.136L282.293 688.814L279.217 689.493L275.297 689.859L271.377 690.224L268.363 695.558L265.35 700.891L263.004 705.291L260.659 709.692L262.165 712.103L263.671 714.514L256.753 716.062L249.835 717.611L245.619 720.175L241.403 722.739L240.533 728.539L239.663 734.34L233.243 737.949L226.824 741.558L223.02 741.516L219.217 741.473L215.217 738.626L215.217 738.625Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// components/common/Loader/index.tsx
export default Loader;
