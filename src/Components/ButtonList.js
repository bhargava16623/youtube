import React from 'react'
import Button from './Button';


const list=["All","Mixes","News","Live","Music","Podcasts","Debate"];

function ButtonList() {
  return (
    <div className='flex p-2'>
        <Button name="All"/>
        <Button name="Mixes"/>
        <Button name="News"/>
        <Button name="Live"/>
        <Button name="Music"/>
        <Button name="Podcasts"/>
        <Button name="Debate"/>
        <Button name="News"/>
        <Button name="Live"/>
        <Button name="Music"/>
        <Button name="Podcasts"/>
        <Button name="Debate"/>
        <Button name="News"/>
        <Button name="Live"/>
        <Button name="Music"/>
        <Button name="Live"/>
        <Button name="Music"/>
    </div>
  )
}

export default ButtonList;