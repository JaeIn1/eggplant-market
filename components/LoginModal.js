import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginDiv = styled.div`
  width: 300px;
  height: 500px;
  background-color: #f1f5f8;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LoginHeader = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & img {
    width: 30px;
    height: 30px;
  }
`;
const LoginMain = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LoginMainInfo = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  margin-bottom: 10px;

  & span {
    font-size: 10px;
    color: #424242;
    margin-bottom: 5px;
  }
  & input {
    width: 90%;
    height: 100%;
    border: 1px solid #b173d8;
    margin-bottom: 30px;
    padding-left: 5px;
    padding-bottom: 15px;
    border-radius: 8px;
    padding: 5px 5px 5px 5px;

    &::placeholder {
      color: #757575;
      font-size: 10px;
      padding-left: 5px;
    }
  }
`;
const LoginFooter = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  & button {
    width: 90%;
    height: 35%;
    border-radius: 5px;
    background-color: #b173d8;
    color: white;
    border: none;
  }
`;

function LoginModal() {
  return (
    <MainDiv>
      <LoginDiv>
        <LoginHeader>
          <img src="./img/Icon.png"></img>
          <span>회원가입</span>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </LoginHeader>
        <LoginMain>
          <LoginMainInfo>
            <span>아이디</span>
            <input type="text" placeholder="ysy06053@gmail.com"></input>
          </LoginMainInfo>
          <LoginMainInfo>
            <span>이름</span>
            <input type="text" placeholder="ysy06053@gmail.com"></input>
          </LoginMainInfo>
          <LoginMainInfo>
            <span>닉네임</span>
            <input type="text" placeholder="ysy06053@gmail.com"></input>
          </LoginMainInfo>
          <LoginMainInfo>
            <span>비밀번호</span>
            <input type="text" placeholder="ysy06053@gmail.com"></input>
          </LoginMainInfo>
          <LoginMainInfo>
            <span>비밀번호 확인</span>
            <input type="text" placeholder="ysy06053@gmail.com"></input>
          </LoginMainInfo>
        </LoginMain>
        <LoginFooter>
          <button>회원가입</button>
        </LoginFooter>
      </LoginDiv>
    </MainDiv>
  );
}
export default LoginModal;
