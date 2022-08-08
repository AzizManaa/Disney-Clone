import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { setUserLogin } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history("/home");
    });
  };
  return (
    <PageContainer>
      <BGContainer>
        <CTA>
          <CTALogoOne img src="/assests/images/cta-logo-one.svg"></CTALogoOne>
          <Link to={`/signup`}>
            <Signup>GET ALL THERE</Signup>
          </Link>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ Clone subscription. This website is made for
            educational purpose only. All rights reserved to ©Disney.
          </Description>
          <CTALogoTwo img src="/assests/images/cta-logo-two.png"></CTALogoTwo>
        </CTA>
      </BGContainer>
      <AllServices>
        <Service>
          <img src="/assests/images/usp_entertainmen.png" alt="" />
          <span>The greatest stories ever told</span>
          <p>
            Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars,
            National Geographic, plus general entertainment from Star.
          </p>
        </Service>
        <Service>
          <img src="/assests/images/usp_fav_device.png" alt="" />
          <span>Experience Disney+ in Arabic</span>
          <p>
            Thousands of hours of TV series, movies and originals, from all the
            wonderful worlds of Disney+.
          </p>
        </Service>
        <Service>
          <img src="/assests/images/usp_parental.png" alt="" />
          <span>Easy-to-use parental controls</span>
          <p>Keep your family safe with our intuitive parental controls. </p>
        </Service>
      </AllServices>
      <WatchYouWant>
        <span>Watch the way you want</span>
        <p>Discover the world's greatest stories, all in one place.</p>
        <img src="/assests/images/watchyouway.webp" alt="" />
      </WatchYouWant>
      <ExclusiveOriginals>
        <span>Exclusive originals</span>
        <p>
          TV series, movies and documentaries you can't see anywhere else, from
          the world's greatest storytellers.
        </p>
        <img src="/assests/images/exclusive-orig.webp" alt="" />
      </ExclusiveOriginals>
    </PageContainer>
  );
}

export default Login;

const WatchYouWant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px 0;
  span {
    font-size: 45px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 32px;
  }
  p {
    font-size: 25px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 32px;
    color: #8f98b2;
    text-align: center;
  }
  img {
    max-width: 80%;
    padding: 50px 0;
  }
`;
const ExclusiveOriginals = styled(WatchYouWant)``;
const AllServices = styled.div`
  background-color: #0f1014;
  display: grid;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image-slice: 1;
  border-width: 2px;

  border-image-source: linear-gradient(0.25turn, #0f1014, #743ad5, #0f1014);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 95px;
    padding: 50px 0;
  }
  span {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 32px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 32px;
    color: #8f98b2;
    width: 450px;
    text-align: center;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BGContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    opacity: 0.7;
    position: absolute;
    content: "";
    inset: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background: url("/assests/images/login-background.jpg");
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;

const Signup = styled.div`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 12.8px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img``;
