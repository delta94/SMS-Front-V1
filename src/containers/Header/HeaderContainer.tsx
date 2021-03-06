import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Header } from "../../components";
import { ResStudentInfo } from "../../lib/api/payloads/Login";
import { setInit, TEACHER, UserType } from "../../modules/action/header";
import { pageMove } from "../../modules/action/page";
import { stateType } from "../../modules/reducer";

interface Props {}

const HeaderContainer: FC<Props> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { type } = useSelector((state: stateType) => state.header);

  const moveLogin = useCallback(() => {
    dispatch(pageMove("로그인"));

    if (type === TEACHER) {
      history.push("/admin/login");
    } else {
      history.push("/login");
    }
  }, [type]);

  const movePasswordChange = useCallback(() => {
    dispatch(pageMove(""));

    if (type === TEACHER) {
      history.push("/admin/pw-change");
    } else {
      history.push("/pw-change");
    }
  }, [type]);

  const moveManagement = useCallback(() => {
    dispatch(pageMove("정보수정"));

    history.push("/management/edit");
  }, []);

  const logout = useCallback(() => {
    dispatch(
      setInit(
        "",
        {
          grade: 0,
          group: 0,
          name: "",
          phone_number: "",
          student_number: 0,
          profile_uri: ""
        },
        ""
      )
    );
    localStorage.setItem("sms-user", JSON.stringify({}));
    localStorage.setItem("sms-type", "");
    localStorage.removeItem("access_token");
    localStorage.removeItem("uuid");
    localStorage.removeItem("club_uuid");
    localStorage.removeItem("expiration");
  }, []);

  useEffect(() => {
    const type = localStorage.getItem("sms-type") as UserType;
    const clubUuid = localStorage.getItem("club_uuid");
    const smsUser = JSON.parse(
      localStorage.getItem("sms-user")
    ) as ResStudentInfo;
    dispatch(setInit(type, smsUser, clubUuid));
  }, []);

  return (
    <Header
      logout={logout}
      moveLogin={moveLogin}
      movePasswordChange={movePasswordChange}
      moveManagement={moveManagement}
    />
  );
};

export default HeaderContainer;
