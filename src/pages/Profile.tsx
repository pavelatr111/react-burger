
import { Outlet } from "react-router-dom";
import { UserProfile } from "../components/Profile/Profile";

import styles from "./App.module.css";

function ProfilePage() {

  return (
    <section className={styles.profile}>
      <UserProfile />
      <Outlet />
    </section>
  );
}

export default ProfilePage;
