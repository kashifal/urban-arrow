import React from 'react'

const AboutContactInfo = ({icon, title, desc, link}) => {
  return (
    <div className='flex flex-col w-[80%] gap-5'>
        <span className="text-4xl">
        {icon}
        </span>
        <h1 className="font-bold text-3xl pt-6">{title}</h1>
        <p className="text-sm leading-loose">{desc}
</p>
<a href="#" className="">{link}</a>

    </div>
  )
}

export default AboutContactInfo