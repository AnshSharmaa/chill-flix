import SkeletonLoader from 'tiny-skeleton-loader-react'

import './Loading.scss'

const Loading = () => {
  return (
    <div className='loading-row'>
      <SkeletonLoader width='228px' height='342px' background='#454545' borderRadius='1px' block={false} />
      <SkeletonLoader width='228px' height='342px' background='#454545' borderRadius='1px' block={false} />
      <SkeletonLoader width='228px' height='342px' background='#454545' borderRadius='1px' block={false} />
      <SkeletonLoader width='228px' height='342px' background='#454545' borderRadius='1px' block={false} />
      <SkeletonLoader width='228px' height='342px' background='#454545' borderRadius='1px' block={false} />
      <SkeletonLoader width='228px' height='342px' background='#454545' borderRadius='1px' block={false} />
    </div>
  )
}

export default Loading
