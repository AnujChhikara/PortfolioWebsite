function Navbar(props) {
  return (
    <div className="flex w-screen justify-end pr-8 pt-4 space-x-3">
      <a href="https://twitter.com/AnujChhikara07">
        <svg
          className=" w-8 transform  fill-transparent hover:fill-[#00acee] transition duration-500 hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9999 5.9246C21.2644 6.25051 20.4744 6.47071 19.6437 6.57025C20.4911 6.06289 21.1411 5.25782 21.4477 4.29948C20.6549 4.76984 19.7767 5.1116 18.8422 5.29481C18.0935 4.49855 17.0277 4 15.8474 4C13.5819 4 11.7445 5.8374 11.7445 8.10464C11.7445 8.42526 11.7815 8.73707 11.8502 9.03832C8.43877 8.86656 5.41666 7.23263 3.39252 4.75046C3.04019 5.35823 2.8376 6.06289 2.8376 6.81335C2.8376 8.23677 3.56252 9.4937 4.66267 10.2292C3.98972 10.2072 3.35729 10.0231 2.80413 9.71567V9.76852C2.80413 11.7565 4.21786 13.4151 6.09577 13.7921C5.75049 13.8855 5.38847 13.9348 5.015 13.9348C4.75075 13.9348 4.49267 13.9102 4.24252 13.8626C4.76485 15.4921 6.27987 16.6795 8.07587 16.7112C6.67095 17.8122 4.90137 18.4684 2.97942 18.4684C2.64823 18.4684 2.32144 18.449 1.99994 18.4112C3.8162 19.5765 5.97246 20.2547 8.28903 20.2547C15.8377 20.2547 19.9644 14.0026 19.9644 8.58029C19.9644 8.40412 19.9599 8.2262 19.952 8.05003C20.7536 7.47045 21.4494 6.74905 21.9982 5.92724L21.9999 5.9246Z"
            stroke="#000000"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/anuj-chhikara-webdeveloper/">
        <svg
          className=" w-8 transform  fill-transparent hover:fill-[#0A66C2] transition duration-500 hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
            stroke="#000000"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <a href="https://github.com/AnujChhikara">
        <svg
          className=" w-8 transform  fill-black hover:fill-[#2c2c2c] transition duration-500 hover:-translate-y-0.5"
          fill="#000000"
          viewBox="0 -0.5 25 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
        </svg>
      </a>

      <div className=" ">
        <button class="w-9 md:ml-4 sm:ml-1  " onClick={props.toggleDarkMode}>
          {props.darkMode ? (
            <svg
              className="fill-white hover:-translate-y-1 duration-700"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 31.2110 14.9453 C 31.4922 14.9453 31.6563 14.7578 31.7031 14.5000 C 32.4297 10.6094 32.4063 10.5156 36.4610 9.7187 C 36.7422 9.6719 36.9063 9.5312 36.9063 9.2500 C 36.9063 8.9453 36.7422 8.8047 36.4610 8.7578 C 32.4063 7.9375 32.4297 7.8672 31.7031 3.9765 C 31.6563 3.7187 31.4922 3.5312 31.2110 3.5312 C 30.9297 3.5312 30.7891 3.7187 30.7422 3.9765 C 29.9922 7.8672 30.0391 7.9375 25.9610 8.7578 C 25.7031 8.8047 25.5157 8.9453 25.5157 9.2500 C 25.5157 9.5312 25.7031 9.6719 25.9610 9.7187 C 30.0626 10.5156 29.9922 10.6094 30.7422 14.5000 C 30.7891 14.7578 30.9297 14.9453 31.2110 14.9453 Z M 42.4375 30.7891 C 42.8594 30.7891 43.1641 30.4844 43.2110 30.0391 C 43.9844 23.7578 44.2891 23.5703 50.6406 22.5860 C 51.1561 22.4922 51.4609 22.2578 51.4609 21.7891 C 51.4609 21.3438 51.1561 21.0625 50.7342 20.9922 C 44.3360 19.7734 43.9844 19.8203 43.2110 13.5391 C 43.1641 13.0938 42.8594 12.7891 42.4375 12.7891 C 41.9922 12.7891 41.6875 13.0938 41.6407 13.5156 C 40.8204 19.8672 40.6094 20.0781 34.1172 20.9922 C 33.6953 21.0391 33.3907 21.3438 33.3907 21.7891 C 33.3907 22.2344 33.6953 22.4922 34.1172 22.5860 C 40.6094 23.7812 40.8438 23.8047 41.6407 30.0860 C 41.6875 30.4844 41.9922 30.7891 42.4375 30.7891 Z M 24.7891 52.4688 C 33.2735 52.4688 40.0469 48.1797 43.2813 40.9609 C 43.6797 40.0938 43.6094 39.3438 43.1875 38.9453 C 42.8126 38.5938 42.1563 38.5469 41.4297 38.8047 C 39.5313 39.5547 37.3047 39.9297 34.7500 39.9297 C 24.1094 39.9297 17.3126 33.2734 17.3126 22.8906 C 17.3126 19.9375 17.8750 17.1016 18.6016 15.6485 C 19.0000 14.8281 19.0000 14.1250 18.6485 13.6797 C 18.2266 13.2109 17.4766 13.1406 16.5626 13.4922 C 9.3672 16.3281 4.5391 23.9687 4.5391 32.5469 C 4.5391 43.9609 12.9531 52.4688 24.7891 52.4688 Z" />
            </svg>
          ) : (
            <svg
              className="fill-yellow-500 hover:-translate-y-1 duration-700 "
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 27.9933 9.9001 C 29.0415 9.8769 29.8801 9.0149 29.8801 7.8037 L 29.8801 2.0732 C 29.8801 .8619 29.0415 0 27.9933 0 C 26.9451 0 26.1065 .8619 26.1065 2.0732 L 26.1065 7.8037 C 26.1065 9.0149 26.9451 9.9234 27.9933 9.9001 Z M 40.0132 14.8619 C 40.7587 15.5840 41.9700 15.5840 42.8319 14.7454 L 46.8849 10.6922 C 47.7470 9.8303 47.7236 8.6190 47.0018 7.8735 C 46.2795 7.1281 45.0682 7.1281 44.2062 7.9900 L 40.1530 12.0432 C 39.2911 12.9051 39.2678 14.1397 40.0132 14.8619 Z M 15.9733 14.8619 C 16.6955 14.1165 16.6955 12.9051 15.8569 12.0432 L 11.8036 7.9900 C 10.9184 7.1281 9.7304 7.1514 9.0083 7.8735 C 8.2396 8.5956 8.2396 9.8303 9.1014 10.6922 L 13.1547 14.7454 C 14.0166 15.5840 15.2745 15.6073 15.9733 14.8619 Z M 4.3028 37.2246 L 51.6141 37.2246 C 52.4295 37.2246 53.0816 36.5724 53.0816 35.7338 C 53.0816 34.8952 52.4295 34.2662 51.6141 34.2662 L 38.1497 34.2662 C 39.6871 32.1930 40.6189 29.6306 40.6189 26.8586 C 40.6189 19.9634 34.8885 14.2096 27.9933 14.2096 C 21.0981 14.2096 15.3677 19.9634 15.3677 26.8586 C 15.3677 29.6306 16.2994 32.1930 17.8369 34.2662 L 4.3028 34.2662 C 3.4642 34.2662 2.8352 34.8952 2.8352 35.7338 C 2.8352 36.5724 3.4642 37.2246 4.3028 37.2246 Z M 47.0715 28.1863 L 52.8020 28.1863 C 54.0133 28.1863 54.8749 27.3245 54.8749 26.2762 C 54.8749 25.2512 54.0133 24.4126 52.8020 24.3893 L 47.0715 24.3893 C 45.8602 24.3893 44.9518 25.2512 44.9752 26.2762 C 44.9981 27.3245 45.8602 28.1863 47.0715 28.1863 Z M 3.1846 28.1863 L 8.9151 28.1863 C 10.1264 28.1863 11.0349 27.3245 11.0116 26.2762 C 10.9883 25.2512 10.1264 24.3893 8.9151 24.3893 L 3.1846 24.3893 C 1.9966 24.3893 1.1114 25.2512 1.1114 26.2762 C 1.1114 27.3245 1.9966 28.1863 3.1846 28.1863 Z M 6.3760 44.7254 C 7.0282 44.7254 7.5407 44.1897 7.5407 43.5374 C 7.5407 42.8852 7.0282 42.3494 6.3760 42.3494 C 5.7237 42.3494 5.1880 42.8852 5.1880 43.5374 C 5.1880 44.1897 5.7237 44.7254 6.3760 44.7254 Z M 16.2295 44.7254 C 16.8585 44.7254 17.3943 44.1897 17.3943 43.5374 C 17.3943 42.8852 16.8585 42.3494 16.2295 42.3494 C 15.5540 42.3494 15.0183 42.8852 15.0183 43.5374 C 15.0183 44.1897 15.5540 44.7254 16.2295 44.7254 Z M 45.7438 44.7254 C 46.3959 44.7254 46.9083 44.1897 46.9083 43.5374 C 46.9083 42.8852 46.3959 42.3494 45.7438 42.3494 C 45.0682 42.3494 44.5559 42.8852 44.5559 43.5374 C 44.5559 44.1897 45.0682 44.7254 45.7438 44.7254 Z M 26.0598 44.7254 C 26.7121 44.7254 27.2246 44.1897 27.2246 43.5374 C 27.2246 42.8852 26.7121 42.3494 26.0598 42.3494 C 25.3843 42.3494 24.8718 42.8852 24.8718 43.5374 C 24.8718 44.1897 25.3843 44.7254 26.0598 44.7254 Z M 35.9134 44.7254 C 36.5424 44.7254 37.0781 44.1897 37.0781 43.5374 C 37.0781 42.8852 36.5424 42.3494 35.9134 42.3494 C 35.2379 42.3494 34.7021 42.8852 34.7021 43.5374 C 34.7021 44.1897 35.2379 44.7254 35.9134 44.7254 Z M 52.6155 50.3860 C 53.2448 50.3860 53.7805 49.8503 53.7805 49.1747 C 53.7805 48.5458 53.2448 48.0100 52.6155 48.0100 C 51.9400 48.0100 51.4276 48.5458 51.4276 49.1747 C 51.4276 49.8503 51.9400 50.3860 52.6155 50.3860 Z M 42.7853 50.3860 C 43.4142 50.3860 43.9500 49.8503 43.9500 49.1747 C 43.9500 48.5458 43.4142 48.0100 42.7853 48.0100 C 42.1098 48.0100 41.5740 48.5458 41.5740 49.1747 C 41.5740 49.8503 42.1098 50.3860 42.7853 50.3860 Z M 32.9317 50.3860 C 33.5607 50.3860 34.0965 49.8503 34.0965 49.1747 C 34.0965 48.5458 33.5607 48.0100 32.9317 48.0100 C 32.2562 48.0100 31.7437 48.5458 31.7437 49.1747 C 31.7437 49.8503 32.2562 50.3860 32.9317 50.3860 Z M 23.1014 50.3860 C 23.7304 50.3860 24.2662 49.8503 24.2662 49.1747 C 24.2662 48.5458 23.7304 48.0100 23.1014 48.0100 C 22.4259 48.0100 21.8901 48.5458 21.8901 49.1747 C 21.8901 49.8503 22.4259 50.3860 23.1014 50.3860 Z M 13.2478 50.3860 C 13.8768 50.3860 14.4126 49.8503 14.4126 49.1747 C 14.4126 48.5458 13.8768 48.0100 13.2478 48.0100 C 12.5723 48.0100 12.0598 48.5458 12.0598 49.1747 C 12.0598 49.8503 12.5723 50.3860 13.2478 50.3860 Z M 3.4176 50.3860 C 4.0465 50.3860 4.5823 49.8503 4.5823 49.1747 C 4.5823 48.5458 4.0465 48.0100 3.4176 48.0100 C 2.7420 48.0100 2.2063 48.5458 2.2063 49.1747 C 2.2063 49.8503 2.7420 50.3860 3.4176 50.3860 Z M 39.8036 56 C 40.4325 56 40.9683 55.4642 40.9683 54.8119 C 40.9683 54.1597 40.4325 53.6472 39.8036 53.6472 C 39.1281 53.6472 38.6156 54.1597 38.6156 54.8119 C 38.6156 55.4642 39.1281 56 39.8036 56 Z M 49.6338 56 C 50.2860 56 50.8217 55.4642 50.8217 54.8119 C 50.8217 54.1597 50.2860 53.6472 49.6338 53.6472 C 48.9817 53.6472 48.4459 54.1597 48.4459 54.8119 C 48.4459 55.4642 48.9817 56 49.6338 56 Z M 29.9500 56 C 30.6023 56 31.1380 55.4642 31.1380 54.8119 C 31.1380 54.1597 30.6023 53.6472 29.9500 53.6472 C 29.2978 53.6472 28.7620 54.1597 28.7620 54.8119 C 28.7620 55.4642 29.2978 56 29.9500 56 Z M 20.1197 56 C 20.7487 56 21.2845 55.4642 21.2845 54.8119 C 21.2845 54.1597 20.7487 53.6472 20.1197 53.6472 C 19.4442 53.6472 18.9317 54.1597 18.9317 54.8119 C 18.9317 55.4642 19.4442 56 20.1197 56 Z M 10.2662 56 C 10.9184 56 11.4542 55.4642 11.4542 54.8119 C 11.4542 54.1597 10.9184 53.6472 10.2662 53.6472 C 9.6139 53.6472 9.0781 54.1597 9.0781 54.8119 C 9.0781 55.4642 9.6139 56 10.2662 56 Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
export default Navbar;
