'use client'
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@/views/store';

const list = [
  {
    link: 'home',
    visiblePage: ['home', 'category'],
    svgElement: (
      <svg className='h-25px w-25px' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.40689 9.67283C2.77306 10.2433 2.41113 11.0559 2.41113 11.9087V19.593C2.41113 21.2543 3.75786 22.601 5.41913 22.601H19.4565C21.1178 22.601 22.4645 21.2543 22.4645 19.593V11.9087C22.4645 11.0559 22.1025 10.2433 21.4687 9.67283L14.4501 3.35603C13.3061 2.32647 11.5695 2.32647 10.4255 3.35604L3.40689 9.67283ZM11.4351 13.577C10.3276 13.577 9.4298 14.4748 9.4298 15.5823V19.593C9.4298 20.1468 9.87871 20.5957 10.4325 20.5957H14.4431C14.9969 20.5957 15.4458 20.1468 15.4458 19.593V15.5823C15.4458 14.4748 14.548 13.577 13.4405 13.577H11.4351Z" fill="#141416"/>
      </svg>
    )
  },
  {
    link: 'chat',
    visiblePage: ['chat'],
    svgElement: (
      <svg className='w-27px h-26px' width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.4498 3.5485C8.61145 3.5485 4.67529 7.48466 4.67529 12.323C4.67529 17.1614 8.61145 21.0976 13.4498 21.0976C18.2882 21.0976 22.2244 17.1614 22.2244 12.323C22.2244 7.48466 18.2882 3.5485 13.4498 3.5485ZM13.45 22.646C7.75785 22.646 3.12695 18.0151 3.12695 12.323C3.12695 6.6309 7.75785 2 13.45 2C19.1421 2 23.773 6.6309 23.773 12.323C23.773 18.0151 19.1421 22.646 13.45 22.646Z" fill="#141416"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.9922 16.1348C16.8569 16.1348 16.7207 16.0997 16.5958 16.0264L12.704 13.7048C12.4707 13.5644 12.3262 13.3115 12.3262 13.0389V8.03436C12.3262 7.60698 12.673 7.26013 13.1004 7.26013C13.5288 7.26013 13.8746 7.60698 13.8746 8.03436V12.5992L17.3896 14.6948C17.7561 14.9146 17.8768 15.3895 17.658 15.757C17.5124 15.9996 17.2554 16.1348 16.9922 16.1348Z" fill="#141416"/>
      </svg>
    )
  },
  {
    link: 'profile',
    visiblePage: ['profile'],
    svgElement: (
      <svg className='w-27px h-26px' width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7717 2.5034C11.8146 2.5034 10.228 4.08998 10.228 6.04712C10.228 8.00427 11.8146 9.59085 13.7717 9.59085C15.7289 9.59085 17.3155 8.00427 17.3155 6.04712C17.3155 4.08998 15.7289 2.5034 13.7717 2.5034ZM8.72461 6.04712C8.72461 3.25967 10.9843 1 13.7717 1C16.5592 1 18.8189 3.25967 18.8189 6.04712C18.8189 8.83457 16.5592 11.0942 13.7717 11.0942C10.9843 11.0942 8.72461 8.83457 8.72461 6.04712Z" fill="#141416"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.06425 17.619C7.62502 15.9515 10.1634 14.6964 14.0585 14.6964C17.9535 14.6964 20.4919 15.9515 22.0527 17.619C23.5938 19.2655 24.1169 21.2459 24.1169 22.6071C24.1169 23.0222 23.7804 23.3588 23.3652 23.3588H4.7517C4.33655 23.3588 4 23.0222 4 22.6071C4 21.2459 4.52314 19.2655 6.06425 17.619ZM5.56732 21.8554H22.5496C22.3932 20.8905 21.9305 19.6886 20.9551 18.6464C19.7238 17.3309 17.6088 16.1997 14.0585 16.1997C10.5081 16.1997 8.39311 17.3309 7.16185 18.6464C6.18637 19.6886 5.72375 20.8905 5.56732 21.8554Z" fill="#141416"/>
      </svg>
    )
  }
]

export const Menu = () => {
  const activeLink = usePathname().split('/')[1] || ''
  const router = useRouter()

  const {activeProfileId, activeCategoryId} = useAppSelector(state => state.main.accountData)

  const withMenu = list.filter(item => {
    return item.visiblePage.filter(pageItem => activeLink === pageItem).length !== 0
  }).length !== 0

  if(!withMenu) {
    return <></>
  }

  return (
    <div id='menu' className='fixed bottom-0 w-full bg-[#ffffff] border-t-[1px] border-[#DADADA] p-[4vw_11.2vw_3.3vw] z-[20]'>
      <nav>
        <ul className='flex justify-between mb-[5px]'>
          {list.map(({svgElement, link, visiblePage}, index) => (
            <li 
              onClick={() => router.push('/' + link)} 
              key={index} 
              className={`flex ${(link === 'chat' && (activeProfileId === null || activeCategoryId === null)) ? 'pointer-events-none': '' } items-center justify-between gap-[2.2vw] transition-all flex-col-reverse ${ visiblePage.filter(item => activeLink === item).length !== 0 ? '' : 'opacity-[0.3]'}`}
            >
              <div className={`w-7px h-7px transition-all bg-[#141416] rounded-full ${visiblePage.filter(item => activeLink === item).length !== 0 ? 'opacity-100': 'opacity-0'}`}></div>
              {svgElement}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};