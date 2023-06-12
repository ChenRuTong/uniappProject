import service from "@/utils/request.js";

export const getBanner = () => {
  return service({
    url: "/home/swiperdata",
    method: "get",
  });
};
