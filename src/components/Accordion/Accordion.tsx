import React from "react";

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    showMenu: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    if (props.showMenu) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
    return <div></div>
}

type AccordionPropsType = {
    titleValue: string;
    collapsedMenu: boolean;
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody showMenu={props.collapsedMenu}/>
        </div>
    )
}

export default Accordion;