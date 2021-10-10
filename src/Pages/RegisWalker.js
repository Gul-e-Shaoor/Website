import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import Community from "../components/NewRegistraionWalker/Community";
import GoalSetting from "../components/NewRegistraionWalker/GoalSetting";
import SideBar from "../components/NewRegistraionWalker/SideBar";
import NewStudentForm from "./NewStudentForm";

const RegisWalker = () => {
  const history = useHistory();
  const [applicationStatus, setapplicationStatus] = useState({
    signUpStatus: true,
    personalDetailsStatus: false,
    goalSetting: false,
    joinCommunity: false,
    getMentor: false,
  });
  const managePersonalDetailsStatus = () => {
    setapplicationStatus((prevState) => {
      return {
        ...prevState,
        personalDetailsStatus: true,
      };
    });
  };
  const manageGoalSettingStatus = () => {
    setapplicationStatus((prevState) => {
      return {
        ...prevState,
        goalSetting: true,
      };
    });
  };
  const manageCommunity = () => {
    setapplicationStatus((prevState) => {
      return {
        ...prevState,
        joinCommunity: true,
      };
    });
    history.replace("/");
  };
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{ marginTop: "84px", fontFamily: "Lato", overflowY: "hidden" }}
        className="py-1 px-2"
      >
        <div className="row g-2">
          <div className="col-md-4 col-lg-2 d-block py-2 m-0">
            <div className="" style={{ margin: "0 0", height: "100%" }}>
              <SideBar appStat={applicationStatus} />
            </div>
          </div>
          <div className="col-md-8 col-lg-10 d-block">
            {!applicationStatus.personalDetailsStatus && (
              <NewStudentForm appMan={managePersonalDetailsStatus} />
            )}
            {applicationStatus.personalDetailsStatus &&
              !applicationStatus.goalSetting && (
                <GoalSetting appMan={manageGoalSettingStatus} />
              )}
            {applicationStatus.goalSetting &&
              !applicationStatus.joinCommunity && (
                <Community appMan={manageCommunity} />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisWalker;
