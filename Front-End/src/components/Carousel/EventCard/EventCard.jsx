import React from 'react'
import styled from "styled-components"
import {motion} from 'framer-motion'
function EventCard({title,date,img}) {
  return (
    <Container>

    <motion.div whileHover={{scale:1.05}} transition={{ duration: 0.3, ease: "easeOut" }} className='event-card'>
      <div className='event-img'>
        <img src={img} alt="" />
      </div>
      <div className="event-title">{title}</div>
      <div className="event-date">{date}</div>
    </motion.div>
    </  Container>
  )
}

const Container = styled.div`
  .event-card{
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .event-img{
      img{
        height: 200px;
        width: 100%;
      }
    }
    .event-title{
      color: #1a1c4d;
      font-size: 1.25rem;
      padding: 1rem;
    }
    .event-date{
      padding: 1rem;
      padding-top : 0rem;
      color: #525252;
    }
  }
`

export default EventCard
