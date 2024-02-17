import React from "react";
import "./Header.css";
import profilePicture from "../../asset/picture.png";
const Header = () => {
  return (
    <div className="header">
      <h2>ToDo</h2>
      <div className="headerElement">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_7359_485)">
            <path
              d="M10.0001 12.5C11.3808 12.5 12.5001 11.3807 12.5001 9.99999C12.5001 8.61928 11.3808 7.49999 10.0001 7.49999C8.61937 7.49999 7.50008 8.61928 7.50008 9.99999C7.50008 11.3807 8.61937 12.5 10.0001 12.5Z"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6061 12.2727C15.5053 12.5012 15.4752 12.7547 15.5198 13.0004C15.5643 13.2462 15.6815 13.473 15.8561 13.6515L15.9016 13.697C16.0425 13.8377 16.1542 14.0048 16.2305 14.1887C16.3067 14.3727 16.346 14.5698 16.346 14.7689C16.346 14.968 16.3067 15.1652 16.2305 15.3491C16.1542 15.5331 16.0425 15.7002 15.9016 15.8409C15.7609 15.9818 15.5938 16.0935 15.4098 16.1698C15.2259 16.246 15.0287 16.2853 14.8296 16.2853C14.6305 16.2853 14.4334 16.246 14.2494 16.1698C14.0655 16.0935 13.8984 15.9818 13.7577 15.8409L13.7122 15.7954C13.5337 15.6208 13.3069 15.5036 13.0611 15.4591C12.8154 15.4145 12.5619 15.4446 12.3334 15.5454C12.1093 15.6415 11.9183 15.8009 11.7836 16.0042C11.649 16.2074 11.5768 16.4456 11.5758 16.6894V16.8182C11.5758 17.22 11.4162 17.6054 11.1321 17.8895C10.8479 18.1737 10.4625 18.3333 10.0607 18.3333C9.65884 18.3333 9.27346 18.1737 8.98931 17.8895C8.70517 17.6054 8.54554 17.22 8.54554 16.8182V16.75C8.53967 16.4992 8.45851 16.256 8.31259 16.052C8.16667 15.848 7.96276 15.6926 7.72735 15.6061C7.49886 15.5052 7.24539 15.4751 6.99964 15.5197C6.75388 15.5642 6.52711 15.6814 6.34857 15.8561L6.30311 15.9015C6.1624 16.0424 5.99529 16.1541 5.81135 16.2304C5.62742 16.3066 5.43026 16.3459 5.23114 16.3459C5.03203 16.3459 4.83487 16.3066 4.65093 16.2304C4.46699 16.1541 4.29989 16.0424 4.15917 15.9015C4.0183 15.7608 3.90654 15.5937 3.83029 15.4097C3.75405 15.2258 3.7148 15.0287 3.7148 14.8295C3.7148 14.6304 3.75405 14.4333 3.83029 14.2493C3.90654 14.0654 4.0183 13.8983 4.15917 13.7576L4.20463 13.7121C4.37928 13.5336 4.49643 13.3068 4.54099 13.061C4.58555 12.8153 4.55547 12.5618 4.45463 12.3333C4.35859 12.1093 4.19914 11.9182 3.99589 11.7836C3.79264 11.649 3.55447 11.5767 3.31069 11.5757H3.1819C2.78006 11.5757 2.39467 11.4161 2.11053 11.132C1.82638 10.8478 1.66675 10.4624 1.66675 10.0606C1.66675 9.65875 1.82638 9.27337 2.11053 8.98922C2.39467 8.70508 2.78006 8.54544 3.1819 8.54544H3.25008C3.50083 8.53958 3.74402 8.45841 3.94804 8.3125C4.15205 8.16658 4.30744 7.96267 4.39402 7.72726C4.49487 7.49877 4.52495 7.2453 4.48039 6.99954C4.43583 6.75379 4.31867 6.52702 4.14402 6.34847L4.09857 6.30302C3.95769 6.1623 3.84594 5.9952 3.76969 5.81126C3.69344 5.62733 3.65419 5.43016 3.65419 5.23105C3.65419 5.03194 3.69344 4.83477 3.76969 4.65084C3.84594 4.4669 3.95769 4.2998 4.09857 4.15908C4.23928 4.01821 4.40639 3.90645 4.59032 3.8302C4.77426 3.75395 4.97142 3.71471 5.17054 3.71471C5.36965 3.71471 5.56681 3.75395 5.75075 3.8302C5.93469 3.90645 6.10179 4.01821 6.24251 4.15908L6.28796 4.20454C6.46651 4.37918 6.69328 4.49634 6.93903 4.5409C7.18478 4.58546 7.43825 4.55538 7.66675 4.45454H7.72735C7.95142 4.3585 8.14252 4.19905 8.27712 3.9958C8.41172 3.79255 8.48396 3.55437 8.48493 3.3106V3.18181C8.48493 2.77996 8.64456 2.39458 8.92871 2.11043C9.21285 1.82629 9.59824 1.66666 10.0001 1.66666C10.4019 1.66666 10.7873 1.82629 11.0715 2.11043C11.3556 2.39458 11.5152 2.77996 11.5152 3.18181V3.24999C11.5162 3.49377 11.5884 3.73194 11.723 3.93519C11.8576 4.13844 12.0487 4.2979 12.2728 4.39393C12.5013 4.49477 12.7548 4.52486 13.0005 4.4803C13.2463 4.43574 13.4731 4.31858 13.6516 4.14393L13.6971 4.09847C13.8378 3.9576 14.0049 3.84585 14.1888 3.7696C14.3727 3.69335 14.5699 3.6541 14.769 3.6541C14.9681 3.6541 15.1653 3.69335 15.3492 3.7696C15.5332 3.84585 15.7003 3.9576 15.841 4.09847C15.9819 4.23919 16.0936 4.4063 16.1699 4.59023C16.2461 4.77417 16.2854 4.97133 16.2854 5.17044C16.2854 5.36956 16.2461 5.56672 16.1699 5.75066C16.0936 5.93459 15.9819 6.1017 15.841 6.24241L15.7955 6.28787C15.6209 6.46641 15.5037 6.69318 15.4592 6.93894C15.4146 7.18469 15.4447 7.43816 15.5455 7.66666V7.72726C15.6416 7.95133 15.801 8.14243 16.0043 8.27703C16.2075 8.41163 16.4457 8.48387 16.6895 8.48484H16.8183C17.2201 8.48484 17.6055 8.64447 17.8896 8.92862C18.1738 9.21276 18.3334 9.59815 18.3334 9.99999C18.3334 10.4018 18.1738 10.7872 17.8896 11.0714C17.6055 11.3555 17.2201 11.5151 16.8183 11.5151H16.7501C16.5063 11.5161 16.2681 11.5883 16.0649 11.723C15.8616 11.8576 15.7022 12.0487 15.6061 12.2727Z"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_7359_485">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="6" fill="white" />
          <path
            d="M17.7952 27.5C18.3828 28.0186 19.1547 28.3333 20.0001 28.3333C20.8454 28.3333 21.6173 28.0186 22.2049 27.5M25.0001 16.6667C25.0001 15.3406 24.4733 14.0688 23.5356 13.1311C22.5979 12.1934 21.3261 11.6667 20.0001 11.6667C18.674 11.6667 17.4022 12.1934 16.4645 13.1311C15.5268 14.0688 15.0001 15.3406 15.0001 16.6667C15.0001 19.2418 14.3504 21.005 13.6248 22.1712C13.0127 23.1549 12.7066 23.6467 12.7178 23.784C12.7303 23.9359 12.7624 23.9938 12.8849 24.0846C12.9954 24.1667 13.4939 24.1667 14.4908 24.1667H25.5093C26.5062 24.1667 27.0047 24.1667 27.1152 24.0846C27.2377 23.9938 27.2699 23.9359 27.2823 23.784C27.2935 23.6467 26.9875 23.1549 26.3753 22.1712C25.6497 21.005 25.0001 19.2418 25.0001 16.6667Z"
            stroke="#667085"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <img src={profilePicture} alt="profile picture" />
      </div>
    </div>
  );
};
export default Header;
