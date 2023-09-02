import React from "react"
// import "./Features.css"
import "./Port.css"
import data from "./Portfoliodata"
import Card from "./cardp"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>VISIT MY PROJECT </h4>
            <h1>MY PROJECT</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

         
          </div>
        </div>
      </section>
    </>
  )
}

export default Features