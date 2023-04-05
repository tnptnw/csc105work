import React from 'react'
import { useParams } from 'react-router-dom'

export const Profile = () => {
    const {profileId} = useParams();
  return (
    <p>This student id is {profileId}</p>
  )
}
