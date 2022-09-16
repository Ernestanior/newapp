import dataStore from "@/store/dateBase";

export const getToken = () => {
  return dataStore.getValue("redirect-302");
};

export const saveToken = (token: string) => {
  return dataStore.save("redirect-302", token);
};

export const deleteToken = () => {
  return dataStore.delete("redirect-302");
};
