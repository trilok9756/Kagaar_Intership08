import React from 'react'

export default function Card() {
  return (
    <div className= 'max-w-4xl mx-auto bg-card dark:bg-card-foreground rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center'>
      <div className="md:w-2/3 md:pr-4 flex-1">
        {/* <Avatar /> */}
        <div className="flex items-center mb-4">
    <img className="w-10 h-10 rounded-full" src="https://dummyimage.com/50x50/b8b2b8/000000" alt="User Avatar" />
    <div className="ml-3">
      <p className="text-sm font-semibold">Amit Das<span className="text-xs ml-1">4 days ago</span></p>
    </div>
  </div>
        <h2 className='text-primary text-lg font-bold'>Melody mobile app: a UI UX case study</h2>
        <p className='text-muted-foreground mt-2'>An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...</p>
        {/* <Tags /> */}
        <div className="flex justify-between items-center mt-4">
    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">UI UX Design</span>
    <span className='text-muted-foreground'>3 min read</span>
    <button className='text-muted-foreground hover:text-muted'>Selected for you</button>
  </div>
      </div>
      <img aria-hidden="true" alt="Placeholder" src="https://dummyimage.com/200x100/b8b2b8/000000" className="mt-4 md:mt-0 md:ml-4 md:w-1/3 w-full" />
    </div>
  )
}
