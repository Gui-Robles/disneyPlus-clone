import {
  Container,
  Content,
  BgImage,
  CTA,
  CTALogoOne,
  CTALogoTwo,
  SignUp,
  Description,
} from "./Login.styles";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>SIGN UP NOW</SignUp>
          <Description>
            Star on Disney+ brings you more. A brand-new world of TV series,
            movies and new originals, with thousands of hours of bigger, bolder
            and more exciting stories than ever before. Enjoy Star as part of
            your Disney+ subscription.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
