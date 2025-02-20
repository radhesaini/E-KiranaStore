import React from 'react';
import './ProfileDetails.css';
interface ProfileDetailsProps {
  data: any;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ data }) => {
  const { name, email, src } = data;
  return (
    <div className="profile-details">
      <img src={src} alt="Profile" className="profile-image" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      {/* Add more profile details here as needed */}
    </div>
  );
};

export default ProfileDetails;
