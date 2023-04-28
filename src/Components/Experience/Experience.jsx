import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'
const Experience = () => {
  return (
    <section id="experience">
            <h5>What Skills I Have</h5>
            <h2 className='exp'>My Experience</h2>        

        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_details-icons'/>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_details-icons'/>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_details-icons'/>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_details-icons'/>
                        <h4>ReactJs</h4>
                        <small className='text-light'>Intermediate</small>
                    </article>
                </div>
            </div>
            <div className="experience_backend">
                <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_detail'>
                            <BsFillPatchCheckFill className='experience_details-icons' />
                            <h4>Node JS, Express</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_detail'>
                            <BsFillPatchCheckFill className='experience_details-icons'/>
                            <h4>Python</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_detail'>
                            <BsFillPatchCheckFill className='experience_details-icons'/>
                            <h4>Java</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_detail'>
                            <BsFillPatchCheckFill className='experience_details-icons'/>
                            <h4>SQL</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>

            </div>
        </div>
    </section>
  )
}

export default Experience