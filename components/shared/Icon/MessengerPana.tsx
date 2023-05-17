import * as React from 'react';
import Svg, {Circle, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {BaseIconProps} from '.';

const MessengerPana = ({
  width = 373,
  height = 373,
  ...otherProps
}: BaseIconProps) => (
  <Svg width={width} height={height} fill="none" {...otherProps}>
    <Circle
      opacity={0.5}
      cx={186.5}
      cy={186.5}
      r={186.5}
      fill="url(#a)"
      fillOpacity={0.2}
    />
    <Path
      d="M268.581 308.303c-14.905-5.905-21.745-21.802-24.772-36.827-.507-2.508-1.402-5.068-.735-7.53.667-2.463 3.072-4.611 5.546-4.093 2.058.433 3.374 2.389 4.828 3.922a14.942 14.942 0 0 0 7.159 4.189c1.778.451 3.859.485 5.215-.746 1.87-1.71 1.42-4.72.816-7.194l-3.369-13.817c-.604-2.468-1.209-4.993-.998-7.529.211-2.537 1.397-5.13 3.597-6.333 2.2-1.203 5.426-.57 6.498 1.756.45.957.49 2.052.804 3.061.313 1.008 1.06 2.034 2.103 2.091 1.043.057 1.881-.883 2.451-1.784 1.961-3.1 2.93-6.731 3.791-10.317.86-3.585 1.658-7.239 3.328-10.51 1.67-3.272 4.367-6.196 7.861-7.239 3.494-1.044 7.792.25 9.513 3.516 1.721 3.267.53 7.302-1.015 10.648a56.76 56.76 0 0 1-8.903 13.68c-.644.735-1.351 1.533-1.431 2.525-.148 1.773 1.807 3.044 3.563 3.198 1.989.177 3.95-.49 5.933-.718 1.984-.228 4.275.125 5.438 1.772 1.613 2.28.126 5.444-1.544 7.673a48.566 48.566 0 0 1-12.09 11.4c-1.659 1.094-3.42 2.137-4.606 3.762-1.185 1.624-1.522 4.064-.222 5.597 1.3 1.533 3.711 1.55 5.535.747 1.824-.804 3.283-2.246 4.942-3.363 3.095-2.092 7.541-2.902 10.419-.479 1.887 1.596 2.656 4.252 2.474 6.732-.182 2.479-1.174 4.805-2.28 7.005-3.956 7.712-9.713 14.552-16.952 19.112-7.239 4.56-14.375 7.079-22.897 6.076"
      fill="#F5F5F5"
    />
    <Path
      d="M270.211 298.043a227.666 227.666 0 0 1 3.141-25.963c.38-2.28.771-4.536 1.174-6.766.387-2.217.775-4.418 1.288-6.549a113.408 113.408 0 0 1 3.637-12.067c1.339-3.779 2.753-7.319 4.098-10.619 1.345-3.301 2.668-6.35 3.99-9.081a89.73 89.73 0 0 1 7.182-12.403 78.26 78.26 0 0 1 2.28-3.158c.262-.334.467-.602.616-.803.065-.096.142-.184.228-.262a2.183 2.183 0 0 1-.189.296l-.57.826c-.513.73-1.271 1.802-2.205 3.204a96.341 96.341 0 0 0-7.034 12.449c-1.294 2.73-2.594 5.779-3.928 9.08-1.333 3.3-2.724 6.84-4.052 10.625a115.179 115.179 0 0 0-3.597 12.038c-.507 2.12-.889 4.303-1.277 6.526-.387 2.223-.775 4.481-1.168 6.761a231.813 231.813 0 0 0-3.169 25.906"
      fill="#E0E0E0"
    />
    <Path
      d="M275.939 258.719a4.953 4.953 0 0 1-.496-1.003 58.252 58.252 0 0 1-1.14-2.799c-.935-2.383-2.115-5.7-3.42-9.394-1.305-3.693-2.508-6.988-3.471-9.348a167.158 167.158 0 0 0-1.169-2.787c-.17-.331-.3-.681-.388-1.043.225.299.416.622.57.963.337.633.781 1.568 1.306 2.736 1.049 2.337 2.325 5.638 3.614 9.32 1.288 3.682 2.394 6.925 3.266 9.433l1.009 2.85c.143.346.25.705.319 1.072ZM306.347 245.21a6.825 6.825 0 0 1-1.237.456c-.798.262-1.955.644-3.374 1.14-2.85 1.003-6.709 2.531-10.91 4.406-4.201 1.875-7.929 3.739-10.585 5.164-1.334.707-2.4 1.306-3.135 1.71a7.38 7.38 0 0 1-1.168.604 6.91 6.91 0 0 1 1.071-.758 59.511 59.511 0 0 1 3.072-1.846c2.622-1.505 6.339-3.42 10.551-5.307a114.418 114.418 0 0 1 11.001-4.292 56.049 56.049 0 0 1 3.42-1.015 6.63 6.63 0 0 1 1.294-.262Z"
      fill="#E0E0E0"
    />
    <Path
      d="M270.832 114.606a22.644 22.644 0 0 0-8.871-18.035 22.661 22.661 0 0 0-28.803 1.015 22.666 22.666 0 0 0-7.58 18.614 22.646 22.646 0 0 0 3.075 9.852l.062.085c.867 1.465 1.955 2.514 3.055 4.053l13.15 17.425a4.099 4.099 0 0 0 6.532 0l12.939-17.14a48.886 48.886 0 0 0 3.289-4.361l.04-.034a22.546 22.546 0 0 0 3.112-11.474Zm-22.657 9.867a9.977 9.977 0 0 1-9.216-6.158 9.973 9.973 0 0 1 2.163-10.871 9.975 9.975 0 1 1 7.053 17.029Z"
      fill="#F5F5F5"
    />
    <Path
      d="M288.158 153.491a12.21 12.21 0 0 0-4.766-9.764 12.22 12.22 0 0 0-17.954 15.937l.034.046c.468.787 1.055 1.357 1.647 2.183l7.097 9.399a2.201 2.201 0 0 0 3.517 0l6.977-9.245a26.307 26.307 0 0 0 1.778-2.348v-.035a12.123 12.123 0 0 0 1.67-6.173Zm-12.221 5.318a5.373 5.373 0 0 1-5.265-6.427 5.38 5.38 0 0 1 4.224-4.22 5.375 5.375 0 1 1 1.041 10.647Z"
      fill="#EBEBEB"
    />
    <Path
      d="M310.682 308.349c0 .085-56.498.148-126.175.148-69.677 0-126.187-.063-126.187-.148 0-.086 56.487-.148 126.187-.148 69.7 0 126.175.068 126.175.148Z"
      fill="#263238"
    />
    <Path
      d="m149.929 111.796 3.75 53.124a16.563 16.563 0 0 0 16.53 15.39 16.571 16.571 0 0 0 12.099-5.248 16.569 16.569 0 0 0 4.431-12.422c-.33-5.056-.633-9.194-.633-9.194s12.865-2.001 13.025-14.86c.091-7.41-1.191-24.282-2.28-37.193a16.867 16.867 0 0 0-16.809-15.43h-7.792a23.803 23.803 0 0 0-16.621 8.199 23.8 23.8 0 0 0-5.7 17.634Z"
      fill="#B78876"
    />
    <Path
      d="M186.117 153.286s-8.128.661-16.763-4.765c0 0 3.961 9.257 16.792 8.1l-.029-3.335Z"
      fill="#AA6550"
    />
    <Path
      d="M192.833 116.96a1.835 1.835 0 0 1-1.773 1.853 1.756 1.756 0 0 1-1.892-1.653 1.841 1.841 0 0 1 1.767-1.859 1.77 1.77 0 0 1 1.299.43 1.77 1.77 0 0 1 .599 1.229ZM194.612 114.315c-.228.24-1.619-.786-3.591-.781-1.972.006-3.42.992-3.642.753-.103-.109.131-.57.758-1.003a5.04 5.04 0 0 1 2.913-.895 4.796 4.796 0 0 1 2.85.923c.621.467.826.901.712 1.003ZM173.55 116.96a1.835 1.835 0 0 1-1.773 1.853 1.756 1.756 0 0 1-1.892-1.653 1.842 1.842 0 0 1 1.773-1.859 1.775 1.775 0 0 1 1.294.432 1.759 1.759 0 0 1 .598 1.227ZM175.19 114.68c-.228.239-1.624-.792-3.596-.787-1.973.006-3.42.998-3.643.753-.102-.108.126-.536.758-.998a5.134 5.134 0 0 1 2.913-.9 4.91 4.91 0 0 1 2.85.923c.621.473.827.906.718 1.009ZM182.362 129.34c0-.114 1.219-.324 3.209-.57.501-.057.98-.153 1.066-.501a2.551 2.551 0 0 0-.337-1.494c-.471-1.219-.969-2.5-1.493-3.841-2.069-5.472-3.574-9.97-3.352-10.049.223-.08 2.081 4.286 4.156 9.752.497 1.353.974 2.643 1.43 3.871.188.57.519 1.219.257 1.977a1.249 1.249 0 0 1-.827.736 3.124 3.124 0 0 1-.855.119c-2.006.103-3.249.114-3.254 0ZM176.548 130.708c.319 0 .325 2.127 2.161 3.648 1.835 1.522 4.115 1.289 4.132 1.585.034.137-.507.416-1.471.445a5.354 5.354 0 0 1-3.454-1.203 4.65 4.65 0 0 1-1.676-3.061c-.079-.912.16-1.425.308-1.414ZM175.699 106.939c-.194.57-2.166.285-4.486.57s-4.195.912-4.503.428c-.137-.228.188-.735.946-1.254a7.855 7.855 0 0 1 6.84-.758c.884.342 1.289.775 1.203 1.014ZM193.886 108.598c-.347.45-1.71 0-3.345-.04-1.636-.04-3.021.302-3.341-.165-.142-.228.074-.678.684-1.106a4.84 4.84 0 0 1 5.387.171c.576.456.769.952.615 1.14Z"
      fill="#263238"
    />
    <Path
      d="M154.289 121.446c-.222-.097-8.835-2.611-8.55 6.179.285 8.789 9.046 6.697 9.058 6.441.011-.257-.508-12.62-.508-12.62Z"
      fill="#B78876"
    />
    <Path
      d="M151.976 130.822c-.04 0-.148.114-.405.24a1.546 1.546 0 0 1-1.14.063c-.94-.314-1.767-1.762-1.864-3.346a5.133 5.133 0 0 1 .359-2.206 1.781 1.781 0 0 1 1.14-1.214.783.783 0 0 1 .918.393c.125.239.074.416.12.433.045.017.188-.154.102-.519a.965.965 0 0 0-.364-.535 1.141 1.141 0 0 0-.855-.2 2.154 2.154 0 0 0-1.557 1.414 5.273 5.273 0 0 0-.45 2.468c.114 1.773 1.072 3.42 2.354 3.728a1.636 1.636 0 0 0 1.397-.28c.233-.222.279-.421.245-.439Z"
      fill="#AA6550"
    />
    <Path
      d="M149.375 121.15c1.34-.325 3.66.912 4.23 2.166.57 1.254.695 2.679 1.265 3.938.57 1.26 1.858 2.389 3.203 2.069a2.693 2.693 0 0 0 1.83-2c.194-.94.204-1.907.029-2.85-.519-4.104-1.38-8.174-1.545-12.312-.165-4.139.422-8.431 2.593-11.97 2.172-3.54 6.156-6.117 10.26-5.78 2.731.216 5.239 1.641 7.952 2.023a10.73 10.73 0 0 0 8.926-2.98c.297-.291 1.665-1.198 1.665-1.198 0-.21-.2-2.046-.924-2.719-5.386-4.976-15.088-6.367-22.201-4.56-7.114 1.807-13.783 6.84-16.844 13.475-3.061 6.635-2.149 15.96-.462 22.686"
      fill="#263238"
    />
    <Path
      d="M196.971 99.438s-33.733-10.83-48.325 18.331c0 0-2.183-7.301-2.183-11.217 0-2.616 1.562-18.189 17.59-23.09 0 0 24.14-9.212 32.918 15.976Z"
      fill="#413F46"
    />
    <Path
      d="M167.968 100.168a7.34 7.34 0 0 0 11.679 1.06 4.33 4.33 0 0 0 4.243 2.714 4.33 4.33 0 0 0 3.937-3.141 9.781 9.781 0 0 0 3.283 2.394c1.282.473 2.907.29 3.745-.781.838-1.072.61-2.765-.234-3.87a7.976 7.976 0 0 0-3.42-2.28 24.664 24.664 0 0 0-12.734-1.927c-4.303.57-8.47 2.667-11.16 6.076"
      fill="#263238"
    />
    <Path
      opacity={0.4}
      d="M196.972 99.438a15.68 15.68 0 0 0-10.727-4.873c-9.953-.44-28.575 5.158-37.62 23.204 0 0-2.184-7.301-2.184-11.217 0-2.616 1.562-18.189 17.591-23.09.022 0 24.162-9.212 32.94 15.976Z"
      fill="#000"
    />
    <Path
      d="M150.055 114.355c4.999-7.655 11.896-13.982 19.653-18.81 7.758-4.828 20.577-9.633 29.412-11.97 2.656-.707 5.421-1.322 8.128-.855 2.708.468 5.353 2.28 6.02 4.93.843 3.335-5.073 8.476-7.849 10.494-2.776 2.018-8.448 4.988-8.448 4.988s.08-6.179-9.815-7.45c-13.452-1.761-37.101 18.673-37.101 18.673Z"
      fill="#413F46"
    />
    <Path
      d="M177.722 89.144s4.857-2.69 9.742-3.317a12.702 12.702 0 0 0-2.651-1.585 25.04 25.04 0 0 0-7.592 2.554l.501 2.348Z"
      fill="#E0E0E0"
    />
    <Path
      d="m205.098 164.532-10.699-2.36-4.355-1.088-3.625-5.62s-1.71 10.049-8.202 15.458a7.541 7.541 0 0 1-6.379 1.528c-1.464-.308-3.186-.684-4.463-1.026-.273-.075-.57-.171-.889-.285a20.873 20.873 0 0 1-11.018-9.502c-1.436-2.554-2.65-5.176-2.234-6.173l-5.079 10.516-29.925 13.783-16.992 41.507 32.929 9.736 1.026 34.2-6.201 43.114 93.155.063-3.306-95.925"
      fill="#413F46"
    />
    <Path
      d="M181.016 201.668c-.189.015-.38.015-.57 0l-1.658-.04-5.923-.211h-.114v-.097c-.096-2.571-.216-5.614-.347-8.869-.154-4.691-.291-8.932-.399-12.05a1261.55 1261.55 0 0 0-.086-3.654v-.991a1.447 1.447 0 0 1 0-.348c.027.112.04.227.04.342 0 .262.04.57.063.992.045.9.108 2.137.182 3.648l.485 12.044c.114 3.26.216 6.304.308 8.875l-.126-.12 5.922.313 1.653.109c.192-.002.383.017.57.057Z"
      fill="#263238"
    />
    <Path
      d="M175.948 187.811a.817.817 0 0 1 .445-.148 1.924 1.924 0 0 1 1.824 1.02c.162.32.22.683.165 1.038a2.099 2.099 0 0 1-1.522 1.71 2.205 2.205 0 0 1-2.166-.77 2.1 2.1 0 0 1-.41-1.841c.088-.432.302-.829.615-1.14.217-.211.377-.279.382-.262.006.017-.114.119-.296.342a2.402 2.402 0 0 0-.496 1.077 1.931 1.931 0 0 0 1.267 2.213c.332.116.69.141 1.036.073a1.847 1.847 0 0 0 1.317-1.471 1.55 1.55 0 0 0-.61-1.505 1.804 1.804 0 0 0-1.1-.393c-.297.023-.451.08-.451.057ZM174.941 175.767a.912.912 0 0 1 .468-.217c.473-.1.966-.027 1.39.206.301.153.558.381.747.661.219.328.329.717.314 1.111a2.24 2.24 0 0 1-1.505 2.024 2.283 2.283 0 0 1-2.383-.832 2.008 2.008 0 0 1-.416-1.072 2.355 2.355 0 0 1 .16-.986c.176-.446.49-.825.895-1.083a.925.925 0 0 1 .484-.183s-.165.086-.416.28a2.28 2.28 0 0 0-.764 1.06 1.878 1.878 0 0 0 .274 1.818 2.013 2.013 0 0 0 2.08.713 1.984 1.984 0 0 0 1.317-1.75 1.712 1.712 0 0 0-.884-1.579 2.063 2.063 0 0 0-1.271-.274c-.313.04-.478.126-.49.103ZM171.908 221.772s.046-.029.143-.063l.427-.165c.382-.131.924-.371 1.613-.69a21.383 21.383 0 0 0 5.244-3.728 41.785 41.785 0 0 0 6.002-7.444 105.03 105.03 0 0 0 5.849-10.192 177.418 177.418 0 0 0 8.304-19.676c.93-2.576 1.653-4.668 2.161-6.11l.57-1.665c.062-.171.119-.313.159-.427a.873.873 0 0 1 .063-.143.573.573 0 0 1-.034.154c-.034.114-.08.257-.131.439-.131.405-.308.963-.53 1.71a257.579 257.579 0 0 1-2.081 6.139 164.082 164.082 0 0 1-8.219 19.699 101.665 101.665 0 0 1-5.883 10.209 41.086 41.086 0 0 1-6.087 7.461 20.745 20.745 0 0 1-5.335 3.677c-.537.246-1.087.461-1.648.644l-.439.136a.5.5 0 0 1-.148.035Z"
      fill="#263238"
    />
    <Path
      d="M191.534 210.389c.245 0 5.916-.388 5.916-.388s-2.343 4.138-4.782 5.7h-4.965l3.831-5.312Z"
      fill="#FAFAFA"
    />
    <Path
      d="M170.916 234.306c.097-.093.204-.175.319-.245l.958-.661a84.373 84.373 0 0 0 3.448-2.525c2.85-2.184 6.647-5.444 10.705-9.172 2.029-1.864 3.99-3.619 5.666-5.306a44.49 44.49 0 0 0 4.178-4.743 25.743 25.743 0 0 0 2.28-3.591c.251-.439.405-.798.524-1.037a1.97 1.97 0 0 1 .2-.359 2.511 2.511 0 0 1-.143.382c-.102.245-.245.615-.479 1.065a23.52 23.52 0 0 1-2.217 3.666 41.892 41.892 0 0 1-4.155 4.81c-1.682 1.71-3.631 3.472-5.66 5.33-4.059 3.728-7.861 6.977-10.773 9.12a74.982 74.982 0 0 1-3.511 2.451c-.428.273-.764.473-.992.615-.108.08-.225.147-.348.2ZM154.934 297.65s0-.051.068-.137c.068-.085.142-.222.234-.376.211-.325.53-.804.957-1.408.855-1.197 2.178-2.884 3.922-4.868 3.511-3.938 8.43-9.313 13.845-15.264l13.959-15.214 4.247-4.56 1.14-1.236.308-.314.114-.103s-.029.046-.091.12l-.285.336-1.14 1.277-4.179 4.646-13.851 15.23-13.908 15.208c-1.761 1.961-3.106 3.619-3.99 4.793-.438.57-.775 1.055-.997 1.374l-.257.359a.992.992 0 0 1-.096.137Z"
      fill="#263238"
    />
    <Path
      d="M204.357 164.27c.491.735 11.503 1.961 14.199 4.651 2.696 2.691 29.64 23.256 29.64 23.256l-19.203 25.844-12.392-2.73-12.244-51.021Z"
      fill="#413F46"
    />
    <Path
      opacity={0.4}
      d="m244.931 189.669-21.529 27.121 5.592 1.231 19.181-25.872-3.244-2.48Z"
      fill="#000"
    />
    <Path
      d="M210.224 191.174a6.176 6.176 0 0 1-.223-.901c-.062-.29-.136-.649-.188-1.071-.051-.422-.137-.901-.165-1.437-.029-.535-.086-1.14-.086-1.749 0-.61 0-1.3.052-2.007.111-1.537.349-3.062.712-4.56a27.35 27.35 0 0 1 1.534-4.349c.302-.638.57-1.254.894-1.801.325-.547.605-1.055.895-1.505.291-.45.57-.838.821-1.186.207-.298.43-.585.667-.86.187-.248.395-.479.621-.69-.155.267-.333.52-.53.758-.176.24-.393.53-.621.889-.228.359-.519.741-.781 1.203-.262.462-.57.952-.855 1.511-.285.558-.57 1.14-.861 1.789a29.604 29.604 0 0 0-1.47 4.315 29.997 29.997 0 0 0-.724 4.498c-.04.701-.091 1.368-.074 1.989s0 1.203.045 1.71c.046.507.08 1.009.12 1.431.04.421.091.78.137 1.071.057.314.084.633.08.952ZM218.841 212.424a56.061 56.061 0 0 1-2.377-5.261 56.723 56.723 0 0 1-2.109-5.37 56.785 56.785 0 0 1 2.383 5.255 54.268 54.268 0 0 1 2.103 5.376ZM134.168 193.648c-.045 0-.507-.827-1.379-2.109a30.272 30.272 0 0 0-3.887-4.634 30.823 30.823 0 0 0-4.743-3.745c-1.311-.832-2.172-1.266-2.149-1.311.219.06.429.146.627.256a18.25 18.25 0 0 1 1.63.878 26.268 26.268 0 0 1 4.845 3.711 26.747 26.747 0 0 1 3.854 4.731c.416.661.729 1.208.923 1.602.118.194.212.403.279.621Z"
      fill="#263238"
    />
    <Path
      opacity={0.4}
      d="m101.238 221.253 1.328-3.232 36.423 9.918-1.442 4.053-36.309-10.739Z"
      fill="#000"
    />
    <Path
      d="M198.476 208.479h13.868v5.7l-17.744-.114s2.741-3.3 3.876-5.586Z"
      fill="#FAFAFA"
    />
    <Path
      opacity={0.2}
      d="M149.012 167.234c.501 4.446 1.049 9.035 3.249 12.933 2.2 3.899 6.503 6.971 10.932 6.316 2.953-.439 5.455-2.411 7.467-4.623 2.012-2.211 3.7-4.714 5.894-6.737a26.043 26.043 0 0 0 4.423 3.802 8.674 8.674 0 0 0 5.546 1.465c1.933-.234 2.999-1.004 3.609-2.85-2.064.638-3.198.541-5.256.148a14.377 14.377 0 0 1-6.219-2.85c-1.208-.952-1.647-2.383-3.18-2.28-1.419.08-2.531 1.203-3.466 2.28a39.852 39.852 0 0 1-4.947 4.765c-1.71 1.351-3.363 2.28-5.541 2.217-3.585-.079-6.521-2.895-8.498-5.888a29.493 29.493 0 0 1-3.99-9.011"
      fill="#000"
    />
    <Path
      d="M190.986 161.688c.033.104.054.211.063.319 0 .211.068.519.108.918.086.798.171 1.955.206 3.42a48.502 48.502 0 0 1-1.066 11.155v.182h-.086a12.077 12.077 0 0 1-6.139-.165 14.392 14.392 0 0 1-4.56-2.132 11.76 11.76 0 0 1-2.491-2.28 8.098 8.098 0 0 1-.535-.741 1.71 1.71 0 0 1-.166-.279 14.587 14.587 0 0 0 3.306 3.146 14.75 14.75 0 0 0 4.503 2.041 12.05 12.05 0 0 0 5.997.142l-.109.109v-.092a51.941 51.941 0 0 0 1.14-11.092 57.06 57.06 0 0 0-.108-3.391c0-.371-.04-.673-.057-.918a1.224 1.224 0 0 1-.006-.342ZM173.669 172.934a1.422 1.422 0 0 1-.182.342c-.191.316-.4.621-.627.912a24.437 24.437 0 0 1-2.805 2.958 87.24 87.24 0 0 1-2.114 1.853c-.388.325-.775.667-1.209 1.009-.446.336-.916.639-1.408.906a8.652 8.652 0 0 1-3.42 1.043 6.472 6.472 0 0 1-3.762-.832 11.903 11.903 0 0 1-2.946-2.48 28.977 28.977 0 0 1-2.223-2.804 28.706 28.706 0 0 1-2.902-5.307 27.315 27.315 0 0 1-1.277-3.864 16.329 16.329 0 0 1-.239-1.083 1.895 1.895 0 0 1-.057-.382c.052.119.091.243.114.37.068.245.16.605.291 1.066a32.4 32.4 0 0 0 1.362 3.814 29.506 29.506 0 0 0 2.936 5.226 28.67 28.67 0 0 0 2.211 2.765 11.688 11.688 0 0 0 2.85 2.422 6.224 6.224 0 0 0 3.597.798 8.584 8.584 0 0 0 3.329-.991c.483-.257.946-.55 1.385-.878.416-.319.815-.667 1.202-.986a78.554 78.554 0 0 0 2.132-1.819 27.193 27.193 0 0 0 2.85-2.85c.302-.364.525-.666.673-.872.07-.118.15-.231.239-.336Z"
      fill="#263238"
    />
    <Path
      d="m161.391 238.427 4.394-6.407s3.021-10.499 2.611-11.97c-.41-1.47-1.744-6.942-1.431-7.011.314-.068 3.603-1.288 5.387 3.101 1.111 2.736 1.476 6.338 1.596 8.664a1.995 1.995 0 0 0 .765 1.48 1.995 1.995 0 0 0 1.623.378c3.038-.627 8.094-1.579 9.297-1.288 1.744.416 3.306 2.639 3.454 3.386.148.747-1.049 2.428-1.049 2.428s1.482.758 1.938 1.904c.063.154.114.308.16.456a2.76 2.76 0 0 1-.61 2.667l-.468.513s1.853.508 2.081 1.568a6.323 6.323 0 0 1-.063 2.331l-1.738 1.796c.484.452.802 1.054.9 1.71.092.98-2.513 3.42-2.513 3.42l-11.178 3.99-4.435 1.14-10.721-14.256Z"
      fill="#B78876"
    />
    <Path
      d="M188.074 231.199a39.443 39.443 0 0 1-3.876.838c-1.282.314-2.58.561-3.887.741.35-.171.719-.299 1.1-.382a38.57 38.57 0 0 1 2.73-.649 40.43 40.43 0 0 1 2.77-.468 4.407 4.407 0 0 1 1.163-.08ZM189.094 236.728c-.95.446-1.941.799-2.958 1.055-.988.354-2.007.614-3.044.775.95-.445 1.94-.799 2.958-1.054a16.557 16.557 0 0 1 3.044-.776ZM189.76 242.183a20.492 20.492 0 0 1-3.14 1.534 20.58 20.58 0 0 1-3.261 1.265 20.405 20.405 0 0 1 3.141-1.533 20.61 20.61 0 0 1 3.26-1.266Z"
      fill="#AA6550"
    />
    <Path
      d="m135.639 278.019 41.108-27.576-10.374-18.81-37.517 19.294 4.258-20.269-25.462-7.535-6.373 34.713c-.98 15.435 11.4 27.895 26.323 23.843a27.199 27.199 0 0 0 8.037-3.66Z"
      fill="#B78876"
    />
    <Path
      d="M123.423 261.837a1.713 1.713 0 0 1-.143-.519 9.572 9.572 0 0 1-.142-1.453 10.244 10.244 0 0 1 1.06-4.68 10.155 10.155 0 0 1 3.106-3.659 8.341 8.341 0 0 1 1.243-.764c.156-.091.325-.159.502-.2 0 .052-.667.377-1.619 1.14a10.618 10.618 0 0 0-4.081 8.18c-.029 1.197.159 1.949.074 1.955Z"
      fill="#AA6550"
    />
    <Path
      d="M228.994 218.021c.257-.353 29.275 17.328 29.275 17.328l9.303 42.379 13.389 4.914s4.178-47.162.997-54.503c-3.18-7.342-35.425-33.756-35.425-33.756l-17.539 23.638Z"
      fill="#B78876"
    />
    <Path
      d="M264.608 232.1a7.652 7.652 0 0 1-2.514 2.371 7.746 7.746 0 0 1-3.203 1.311 32.2 32.2 0 0 0 3.043-1.562 30.482 30.482 0 0 0 2.674-2.12Z"
      fill="#AA6550"
    />
    <Path
      d="m194.092 218.112 2.274 40.675 46.375-3.135-1.402-30.278-6.754-9.091-40.493 1.829Z"
      fill="#263238"
    />
    <Path
      d="M183.553 259.694c.137.781 4.075 37.62 4.075 37.62l69.022-4.794 11.679-1.567-5.387-34.303-8.248-1.978-71.141 5.022Z"
      fill="#413F46"
    />
    <Path
      d="m254.694 254.666-71.141 5.028c.137.781 4.075 37.62 4.075 37.62l71.86-4.999-4.794-37.649Z"
      fill="#FF7927"
    />
    <Path
      d="m235.787 256.12-39.421 2.667-2.274-40.675 40.493-1.829 1.202 39.837Z"
      fill="#455A64"
    />
    <Path
      d="m208.793 217.451.832 12.534 2.109-1.208 1.169 1.208 1.453-1.208 2.246 1.208v-12.887l-7.809.353Z"
      fill="#263238"
    />
    <Path
      d="m225.272 256.975-2.696-30.529 26.351 7.261 2.542 21.073-26.197 2.195Z"
      fill="#413F46"
    />
    <Path
      d="M248.909 233.713a1.248 1.248 0 0 1-.166.217l-.507.598-1.938 2.212-6.732 7.552-.102.114-.109-.108-3.556-3.762-9.388-9.918-2.822-3.032-.758-.833a1.612 1.612 0 0 1-.245-.307c.104.079.201.166.291.262l.798.798 2.884 2.964 9.45 9.861 3.58 3.768h-.211l6.84-7.485 2.001-2.154.541-.57c.044-.064.093-.123.149-.177ZM234.151 239.368c.074.039-1.807 3.642-4.195 8.048-2.389 4.406-4.384 7.946-4.458 7.906-.074-.04 1.807-3.643 4.195-8.049 2.389-4.406 4.395-7.945 4.458-7.905ZM250.852 254.78c-.069.04-1.893-2.878-4.076-6.515-2.183-3.636-3.899-6.629-3.824-6.674.074-.046 1.892 2.878 4.075 6.52 2.183 3.643 3.899 6.629 3.825 6.669Z"
      fill="#263238"
    />
    <Path
      d="m239.425 255.783-1.722-19.442 16.781 4.628 1.619 13.418-16.678 1.396Z"
      fill="#413F46"
    />
    <Path
      opacity={0.4}
      d="m239.425 255.783-1.722-19.442 16.781 4.628 1.619 13.418-16.678 1.396Z"
      fill="#fff"
    />
    <Path
      d="M254.484 240.969c-.12.191-.259.369-.416.53-.314.371-.724.844-1.22 1.42l-4.275 4.822-.102.12-.109-.114-2.28-2.394a763.78 763.78 0 0 1-5.968-6.327l-1.778-1.944a5.611 5.611 0 0 1-.627-.741c.253.201.49.422.707.661l1.852 1.875a861.597 861.597 0 0 1 6.031 6.27l2.28 2.4h-.24l4.35-4.754 1.288-1.362a3.64 3.64 0 0 1 .507-.462ZM245.078 244.572c.069.04-1.105 2.342-2.627 5.13a55.313 55.313 0 0 1-2.885 5.01 55.256 55.256 0 0 1 2.622-5.13 54.489 54.489 0 0 1 2.89-5.01ZM255.715 254.387a40.508 40.508 0 0 1-2.645-4.121 38.846 38.846 0 0 1-2.388-4.281c1.84 2.7 3.52 5.506 5.033 8.402Z"
      fill="#263238"
    />
    <Path
      d="M250.117 240.148v1.562l2.451.285.131-1.191-2.582-.656ZM241.465 232.22v2.28l4.628.764.257-1.745-4.885-1.299Z"
      fill="#fff"
    />
    <Path
      d="m223.402 268.341-.228-11.366-9.217.621.986 11.548 8.459-.803Z"
      fill="#413F46"
    />
    <Path
      d="m253.459 274.312-15.475 1.468 1.299 13.687 15.474-1.468-1.298-13.687Z"
      fill="#FAFAFA"
    />
    <Path
      d="M254.735 288.017a2.097 2.097 0 0 1-.04-.262c0-.188-.051-.433-.085-.741-.069-.661-.171-1.602-.297-2.782-.245-2.405-.57-5.802-1.003-9.889l.137.114-15.464 1.487c-.034.035.251-.302.131-.159V276.235l.046.468.085.923c.063.61.12 1.214.177 1.818.108 1.203.222 2.377.33 3.529.211 2.28.416 4.474.599 6.486l-.143-.114 11.167-.992 3.169-.268.849-.062c.101-.008.202-.008.302 0-.088.02-.177.034-.268.04l-.82.097-3.135.33-11.235 1.14h-.131v-.131c-.2-2.018-.411-4.195-.633-6.487-.106-1.14-.218-2.316-.336-3.528l-.171-1.824c-.029-.302-.057-.61-.091-.918l-.04-.467V275.825c-.12.142.159-.2.136-.166l15.47-1.442h.126v.126c.364 4.121.667 7.552.883 9.98.097 1.169.171 2.098.228 2.759 0 .302.04.542.051.724.007.07.009.141.006.211Z"
      fill="#263238"
    />
    <Path
      d="M252.226 277.609c0 .085-2.696.433-6.042.786-2.014.266-4.04.429-6.071.491 0-.08 2.696-.434 6.042-.787 3.346-.353 6.065-.57 6.071-.49ZM252.135 279.934a8.605 8.605 0 0 1-1.658.417c-1.038.205-2.48.444-4.081.632a51.054 51.054 0 0 1-4.122.325 9.575 9.575 0 0 1-1.71 0 10.572 10.572 0 0 1 1.71-.194c1.049-.097 2.497-.228 4.093-.416a85.426 85.426 0 0 0 4.081-.57 11.53 11.53 0 0 1 1.687-.194ZM252.792 285.019a8.937 8.937 0 0 1-1.665.416 54.966 54.966 0 0 1-4.081.633 50.8 50.8 0 0 1-4.121.324 8.724 8.724 0 0 1-1.71 0 10.448 10.448 0 0 1 1.71-.193c1.049-.092 2.502-.228 4.098-.416a88.084 88.084 0 0 0 4.081-.57 11.26 11.26 0 0 1 1.688-.194ZM252.011 282.414c-1.86.421-3.742.74-5.637.958-1.887.32-3.79.541-5.7.661a56.597 56.597 0 0 1 5.637-.958 56.252 56.252 0 0 1 5.7-.661Z"
      fill="#263238"
    />
    <Path
      d="M265.672 303.612s12.74-8.43 13.72-12.739c.98-4.309 1.567-8.231 1.567-8.231l-13.611-5.637 1.351 4.902s-4.879 2.901-5.381 6.418c-.331 2.343-6.641 6.355-6.641 6.355a5.198 5.198 0 0 0-4.349-1.875l-5.301.376 3.586 8.077 15.059 2.354Z"
      fill="#B78876"
    />
    <Path
      d="M270.648 292.058a2.023 2.023 0 0 1-.599.245c-.399.132-.991.263-1.71.491a6.93 6.93 0 0 0-2.211 1.288 11.102 11.102 0 0 1-2.725 1.71 9.245 9.245 0 0 1-5.78.484 3.088 3.088 0 0 1-.963-.359.703.703 0 0 1-.353-.707.518.518 0 0 1 .285-.41c.114-.04.176 0 .176 0s-.062 0-.148.063a.473.473 0 0 0-.199.376.572.572 0 0 0 .33.57c.292.143.603.241.924.291a9.485 9.485 0 0 0 5.614-.57c.964-.43 1.863-.994 2.668-1.676a6.891 6.891 0 0 1 2.314-1.266c.73-.205 1.322-.302 1.71-.404.219-.06.442-.102.667-.126Z"
      fill="#AA6550"
    />
    <Path
      d="M261.825 298.596c0 .046-.656-.33-1.739-.781a15.894 15.894 0 0 0-4.417-1.1 17.406 17.406 0 0 0-1.306-.068h-.079l-.046-.069a13.714 13.714 0 0 0-2.366-2.793c-.689-.621-1.14-.94-1.14-.974 0-.034.137.045.354.182.307.199.604.414.889.644a11.928 11.928 0 0 1 2.491 2.788l-.12-.069c.433 0 .878 0 1.334.069 1.548.149 3.06.555 4.475 1.202a11.1 11.1 0 0 1 1.236.661c.16.08.306.184.434.308ZM265.267 296.282c0 .08-.861.405-1.864.975-1.003.57-1.739 1.168-1.796 1.1a6.203 6.203 0 0 1 3.66-2.075ZM272.17 281.12c0 .091-.889 0-1.904.257-1.014.256-1.71.78-1.789.706a3.723 3.723 0 0 1 3.693-.963Z"
      fill="#AA6550"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={186.003}
        y1={-84.547}
        x2={186.003}
        y2={391.401}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF7927" />
        <Stop offset={1} stopColor="#F9F9F9" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default MessengerPana;
