import { atom } from "recoil";

export const listStore = atom({
  key: "listStore",
  default: JSON.parse(localStorage.getItem("list")) || [],
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((list) => localStorage.setItem("list", JSON.stringify(list)));
    },
  ],
});
