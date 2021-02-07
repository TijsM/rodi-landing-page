import React from "react";
import { Props } from "./Index";
import { theme } from "../../styles/theme";

export default function Apple({ width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M179 46.0034C179 48.7745 176.709 51.0192 173.874 51.0192H6.13243C3.2995 51.0192 1 48.7745 1 46.0034V6.00382C1 3.23398 3.2995 0.981445 6.13243 0.981445H173.873C176.709 0.981445 178.999 3.23398 178.999 6.00382L179 46.0034Z"
        fill={theme.white}
      />
      <path
        d="M173.333 1.04162C176.42 1.04162 178.932 3.4905 178.932 6.5V45.5C178.932 48.5095 176.42 50.9584 173.333 50.9584H6.66667C3.58 50.9584 1.06833 48.5095 1.06833 45.5V6.5C1.06833 3.4905 3.58 1.04162 6.66667 1.04162H173.333ZM173.333 2.74817e-06H6.66667C3.00167 2.74817e-06 0 2.92663 0 6.5V45.5C0 49.0734 3.00167 52 6.66667 52H173.333C176.998 52 180 49.0734 180 45.5V6.5C180 2.92663 176.998 2.74817e-06 173.333 2.74817e-06Z"
        fill={theme.dark}
      />
      <path
        d="M40.1707 25.7191C40.132 21.5292 43.6894 19.4908 43.852 19.3959C41.8374 16.532 38.7147 16.1407 37.6174 16.1095C34.9947 15.8404 32.4507 17.6396 31.1147 17.6396C29.752 17.6396 27.6947 16.1355 25.4774 16.1797C22.624 16.2226 19.9547 17.8333 18.4907 20.3345C15.4694 25.4344 17.7227 32.9289 20.6174 37.0512C22.0654 39.0701 23.7574 41.3243 25.972 41.245C28.1387 41.1579 28.948 39.8982 31.5627 39.8982C34.1534 39.8982 34.9134 41.245 37.172 41.1943C39.4974 41.1579 40.9614 39.1663 42.3587 37.1292C44.032 34.8152 44.704 32.5363 44.7307 32.4193C44.676 32.4011 40.2147 30.741 40.1707 25.7191Z"
        fill={theme.dark}
      />
      <path
        d="M35.904 13.3977C37.0694 11.9768 37.8667 10.0437 37.6454 8.08203C35.9587 8.15483 33.8494 9.21953 32.6347 10.6092C31.56 11.8338 30.6 13.841 30.848 15.7286C32.7427 15.8664 34.688 14.7965 35.904 13.3977Z"
        fill={theme.dark}
      />
      <path
        d="M71.5266 40.9557H68.4986L66.84 35.874H61.0746L59.4946 40.9557H56.5466L62.2586 23.6553H65.7866L71.5266 40.9557ZM66.34 33.742L64.84 29.2245C64.6813 28.763 64.384 27.6762 63.9453 25.9654H63.892C63.7173 26.7012 63.436 27.788 63.0493 29.2245L61.576 33.742H66.34Z"
        fill={theme.dark}
      />
      <path
        d="M86.2159 34.5647C86.2159 36.6863 85.6279 38.3633 84.4519 39.5944C83.3985 40.6903 82.0905 41.2376 80.5292 41.2376C78.8439 41.2376 77.6332 40.6474 76.8959 39.467H76.8425V46.0385H73.9999V32.5874C73.9999 31.2536 73.9639 29.8847 73.8945 28.4807H76.3945L76.5532 30.458H76.6065C77.5545 28.9682 78.9932 28.2246 80.9239 28.2246C82.4332 28.2246 83.6932 28.8057 84.7012 29.9692C85.7119 31.134 86.2159 32.6654 86.2159 34.5647ZM83.3199 34.6661C83.3199 33.4519 83.0399 32.4509 82.4772 31.6631C81.8625 30.8415 81.0372 30.4307 80.0025 30.4307C79.3012 30.4307 78.6639 30.6595 78.0945 31.1106C77.5239 31.5656 77.1505 32.1597 76.9759 32.8955C76.8879 33.2387 76.8439 33.5195 76.8439 33.7405V35.8205C76.8439 36.7279 77.1292 37.4936 77.6999 38.1189C78.2705 38.7442 79.0119 39.0562 79.9239 39.0562C80.9945 39.0562 81.8279 38.6532 82.4239 37.8498C83.0212 37.0451 83.3199 35.9843 83.3199 34.6661Z"
        fill={theme.dark}
      />
      <path
        d="M100.932 34.5647C100.932 36.6863 100.344 38.3633 99.1667 39.5944C98.1147 40.6903 96.8067 41.2376 95.2454 41.2376C93.5601 41.2376 92.3494 40.6474 91.6134 39.467H91.5601V46.0385H88.7174V32.5874C88.7174 31.2536 88.6814 29.8847 88.6121 28.4807H91.1121L91.2707 30.458H91.3241C92.2707 28.9682 93.7094 28.2246 95.6414 28.2246C97.1494 28.2246 98.4094 28.8057 99.4201 29.9692C100.427 31.134 100.932 32.6654 100.932 34.5647ZM98.0361 34.6661C98.0361 33.4519 97.7547 32.4509 97.1921 31.6631C96.5774 30.8415 95.7547 30.4307 94.7187 30.4307C94.0161 30.4307 93.3801 30.6595 92.8094 31.1106C92.2387 31.5656 91.8667 32.1597 91.6921 32.8955C91.6054 33.2387 91.5601 33.5195 91.5601 33.7405V35.8205C91.5601 36.7279 91.8454 37.4936 92.4134 38.1189C92.9841 38.7429 93.7254 39.0562 94.6401 39.0562C95.7107 39.0562 96.5441 38.6532 97.1401 37.8498C97.7374 37.0451 98.0361 35.9843 98.0361 34.6661Z"
        fill={theme.dark}
      />
      <path
        d="M117.385 36.1037C117.385 37.5753 116.861 38.7726 115.809 39.6969C114.653 40.707 113.044 41.2114 110.976 41.2114C109.067 41.2114 107.536 40.8526 106.377 40.1337L107.036 37.8236C108.284 38.5594 109.653 38.9286 111.145 38.9286C112.216 38.9286 113.049 38.692 113.648 38.2214C114.244 37.7508 114.541 37.119 114.541 36.3312C114.541 35.6292 114.296 35.0377 113.804 34.558C113.315 34.0783 112.497 33.6324 111.356 33.2203C108.249 32.0906 106.697 30.4357 106.697 28.2595C106.697 26.8373 107.241 25.6712 108.331 24.7638C109.416 23.8551 110.864 23.4014 112.675 23.4014C114.289 23.4014 115.631 23.6757 116.701 24.223L115.991 26.4824C114.991 25.952 113.86 25.6868 112.595 25.6868C111.595 25.6868 110.813 25.9273 110.253 26.4057C109.78 26.8334 109.543 27.3547 109.543 27.9722C109.543 28.656 109.813 29.2215 110.357 29.6661C110.831 30.0769 111.691 30.5215 112.939 31.0012C114.465 31.6005 115.587 32.3012 116.308 33.1046C117.027 33.9054 117.385 34.9077 117.385 36.1037Z"
        fill={theme.dark}
      />
      <path
        d="M126.784 30.5604H123.651V36.6171C123.651 38.1576 124.203 38.9272 125.309 38.9272C125.817 38.9272 126.239 38.8843 126.572 38.7985L126.651 40.9032C126.091 41.1073 125.353 41.21 124.44 41.21C123.317 41.21 122.44 40.8759 121.807 40.209C121.176 39.5408 120.859 38.4202 120.859 36.8459V30.5578H118.992V28.4778H120.859V26.1937L123.651 25.3721V28.4778H126.784V30.5604Z"
        fill={theme.dark}
      />
      <path
        d="M140.921 34.6151C140.921 36.5326 140.358 38.1069 139.236 39.338C138.058 40.6055 136.496 41.2373 134.548 41.2373C132.67 41.2373 131.176 40.6302 130.061 39.416C128.946 38.2018 128.389 36.6691 128.389 34.8218C128.389 32.8887 128.962 31.3053 130.113 30.0742C131.261 28.8418 132.81 28.2256 134.758 28.2256C136.636 28.2256 138.146 28.8327 139.286 30.0482C140.377 31.2273 140.921 32.7496 140.921 34.6151ZM137.972 34.7048C137.972 33.5543 137.72 32.5676 137.209 31.7447C136.613 30.7489 135.761 30.2523 134.657 30.2523C133.514 30.2523 132.646 30.7502 132.05 31.7447C131.54 32.5689 131.288 33.5712 131.288 34.7568C131.288 35.9073 131.54 36.894 132.05 37.7156C132.665 38.7114 133.524 39.208 134.632 39.208C135.717 39.208 136.569 38.701 137.184 37.6896C137.708 36.8511 137.972 35.854 137.972 34.7048Z"
        fill={theme.dark}
      />
      <path
        d="M150.161 30.9182C149.88 30.8675 149.58 30.8415 149.265 30.8415C148.265 30.8415 147.492 31.2094 146.948 31.9465C146.475 32.5965 146.237 33.4181 146.237 34.41V40.9555H143.396L143.423 32.4093C143.423 30.9715 143.387 29.6624 143.316 28.482H145.792L145.896 30.8688H145.975C146.275 30.0485 146.748 29.3881 147.396 28.8928C148.029 28.4469 148.713 28.2246 149.451 28.2246C149.713 28.2246 149.951 28.2428 150.161 28.2753V30.9182Z"
        fill={theme.dark}
      />
      <path
        d="M162.875 34.1279C162.875 34.6245 162.841 35.0431 162.771 35.385H154.243C154.276 36.6174 154.688 37.5599 155.48 38.2099C156.199 38.791 157.128 39.0822 158.269 39.0822C159.532 39.0822 160.684 38.8859 161.72 38.492L162.165 40.416C160.955 40.9308 159.525 41.1869 157.876 41.1869C155.892 41.1869 154.335 40.6175 153.201 39.48C152.071 38.3425 151.504 36.815 151.504 34.8988C151.504 33.0177 152.031 31.4512 153.085 30.2019C154.189 28.8681 155.681 28.2012 157.559 28.2012C159.403 28.2012 160.799 28.8681 161.747 30.2019C162.497 31.2614 162.875 32.5718 162.875 34.1279ZM160.164 33.409C160.183 32.5874 159.997 31.8776 159.612 31.2783C159.12 30.5074 158.364 30.1226 157.347 30.1226C156.417 30.1226 155.661 30.4983 155.084 31.2523C154.611 31.8516 154.329 32.5705 154.243 33.4077H160.164V33.409Z"
        fill={theme.dark}
      />
      <path
        d="M65.4 13.0113C65.4 14.5414 64.9293 15.6932 63.9893 16.4667C63.1186 17.1804 61.8813 17.5379 60.2786 17.5379C59.484 17.5379 58.804 17.5041 58.2346 17.4365V9.07621C58.9773 8.95921 59.7773 8.89941 60.6413 8.89941C62.168 8.89941 63.3186 9.22311 64.0946 9.87051C64.964 10.6024 65.4 11.6489 65.4 13.0113ZM63.9266 13.049C63.9266 12.0571 63.6573 11.2966 63.1186 10.7662C62.58 10.2371 61.7933 9.97191 60.7573 9.97191C60.3173 9.97191 59.9426 10.0005 59.632 10.0603V16.416C59.804 16.442 60.1186 16.4537 60.576 16.4537C61.6453 16.4537 62.4706 16.1638 63.052 15.584C63.6333 15.0042 63.9266 14.1592 63.9266 13.049Z"
        fill={theme.dark}
      />
      <path
        d="M73.2119 14.3482C73.2119 15.2907 72.9359 16.0629 72.3839 16.6687C71.8052 17.2914 71.0386 17.6021 70.0812 17.6021C69.1586 17.6021 68.4239 17.3044 67.8759 16.7064C67.3292 16.1097 67.0559 15.357 67.0559 14.4496C67.0559 13.5006 67.3372 12.7219 67.9026 12.1174C68.4679 11.5129 69.2279 11.21 70.1852 11.21C71.1079 11.21 71.8492 11.5077 72.4106 12.1044C72.9439 12.6842 73.2119 13.433 73.2119 14.3482ZM71.7626 14.3924C71.7626 13.8269 71.6372 13.342 71.3879 12.9377C71.0946 12.4489 70.6772 12.2045 70.1346 12.2045C69.5732 12.2045 69.1466 12.4489 68.8532 12.9377C68.6026 13.342 68.4786 13.8347 68.4786 14.4171C68.4786 14.9826 68.6039 15.4675 68.8532 15.8718C69.1559 16.3606 69.5772 16.605 70.1212 16.605C70.6546 16.605 71.0732 16.3567 71.3746 15.8588C71.6332 15.4467 71.7626 14.9579 71.7626 14.3924Z"
        fill={theme.dark}
      />
      <path
        d="M83.6867 11.334L81.7201 17.4622H80.4401L79.6254 14.8011C79.4187 14.1368 79.2507 13.4764 79.1201 12.8212H79.0947C78.9734 13.4946 78.8054 14.1537 78.5894 14.8011L77.7241 17.4622H76.4294L74.5801 11.334H76.0161L76.7267 14.2473C76.8987 14.9363 77.0401 15.5928 77.1534 16.2142H77.1787C77.2827 15.702 77.4547 15.0494 77.6974 14.2603L78.5894 11.3353H79.7281L80.5827 14.1979C80.7894 14.896 80.9574 15.5681 81.0867 16.2155H81.1254C81.2201 15.585 81.3627 14.9129 81.5521 14.1979L82.3147 11.3353H83.6867V11.334Z"
        fill={theme.dark}
      />
      <path
        d="M90.9307 17.463H89.5334V13.953C89.5334 12.8714 89.112 12.3306 88.2667 12.3306C87.852 12.3306 87.5174 12.4788 87.2574 12.7765C87 13.0742 86.8694 13.4252 86.8694 13.8269V17.4617H85.472V13.0859C85.472 12.5477 85.4547 11.964 85.4214 11.3322H86.6494L86.7147 12.2903H86.7534C86.9161 11.9926 87.1587 11.7469 87.4774 11.5506C87.856 11.3218 88.28 11.2061 88.744 11.2061C89.3307 11.2061 89.8187 11.3907 90.2067 11.7612C90.6894 12.2149 90.9307 12.8922 90.9307 13.7918V17.463Z"
        fill={theme.dark}
      />
      <path
        d="M94.7839 17.4626H93.3879V8.52246H94.7839V17.4626Z"
        fill={theme.dark}
      />
      <path
        d="M103.011 14.3482C103.011 15.2907 102.735 16.0629 102.183 16.6687C101.604 17.2914 100.836 17.6021 99.8801 17.6021C98.9561 17.6021 98.2214 17.3044 97.6747 16.7064C97.1281 16.1097 96.8547 15.357 96.8547 14.4496C96.8547 13.5006 97.1361 12.7219 97.7014 12.1174C98.2667 11.5129 99.0267 11.21 99.9827 11.21C100.907 11.21 101.647 11.5077 102.209 12.1044C102.743 12.6842 103.011 13.433 103.011 14.3482ZM101.56 14.3924C101.56 13.8269 101.435 13.342 101.185 12.9377C100.893 12.4489 100.475 12.2045 99.9334 12.2045C99.3707 12.2045 98.9441 12.4489 98.6521 12.9377C98.4014 13.342 98.2774 13.8347 98.2774 14.4171C98.2774 14.9826 98.4027 15.4675 98.6521 15.8718C98.9547 16.3606 99.3761 16.605 99.9201 16.605C100.453 16.605 100.871 16.3567 101.172 15.8588C101.432 15.4467 101.56 14.9579 101.56 14.3924Z"
        fill={theme.dark}
      />
      <path
        d="M109.773 17.463H108.519L108.415 16.7571H108.376C107.947 17.32 107.335 17.6021 106.54 17.6021C105.947 17.6021 105.467 17.4162 105.105 17.047C104.777 16.7116 104.613 16.2943 104.613 15.799C104.613 15.0502 104.933 14.4795 105.577 14.0843C106.22 13.6891 107.124 13.4954 108.288 13.5045V13.3901C108.288 12.5828 107.853 12.1798 106.983 12.1798C106.363 12.1798 105.816 12.3319 105.344 12.6335L105.06 11.7391C105.644 11.3868 106.365 11.21 107.216 11.21C108.859 11.21 109.683 12.055 109.683 13.745V16.0018C109.683 16.6141 109.713 17.1016 109.773 17.463ZM108.323 15.357V14.4119C106.781 14.3859 106.011 14.798 106.011 15.6469C106.011 15.9667 106.099 16.2059 106.279 16.3658C106.459 16.5257 106.688 16.605 106.961 16.605C107.268 16.605 107.555 16.5101 107.816 16.3216C108.079 16.1318 108.24 15.8913 108.3 15.5962C108.315 15.5299 108.323 15.4493 108.323 15.357Z"
        fill={theme.dark}
      />
      <path
        d="M117.713 17.4626H116.473L116.408 16.4785H116.369C115.973 17.2273 115.299 17.6017 114.351 17.6017C113.593 17.6017 112.963 17.3118 112.463 16.732C111.963 16.1522 111.713 15.3995 111.713 14.4752C111.713 13.4833 111.984 12.6799 112.528 12.0663C113.055 11.4943 113.7 11.2083 114.468 11.2083C115.312 11.2083 115.903 11.4852 116.239 12.0403H116.265V8.52246H117.664V15.8116C117.664 16.4083 117.68 16.9582 117.713 17.4626ZM116.265 14.8782V13.8564C116.265 13.6796 116.252 13.5366 116.227 13.4274C116.148 13.0998 115.979 12.8242 115.721 12.6019C115.461 12.3796 115.148 12.2678 114.787 12.2678C114.265 12.2678 113.857 12.4693 113.557 12.8736C113.26 13.2779 113.109 13.794 113.109 14.4245C113.109 15.0303 113.252 15.5217 113.539 15.9C113.841 16.303 114.249 16.5045 114.76 16.5045C115.219 16.5045 115.585 16.3368 115.864 16.0001C116.133 15.6894 116.265 15.315 116.265 14.8782Z"
        fill={theme.dark}
      />
      <path
        d="M129.664 14.3482C129.664 15.2907 129.388 16.0629 128.836 16.6687C128.257 17.2914 127.492 17.6021 126.533 17.6021C125.612 17.6021 124.877 17.3044 124.328 16.7064C123.781 16.1097 123.508 15.357 123.508 14.4496C123.508 13.5006 123.789 12.7219 124.355 12.1174C124.92 11.5129 125.68 11.21 126.639 11.21C127.56 11.21 128.303 11.5077 128.863 12.1044C129.396 12.6842 129.664 13.433 129.664 14.3482ZM128.216 14.3924C128.216 13.8269 128.091 13.342 127.841 12.9377C127.547 12.4489 127.131 12.2045 126.587 12.2045C126.027 12.2045 125.6 12.4489 125.305 12.9377C125.055 13.342 124.931 13.8347 124.931 14.4171C124.931 14.9826 125.056 15.4675 125.305 15.8718C125.608 16.3606 126.029 16.605 126.573 16.605C127.107 16.605 127.527 16.3567 127.828 15.8588C128.085 15.4467 128.216 14.9579 128.216 14.3924Z"
        fill={theme.dark}
      />
      <path
        d="M137.177 17.463H135.781V13.953C135.781 12.8714 135.36 12.3306 134.513 12.3306C134.099 12.3306 133.764 12.4788 133.505 12.7765C133.247 13.0742 133.117 13.4252 133.117 13.8269V17.4617H131.719V13.0859C131.719 12.5477 131.703 11.964 131.669 11.3322H132.896L132.961 12.2903H133C133.164 11.9926 133.407 11.7469 133.724 11.5506C134.104 11.3218 134.527 11.2061 134.992 11.2061C135.577 11.2061 136.065 11.3907 136.453 11.7612C136.937 12.2149 137.177 12.8922 137.177 13.7918V17.463Z"
        fill={theme.dark}
      />
      <path
        d="M146.581 12.3553H145.043V15.3323C145.043 16.0889 145.316 16.4672 145.857 16.4672C146.108 16.4672 146.316 16.4464 146.48 16.4035L146.516 17.437C146.24 17.5384 145.877 17.5891 145.431 17.5891C144.879 17.5891 144.449 17.4253 144.139 17.0977C143.827 16.7701 143.672 16.2189 143.672 15.4454V12.3553H142.753V11.3348H143.672V10.2116L145.041 9.80859V11.3335H146.58V12.3553H146.581Z"
        fill={theme.dark}
      />
      <path
        d="M153.979 17.4626H152.58V13.9786C152.58 12.8801 152.159 12.3302 151.315 12.3302C150.667 12.3302 150.224 12.6487 149.981 13.2857C149.94 13.4196 149.916 13.5834 149.916 13.7758V17.4613H148.52V8.52246H149.916V12.2158H149.943C150.383 11.5437 151.013 11.2083 151.831 11.2083C152.409 11.2083 152.888 11.3929 153.268 11.7634C153.741 12.2249 153.979 12.9113 153.979 13.8187V17.4626Z"
        fill={theme.dark}
      />
      <path
        d="M161.609 14.1089C161.609 14.3533 161.591 14.5587 161.557 14.7264H157.367C157.385 15.3322 157.585 15.7937 157.973 16.1135C158.328 16.3995 158.785 16.5425 159.345 16.5425C159.965 16.5425 160.531 16.4463 161.04 16.2526L161.259 17.199C160.663 17.4512 159.961 17.5773 159.149 17.5773C158.176 17.5773 157.409 17.2978 156.855 16.7388C156.297 16.1798 156.021 15.4297 156.021 14.4885C156.021 13.5642 156.279 12.7946 156.797 12.181C157.339 11.5258 158.071 11.1982 158.995 11.1982C159.899 11.1982 160.585 11.5258 161.049 12.181C161.424 12.701 161.609 13.3445 161.609 14.1089ZM160.276 13.7566C160.287 13.3523 160.195 13.0039 160.005 12.7101C159.763 12.3318 159.393 12.142 158.893 12.142C158.437 12.142 158.065 12.3266 157.781 12.6971C157.549 12.9922 157.412 13.3445 157.367 13.7566H160.276Z"
        fill={theme.dark}
      />
    </svg>
  );
}
