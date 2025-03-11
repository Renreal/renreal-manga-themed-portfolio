import Spline from "@splinetool/react-spline";

const My3DComponent = () => {
  return (
    <div className="spline-wrapper">
      <span>I am capable of the following</span>
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/ii9EAhDt9J0RuTWl/scene.splinecode" />
      </div>
    </div>
  );
};

export default My3DComponent;
