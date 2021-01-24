import React, { memo } from "react";

export default memo(function App() {
  return (
    <> {`Hello, ${import.meta.env.SNOWPACK_PUBLIC_APPLICATION_NAME} !`} </>
  );
});
