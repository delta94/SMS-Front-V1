import { BoardObj } from "../../../components/default/Board/Board";
import {
  NoticeAction,
  GET_NOTICE_LIST,
  GET_NOTICE_DETAIL
} from "../../action/notice";
import { BoardListitem } from "../../type/board";
import { NoticeDetail } from "../../type/notice";

interface BoardState {
  list: BoardListitem[];
  detail: NoticeDetail;
}

const initialState: BoardState = {
  list: [],
  detail: {
    content: `- **동아리 메인**
    1. 에는 현재 모집 중인 동아리 리스트가 카드 형식으로 표시된다.
    2. 카드 형식에 들어갈 정보는 다음과 같다.
        1. 상단의 동아리 사진
        2. 동아리 이름, 동아리 장, 실, 모집 분야
    3. 카드를 클릭하면 동아리 세부 정보 페이지로 이동한다.
  
  - **동아리 세부 정보 페이지**
    1. 에 들어갈 정보는 다음과 같다.
    2. 우측 하단에 수정 완료 버튼이 있다.
    수정 완료 버튼을 누르면 동아리 정보가 수정되며 동아리 어드민 페이지로 이동한다.
        1. 상단의 동아리 사진
        2. 동아리 이름, 동아리 장, 실, 모집 분야
    3. 카드를 클릭하면 동아리 
    1. 에 들어갈 정보는 다음과 같다.
    2. 우측 하단에 수정 완료 버튼이 있다.
    수정 완료 버튼을 누르면 동아리 정보가 수정되며 동아리 어드민 페이지로 이동한다.`
  }
};

const noticeReducer = (
  state: BoardState = initialState,
  action: NoticeAction
): BoardState => {
  switch (action.type) {
    case GET_NOTICE_LIST: {
      return {
        ...state,
        list: action.payload
      };
    }
    case GET_NOTICE_DETAIL: {
      return {
        ...state,
        detail: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default noticeReducer;
