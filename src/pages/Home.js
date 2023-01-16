import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home =()=>{
    const navigate = useNavigate();
    return(
        <HomeWrapper>
            <h1 className="title">PLANETARIUM</h1>
            <div onClick={() => navigate('/shop')}>
                <h1>SHOP NOW!</h1>
            </div>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
  min-height: 70vh;
  position: relative;  
  display: flex;
  flex-direction: column;
  align-items: center;
  

  .title{
    color: #e4e4e7;
    position: absolute;
    top: 10%;
    font-family: arial;
    font-size: 3rem;
  }

  div{
    background-color: #2dd4bf;
    position: absolute;
    top: 60%;
    padding: 2rem 3rem;
    transition: 1s;
  }

  div:hover{
    background-color: black;
    color: #2dd4bf;
    scale: 1.1;
  }
`
export default Home;