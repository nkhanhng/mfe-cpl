import { atom, useAtom } from "jotai";

const countAtom = atom(0);
const accountAtom = atom({
  username: "",
  password: "",
});
const isLoggedIn = atom(false);

const useCount = () => useAtom(countAtom);
const useAccount = () => useAtom(accountAtom);
const useLoggedIn = () => useAtom(isLoggedIn);

export { useAccount, useCount, useLoggedIn };
