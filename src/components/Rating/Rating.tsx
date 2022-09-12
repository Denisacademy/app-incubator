import React from "react";

type StarPropsType = {
    selected : boolean
}

function Star(props : StarPropsType) {
    if(props.selected) {
        return  <span><b>star </b></span>
    }
    return (
        <>
            <span>star </span>
        </>
    )
}

type RatingPropsType = {
    value : 1 | 3
}

export function Rating(props: RatingPropsType) {
    if(props.value === 3) {
        return (<div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>)
    }
    if(props.value === 1) {
        return (<div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>)
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}