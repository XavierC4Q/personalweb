import React from 'react'

const Bio = () => {
  return(
    <pre>
      {`Thank you for visiting my website. Allow me to introduce myself; my name is Xavier James Munroe and I am a web developer. As the first male in my extended family to be born
in the United States, I have always had an intense pressure on me to succeed. I was always pushed to work hard and take my education seriously so I could fulfill the American Dream
my parents envisioned for me. From middle school to college, I maintained great grades and stayed out of trouble. I felt I had everything figured out and was on the path to a fulfilling
life. But it isn't always that simple.
After graduating in 2013, I came to the realization that I really didn't know what I wanted to do. I had too much time pushing through school and not enough time figuring out what makes
me happy. Any field I was interested in required a different degree, further education I couldn't afford or was too far. I felt stuck but life wasn't going to wait for me to figure it
out so I had to find a way to make ends meet.
For the next 4 years I worked in the customer service industry, catering to the needs of tourists exploring New York City. While I learned to expand my communication and organizational
skills, the job itself didn't give me a great sense of satisfaction. Too often I was forced to repressing my own interests and needs for the sake of our guest. I yearned for a career
that would give me a sense of purpose and excitement.
During the summer of 2017, a coworker referred me to a coding bootcamp. I was uncertain at first but I took the dive and signed up. It had to be one of the best moves I have made in
my life. Now I look forward to using technology to express myself and create a better, easier to navigate world to enjoy.`}
    </pre>
  )
}

const About = () => {
  return(
    <div>
      <h1>About Me</h1>
      <Bio />
    </div>
  )
}

export default About
