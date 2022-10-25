import Image from "next/image"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
  {
    name: 'Allison Danielson',
    role: 'Director of Operations',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Allison is a people person and is always interested in knowing more about an individual’s passions and goals. As our Director of Operations, she also possesses strong attention to detail and is great at bringing people together to discuss how to turn their practice into a well-oiled machine by implementing systems like Apex Longevity. These attributes make her the perfect person to work with prospective and current providers.',
    twitterUrl: '#',
    linkedinUrl: '#',
    alt: 'Headshot of the Director of Operations'
  },
    {
      name: 'Dr. Chris Tomshack',
      role: 'Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Dr. Tomshack is defined by his relentless desire to discover better ways to both help patients achieve phenomenal health while assisting doctors to achieve their dreams by first creating their ultimate practice. Dr. Tomshack realized there was a huge need for chiropractic offices to legally offer discounted care and thus created Apex Longevity. Dr. Tomshack has degrees in chiropractic and business and has studied business at the graduate level, making him a unicorn among chiropractors. His passion is helping doctors create their dream lifestyle by building successful practices delivering exceptional care.',
      twitterUrl: '#',
      linkedinUrl: '#',
      alt: 'Headshot of the Founder & CEO'
    },
    {
      name: 'Lisa Tomshack',
      role: 'Executive Vice President & HR',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: `Lisa has been with Apex Longevity since its inception in 2017.  Lisa's positive energy is contagious and she is an integral component that helps make the Apex culture the very best.  She is a CT graduate from Palmer college of Chiropractic and loves to bike, walk, travel, landscape and enjoy precious time with her family and friends.`,
      twitterUrl: '#',
      linkedinUrl: '#',
      alt: 'Headshot of the Executive Vice President & HR'
    },
    {
      name: 'Kristen Wallace',
      role: 'Corporate Controller',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Kristen Wallace spearheads the financial strategy at Apex Longevity as a Corporate Controller. With a background in corporate financing and financial reporting systems, Kristen can manage daily accounting activity while setting a course for long-term growth. She has served as a valued accounting and financial advisor at Apex Longevity since 2017.',
      twitterUrl: '#',
      linkedinUrl: '#',
      alt: 'Headshot of the Coporate Controller'
    },
  ]
  
  export default function OurTeam() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
              <p className="text-xl text-gray-500">
              Apex was founded because we noticed a trend of audits that began penalizing chiropractors for offering cash discounts to patients. We learned that almost every state has narrow restrictions on how many patients can be extended cash discounts of any type.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                {people.map((person) => (
                  <li key={person.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <Image 
                        // layout='fill'
                        height='350'
                        width='300'
            objectFit='cover'
            priority='true' className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt={person.alt} />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="space-y-1 text-lg font-medium leading-6">
                            <h3>{person.name}</h3>
                            <p className="text-apexG">{person.role}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{person.bio}</p>
                          </div>
                          <ul role="list" className="flex space-x-5">
                            <li>
                              <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  