import { useParams } from 'react-router-dom'
import './EventHeader.css'
import { useContext, useEffect } from 'react'
import { GeneralContext } from '../../hooks/GeneralContext'
import eventImage from "./../../assets/medicalequipment.jpg"
export default function EventHeader(){
    const {id} = useParams()
    const {events} = useContext(GeneralContext)
    useEffect(function(){
        document.title = `${events[id].name} | Providence of Grace`
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    })
    return(
        <div className="event-detail-header">
            <h1>{events[id].name}</h1>
            <img alt='' src={eventImage} />
        </div>
    )
}