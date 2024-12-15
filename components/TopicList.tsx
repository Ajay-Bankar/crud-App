import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import EditIcon from '@/components/EditIcon'

const getTopic = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error("failed to fetch error");
    }
    
    return res.json();
  } catch (error) {
    console.log("error loading topics");
    return { topic: [] }; // Return an empty array to prevent undefined errors
  }
}

const truncateDescription = (description: string, maxLength: number = 40) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.slice(0, maxLength) + '...';
}

const TopicList = async() => {
  const { topic } = await getTopic()
  
  console.log(topic);
  
  return (
    <>
    {topic.map((t: any) => (
      <div
        key={t._id}
        className='flex justify-between p-4 border-b border-slate-300 gap-5'
      >
        <div>
          <p className='font-semibold text-xl text-primary'>{t.title}</p>
          <div className='text-sm font-normal text-secondary-foreground'>
            {truncateDescription(t.description)}
          </div>
        </div>
        <div className='flex gap-4'>
          <div><RemoveBtn id={t._id}/></div>
          <Link href={`/editTopic/${t._id}`}><EditIcon/></Link>
        </div>
      </div>
    ))}
    </>
  )
}

export default TopicList