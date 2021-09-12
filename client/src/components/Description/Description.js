import React from 'react'
import DescriptionStyle from "./Description.module.css";


const Description = props => {
    let text = props.props
    const reguex = /<[^>]*>?/g
    text = text.replace(reguex,'')

    return (
        <div className={DescriptionStyle.summary}>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Description
