async function load({ url }) {
  return {
    currentPath: url.pathname
  };
}
export {
  load
};
