// to make jest tests happy
// https://stackoverflow.com/questions/54021037/how-to-mock-window-location-href-with-jest-vuejs
export function navigateTo(href: string) {
  window.location.href = href;
}
