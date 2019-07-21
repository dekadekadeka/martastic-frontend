import styled from 'styled-components';
import defaultImg from '../images/home-default.jpg'

const HomeDiv = styled.div`
background-image: url(${props => props.img ? props.img : defaultImg});
min-height: 100vh;
background-size: cover;
background-position: center;
`

export default HomeDiv