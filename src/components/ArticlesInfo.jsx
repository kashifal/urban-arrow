import React from 'react'

const ArticlesInfo = ({title}) => {
  return (
    <li>
    <a
      href="#"
      className="flex items-center space-x-2 text-[#6f948d] hover:text-teal-800"
    >
      <i className="icon-book-open">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1.2.4em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#6f948d"
            d="M952.08 1.552L529.039 116.144c-10.752 2.88-34.096 2.848-44.815-.16L72.08 1.776C35.295-8.352-.336 18.176-.336 56.048V834.16c0 32.096 24.335 62.785 55.311 71.409l412.16 114.224c11.025 3.055 25.217 4.751 39.937 4.751c10.095 0 25.007-.784 38.72-4.528l423.023-114.592c31.056-8.4 55.504-39.024 55.504-71.248V56.048c.016-37.84-35.616-64.464-72.24-54.496zM479.999 956.943L71.071 843.887c-3.088-.847-7.408-6.496-7.408-9.712V66.143L467.135 177.68c3.904 1.088 8.288 1.936 12.864 2.656zm480.336-122.767c0 3.152-5.184 8.655-8.256 9.503L544 954.207v-775.92c.592-.144 1.2-.224 1.792-.384L960.32 65.775v768.4h.016zM641.999 366.303c2.88 0 5.81-.367 8.69-1.184l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.472c3.968 14.128 16.815 23.344 30.783 23.344m.002 192.001c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473c-4.783-17.008-22.56-26.88-39.472-22.16l-223.936 63.025c-17.024 4.816-26.944 22.464-22.16 39.457c3.968 14.127 16.815 23.36 30.783 23.36m.002 192c2.88 0 5.81-.368 8.69-1.185l223.935-63.024c17.025-4.816 26.945-22.465 22.16-39.473s-22.56-26.88-39.472-22.16L633.38 687.487c-17.024 4.816-26.944 22.464-22.16 39.472c3.968 14.113 16.815 23.345 30.783 23.345M394.629 303.487l-223.934-63.025c-16.912-4.72-34.688 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.937 63.024a31.8 31.8 0 0 0 8.687 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-16.993-5.12-34.657-22.16-39.473m.002 191.999l-223.934-63.025c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.8 31.8 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-16.993-5.12-34.657-22.16-39.473m.002 191.999L170.699 624.46c-16.912-4.72-34.689 5.152-39.473 22.16s5.12 34.656 22.16 39.473l223.936 63.024a31.8 31.8 0 0 0 8.688 1.184c13.968 0 26.815-9.215 30.783-23.343c4.784-17.008-5.12-34.657-22.16-39.473"
          />
        </svg>
      </i>
      <span>{title}</span>
    </a>
  </li>
  )
}

export default ArticlesInfo