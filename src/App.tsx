import React from 'react';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";


function hello() {
    console.log('hello samurai')
}

hello()

function App() {
    return (
        <div className="App">
            <AppTitle title={' Welcome to IT, samurai! Let\'s go!'}/>
            Article 1
            <Rating value={3}/>
            Article 2
            <Rating value={1}/>
            <Accordion collapsedMenu={true}  titleValue={'ShowMenu'}/>
            <Accordion collapsedMenu={false}  titleValue={'HideMenu'}/>
        </div>
    );
}

type RatingPropsType = {
    title: string
}

function AppTitle(props : RatingPropsType) {
    return (
        <div>
            {props.title}
        </div>
    )
}


export {Accordion}
export default App;


