//2자리문자로 변환후 charAt 함수 실행
export const StringcharAt = (value, index) => {
  const stringValue = String(value).length === 2 ? String(value) : `0${value}`;
  return stringValue.charAt(index);
};

//prop에 따른 필요 css 값을 return 해주는 함수
export const cssReturnValue = (isActive, start, pause, end) => {
  if (isActive === "start") {
    return start;
  } else if (isActive === "pause") {
    return pause;
  } else if (isActive === "end") {
    return end;
  }
};
