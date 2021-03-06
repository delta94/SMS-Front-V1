import React, { FC } from "react";

import * as S from "./style";
import OutingInfo from "./OutingInfo";
import ParentAction from "./ParentAction";

import { ResOutingInfo } from "../../lib/api/payloads/Parent";
import { EMERGENCY, NORMAL } from "../../containers/Outing/ApplyContainer";
import { Loading } from "../default";

interface Props {
  loading: boolean;
  outingInfo: ResOutingInfo;
  approveOuting: () => void;
  rejectOuting: () => void;
}

const Approve: FC<Props> = ({
  loading,
  outingInfo,
  approveOuting,
  rejectOuting
}) => {
  return (
    <S.ParentWrap>
      {outingInfo.outing_uuid && (
        <>
          <OutingInfo outingInfo={outingInfo} />
          {outingInfo.outing_situation.toLocaleLowerCase() === NORMAL && (
            <ParentAction
              approveOuting={approveOuting}
              rejectOuting={rejectOuting}
            />
          )}
          {outingInfo.outing_situation.toLocaleLowerCase() === EMERGENCY && (
            <S.ParentOutingEmergencyText>
              질병 외출로 신청한 외출은 학생의 신속한 처치를 위해 확인만
              가능합니다.
            </S.ParentOutingEmergencyText>
          )}
          <S.ParentLoadingWrap>{loading && <Loading />}</S.ParentLoadingWrap>
        </>
      )}
    </S.ParentWrap>
  );
};

export default Approve;
