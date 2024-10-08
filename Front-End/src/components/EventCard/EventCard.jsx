import React from 'react'
import styled from "styled-components"
function EventCard({title,date,img}) {
  return (
    <Container>

    <div className='event-card'>
      <div className='event-img'>
        <img src={img} alt="" />
      </div>
      <div className="event-title">{title}</div>
      <div className="event-date">{date}</div>
    </div>
    </  Container>
  )
}

const Container = styled.div`
  .event-card{
    display: flex;
    width: 350px;
    height: 100%;
    flex-direction: column;
    border: 1px solid #cfd3dc;
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
      color: #6b88ad;
    }
  }
`

export default EventCard
