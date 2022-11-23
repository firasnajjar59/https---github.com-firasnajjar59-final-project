/** @format */

const sortFunction = (input, setfunc, arr) => {
    if (input == 'A-Z') {
      let copyCards = JSON.parse(JSON.stringify(arr));
      copyCards = copyCards.sort((a, b)=>{
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x < y) {
              return -1;
            }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    setfunc(copyCards);
    return;
}
  if (input == 'Z-A') {
    let copyCards = JSON.parse(JSON.stringify(arr));
    copyCards = copyCards.sort(function (a, b) {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });
    setfunc(copyCards);
    return;
  }
  setfunc(arr)
};

export default sortFunction;
