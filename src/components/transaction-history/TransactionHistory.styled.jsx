import styled from "styled-components";

export const Section = styled.section`
width:50vw;
margin: 20px auto;
padding: 20px;
font-family: sans-serif;
font-size:24px;

background-color: rgba(228, 216, 215, 1);`

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
color: rgb(82, 76, 76);

thead {
height: 60px;
background-color: rgb(15, 185, 220);
color: white;
text-shadow: 1px 1px 1px black;
}

tbody > tr {
height:50px;
text-align: center;
&:nth-child(odd) {
 background-color: rgb(204, 170, 170);
 }
&:nth-child(even) {
 background-color: rgb(187, 214, 244);
}
}
`