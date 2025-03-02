import React from "react";
import LoadingIcon from "../assets/LoadingIcon";
import { useLoading } from "../context/LoadingContext";

const LoadingWrapper = ({ children }) => {
  const { isLoading } = useLoading();
  return (
    <div>
      {isLoading && (
        <div
          className="w-100 h-100 d-flex text-center align-items-center justify-content-center"
          style={{ position: "fixed" }}
        >
          <LoadingIcon width={256} height={256} />
        </div>
      )}
      <div
        style={{
          opacity: isLoading ? 0.2 : 1,
          pointerEvents: isLoading ? "none" : "all",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LoadingWrapper;
