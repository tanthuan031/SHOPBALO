import React from 'react';
import ProfileClient from '../../../components/client/Profile';
export function ProfilePage(props) {
  return (
    <section>
      <div className="container mt-5 padding-48px">
        <h5 className="text-danger font-weight-bold mb-3">
          <ProfileClient />
        </h5>
      </div>
    </section>
  );
}
