import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <svg
        class="svg-icon"
        height="90"
        width="90"
        viewBox="0 0 20 20"
        fill="hsl(142, 100%, 49%, 1)"
      >
        <circle fill="#f8b15c" cx="7.884" cy="11.397" r="0.699"></circle>
        <circle fill="#f8b15c" cx="12.076" cy="11.397" r="0.699"></circle>
        <path
          fill="#f8b15c"
          d="M17.685,5.808c-0.257,0-0.502,0.053-0.73,0.139C16.64,2.737,13.649,0.219,10,0.219c-3.649,0-6.64,2.518-6.955,5.728c-0.228-0.086-0.473-0.139-0.73-0.139c-1.153,0-2.096,0.943-2.096,2.096v3.493c0,1.153,0.943,2.096,2.096,2.096c0.28,0,0.547-0.058,0.792-0.158c0.113,1.088,0.304,1.795,0.585,2.254c0.539,0.834,4.139,4.192,6.288,4.192c2.149,0,5.751-3.361,6.272-4.167c0.292-0.476,0.488-1.196,0.602-2.296c0.255,0.112,0.536,0.175,0.831,0.175c1.153,0,2.096-0.943,2.096-2.096V7.904C19.781,6.751,18.838,5.808,17.685,5.808zM15.078,14.855c-0.482,0.746-3.715,3.529-5.099,3.529s-4.616-2.783-5.097-3.525c-0.319-0.521-0.444-1.919-0.489-3.297c0.004-0.055,0.017-0.108,0.017-0.164V8.603c0-0.04,0.005-0.078,0.006-0.118C4.779,8.56,5.156,8.603,5.545,8.603c1.994,0,3.706-1.037,4.455-2.519c0.749,1.482,2.461,2.519,4.455,2.519c0.389,0,0.766-0.043,1.128-0.118c0.001,0.039,0.006,0.078,0.006,0.118c0,0.077-0.008,0.152-0.012,0.229C15.598,10.276,15.641,13.938,15.078,14.855z"
        ></path>
      </svg>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .svg-icon {
    animation: rotate 10s linear infinite;
    fill: #f8b15c;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  .svg-icon path,
  .svg-icon polygon,
  .svg-icon rect {
    fill: #4691f6;
  }

  .svg-icon circle {
    stroke-width: 1;
    fill: #f8b15c;
    animation-name: my-svg;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;

    @keyframes my-svg {
      0% {
        fill: hsla(45, 100%, 50%, 1);
      }
      100% {
        fill: hsla(14, 100%, 50%, 1);
      }
    }
  }
`;
