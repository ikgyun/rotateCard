import useInput from '../../hooks/useInput'


import styled from 'styled-components'

const StyledForm = styled.div`

//모바일 
  width: 70vw;
  height: 70vh;
  margin: 0 auto;

  & > form{
    float:left;
  }

  & >form>.inputBox{

    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    height: 20px;
    width: 150px;
    border-radius: 24px;
    z-index: 3;
    margin: 0 auto;
    margin-bottom: 15px;
    padding-left:20px;
}

 & >form>.textArea>.inputBox2{
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    height: 200px;
    width: 200px;
    border-radius: 24px;
    z-index: 3;
    margin-top: 10px;
    padding-left:20px; 

 }

 & > .box {
  display:none;
 }


 & >form> .btnBox{
   float: right;
   /* width:300px; */
   /* padding: 20px 0px 20px 20px; */
   margin: 0 auto;
   margin-right: 20px;
   margin-top: 20px;
 }

 /* & > form> .btnBox> .btn1:hover{
  width: 100px;
  margin-left:20px;
  border-radius: 24px;
  border: 1px solid transparent;
  font-weight: bold;
  font-size: 20px;
  line-height: 1px;
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to left, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);

  flex: 1 1 auto; 
  padding: 15px;
  text-align: center;
  color: #000;
 } */

 & > form> .btnBox> .btn1{
  
  width: 80px;
  margin-left:20px;
  border-radius: 24px;
  border: 1px solid transparent;
  font-weight: bold;
  font-size: 15px;
  line-height: 1px;
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to left, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);

  flex: 1 1 auto; 
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px; 
 
 }



//pc
@media only screen and (min-width:768px) {
  width: 80vw;
  height: 50vh;
  margin: 0 auto;

  & > form{
    float:left;
  }

  & >form>.inputBox{
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    height: 39px;
    width: 200px;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
    margin-bottom: 15px;
    padding-left:20px;
}

& >form> .textArea{
  width: 680px;
  height: 400px;


}
 & >form> .textArea>.inputBox2{
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    width: 680px;
    height: 400px;
    border-radius: 24px;
    z-index: 3;
    margin-top: 10px;
    padding-left:20px;
    box-sizing: border-box;
    overflow:hidden;
  word-wrap:break-word;

 }
 & > .box {
  float:right;
  margin-top: 50px;
  margin-right:100px;
  border: 1px solid black;
   width :680px;
   height:483px;
 }
 & > .box >img {
   width :680px;
   height:450px;
 }
 & >form> .btnBox{
   float: right; 
   padding: 20px 0 20px 20px;
 }

 & > form> .btnBox> .btn1:hover{
  width: 100px;
  margin-left:20px;
  border-radius: 24px;
  border: 1px solid transparent;
  font-weight: bold;
  font-size: 20px;
  line-height: 1px;
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to left, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);

  flex: 1 1 auto; 
  padding: 15px;
  text-align: center;
  color: #000;
 }

 & > form> .btnBox> .btn1{
  
  width: 100px;
  margin-left:20px; 
  border-radius: 24px; 
  border: 1px solid transparent;
  font-weight: bold;
  font-size: 20px;
  line-height: 1px;
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to left, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);

  flex: 1 1 auto; 
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px; 

 }
}
`


const RequestForm = (props) => {

  const name = useInput('')
  const pw = useInput('')
  const content = useInput('');
  const handleCreate = props.handleCreate;
  const handleRotate = props.handleRotate;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.value === "") {
      return alert("닉네임을 입력해주세요")
    }
    if (pw.value === "") {
      return alert("비밀번호를 입력해주세요")
    }
    if (content.value === "") {
      return alert("요구사항을 입력해주세요")
    }

    const data = {
      name: name.value,
      content: content.value,
      pw: pw.value

    };
    handleCreate(data);
  };


  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <input type="text" className="inputBox" {...name} placeholder="닉네임 입력해주세요." maxLength='20' /><br />
        <input type="password" className="inputBox" {...pw} placeholder="비밀번호를 입력해주세요." maxLength='20'/><br />
        <div className="textArea">
        <input type="textarea" cols="30" rows="10" className="inputBox2" {...content} placeholder="요구사항을 입력해주세요." maxLength='100' /><br />
        </div>
        <div className="btnBox">
          <button type="submit" className="btn1">해줘</button>
          <button className="btn1" onClick={() => { handleRotate(false) }}>취소</button>
        </div>
      </form>
      <div className="box">
        <h5>광고</h5>
        <img src="arger.jpg" />
      </div>

    </StyledForm>
  );
}

export default RequestForm;