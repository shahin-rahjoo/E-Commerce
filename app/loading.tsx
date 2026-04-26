import Image from "next/image";
import loader from "@/public/loader.gif";
const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100wh",
      }}
    >
      <Image src={loader} height={100} width={100} alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner;
