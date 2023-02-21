import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UserContributionsPage = () => {
    const { userId } = useParams()
    const [pr, setPr] = useState()
    
    useEffect(() => {
       (async () => {
        const response = await fetch(`https://api.github.com/search/issues?q=type:pr+author:${userId}+org:Real-Dev-Squad`)
        
        const result = await response.json()
        setPr(result)
       }
        
       )(); 
    },[])
    
    return(
        <div>
            <h1>{userId} Contributions</h1>
            <ol className="prs">
            {
               pr && pr.items.map(pr => (
                <li>
                    <a href={pr.pull_request.html_url} target="_blank" rel="noreferrer">
                        {pr.title}
                    </a>
                </li>
                ))
            }   
            </ol>
        </div>
    )
}

export default UserContributionsPage;