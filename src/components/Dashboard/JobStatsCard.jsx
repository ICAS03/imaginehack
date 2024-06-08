import React from 'react'
import '../Dashboard/JobStatsCard.css'


const JobStatsCard = ({ title, number, description, icon }) => {
  return (
    <>
      <div className="card-job-other">
        <div className="card-job-other-flexbox">
          <div className="card-job-other-title">{title}</div>
          <div className="card-job-other-icon">{icon}</div>
        </div>
        <div>
          <div className="card-job-other-number">{number}</div>
          <div className="card-job-other-desc">{description}</div>
        </div>
      </div>
    </>
  )
}

export default JobStatsCard