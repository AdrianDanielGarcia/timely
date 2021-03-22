
// adapted to typescript from https://codepen.io/sergiopedercini/pen/RLJYLj?editors=1010
// thanks to https://medium.com/@pppped/compute-an-arbitrary-color-for-user-avatar-starting-from-his-username-with-javascript-cd0675943b66
export const stringToHslColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let h = hash % 360;
  return `hsl(${h}, 40%, 80%)`;
}
