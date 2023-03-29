import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { UserProfile } from "../components/Profile/Profile";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import { getUserActions } from "../services/actions/user";
import styles from "./App.module.css";

function ProfilePage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch<any>(getUserActions());
  //   }, [dispatch]);

  return (
    <section className={styles.profile}>
      <UserProfile />
      <ProfileForm />
      <Outlet />
    </section>
  );
}

export default ProfilePage;
