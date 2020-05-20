import React from "react";
import styled from "styled-components";
import { UseTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const getDayOfWeek = (year, mon, day) => {
  const days = new Date(year, mon, day);
  const weekDay = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return weekDay[days.getDay()];
};

function TodoHead() {
  const todos = UseTodoState();
  const undoneTasks = todos.filter((todo) => todo.done === false);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  console.log("TodoHead동작됨?");
  return (
    <TodoHeadBlock>
      <h1>
        {year}년 {month}월 {day}일
      </h1>
      <div className="day">{getDayOfWeek(year, month - 1, day)}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}
export default React.memo(TodoHead);
