
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { UserProfile } from "../components/Profile/Profile";
import ProfileForm from "../components/ProfileForm/ProfileForm";

import styles from "./App.module.css";

function ProfilePage() {

  return (
    <section className={styles.profile}>
      <UserProfile />
      <ProfileForm />
      <Outlet />
    </section>
  );
}

export default ProfilePage;
