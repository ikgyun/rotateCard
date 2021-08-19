import styled from "styled-components";


const StyledItem = styled.ul`
    border-top: 1px solid #666;
    margin-top: 20px;

    & > .content{
        display:none;
    }
    
    
    @media only screen and (min-width:768px) {
    width: 350px;
    height: 300px;
    margin: 10px;
    padding: 0.625rem;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: none;
    color: rgba(0, 0, 0, 0.87);
    border: 1px solid #e0e0e3;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
}

    &:hover{
    transition: 0.5s;
    width: 350px;
    height: 300px;
    margin: 10px;
    padding: 0.625rem;
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: none;
    color: rgba(0, 0, 0, 0.87);
    transition:0.5s;
    border: 1px solid #000;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #8fd3f4;
}
    


    & > .content {
        font-size: 2rem;
        font-weight: 800;
        
    }
    & > li>.date {
        float:right;
        text-align: right;
    }

`



const RequestItem = (props) => {
    return (
        <StyledItem>
            <li>
                <span>{props.name}님의 '해줘'</span>
                <span className="date">{props.date}</span>
            </li>
            <li className="content">

                {props.content}

            </li>
            <li>

            </li>
        </StyledItem>
    );
}

export default RequestItem;