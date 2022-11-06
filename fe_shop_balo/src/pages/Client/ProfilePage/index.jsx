import React from 'react';
import { useSelector } from 'react-redux';
import ProfileClient from '../../../components/client/Profile';
import ProfileEditClient from '../../../components/client/Profile/Edit';
import { isEditProfileSelector } from '../../../redux/selectors/profile/profile.selector';
export function ProfilePage(props) {
  const isEditProfile = useSelector(isEditProfileSelector);
  return (
    <section>
      <div className="container mt-5 padding-48px">
        <h5 className="text-danger font-weight-bold mb-3">
          {isEditProfile ? <ProfileEditClient /> : <ProfileClient />}
        </h5>
      </div>
    </section>
  );
}
