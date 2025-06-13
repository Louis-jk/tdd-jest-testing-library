import React, { useState } from 'react'
import { SkillProps } from './Skills.types'

const Skills = (props: SkillProps) => {

    const { skills } = props    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
            <p>Sills</p>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    )
}

export default Skills