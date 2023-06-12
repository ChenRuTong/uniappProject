import env from "@/utils/env";

function service(options = {}) {
  options.url = `${env.baseUrl}${options.url}`;

  let token = uni.getStorageSync("token");
  options.header = {
    "content-type": "application/json",
    Authorization: `Bearer ${token || false}`,
  };

  return new Promise((resolved, rejected) => {
    options.success = (res) => {
      if (res.data.code !== 200) {
        uni.showToast({
          icon: "none",
          duration: 3000,
          title: `${res.data.msg}`,
        });
        rejected(res);
      } else {
        resolved(res.data.data);
      }
    };
    options.fail = (err) => {
      uni.showToast({
        icon: "none",
        duration: 3000,
        title: "服务器错误,请稍后再试",
      });
      rejected(err);
    };
    uni.request(options);
  });
}

export default service;
