import moment from "moment";
export const timeElapsed = (createdAt) => {
  const difference = moment(createdAt).fromNow().replace(" ago", "");

  return difference;
};
