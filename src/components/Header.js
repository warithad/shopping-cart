import styled from "styled-components";

const Header =()=>{
    return (
        <HeaderWrapper>
            <h1>PLANETARIUM</h1>
            <div>
                <h3>HOME</h3>
                <h3>PLANETS</h3>
                <h3>CHECKOUT</h3>
            </div>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 10rem;
    font-family: arial;
    color: #2dd4bf;
    background-color: black;


    div{
        display: flex;
        align-items: center;
        color: white;
        gap: 2rem;
    }

    h3{
        transition: 2s;
    }

    h3:hover{
        letter-spacing: 0.3em;
    }

`
export default Header;