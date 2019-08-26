/**
 * 函数防抖
 * @param func
 * @param wait
 */
export const debounce = (func, wait) => {
  let timeout;
  let args;
  let timestamp;
  const later = () => {
    const last = (new Date()).getTime() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later.bind(this), wait - last);
    } else {
      timeout = null;
      func.apply(this, args);
      args = null;
      timestamp = null;
    }
  };
  return (...rest) => {
    args = rest;
    timestamp = (new Date()).getTime();
    if (!timeout) timeout = setTimeout(later.bind(this), wait);
  };
};

/**
 * 剔除空格
 */
export const trim = (str) => {
  if (str) {
    return str.replace(/(^\s+)|(\s+$)/g, '');
  }
  return null;
};

/**
 * 获取 url 参数
 * @param name
 * @returns {*}
 */
export const getUrlParam = (name) => {
  const reg = new RegExp(`(.*)${name}=([^&]*)(&|$)`);
  const result = window.location.href.match(reg);
  if (result !== null && result.toString().length) {
    return decodeURIComponent(result[2]);
  }
  return null;
};

/**
 * 读取 cookie
 * @param name
 * @returns {*}
 */
export const getCookie = (name) => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const cookie = document.cookie.match(reg);
  if (cookie) {
    return encodeURIComponent(cookie[2]);
  }
  return null;
};

/**
 * 设置 cookie
 * @param name
 * @param value
 * @param domain
 */
export const setCookie = (name, value, domain) => {
  document.cookie = `${name}=${value}; domain=${domain}; path=/`;
};

/**
 * 格式化日期
 * @param date
 * @param format
 * @returns {*}
 */
export const formatDate = (date, format) => {
  let output;
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
  const minute = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
  if (format === 'date') {
    output = `${year}-${month}-${day}`;
  } else {
    output = `${year}-${month}-${day} ${hour}:${minute}`;
  }
  return output;
};
