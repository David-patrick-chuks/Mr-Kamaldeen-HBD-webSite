import React from "react";

export const Loader = () => {
  return (
    <div class="flex bg-gray-300 w-screen justify-center items-center h-screen">
      <div class="flex flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-900 animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-900 animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-900 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};
