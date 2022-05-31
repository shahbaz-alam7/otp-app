function move(e, pre, current, nxt) {
  let currentElem = document.getElementById(current).value.length;
  if (currentElem != 0) {
    if (nxt !== "") {
      document.getElementById(nxt).focus();
    }
  } else if (currentElem == 0) {
    if (pre !== "") {
    //   console.log("hi");
      document.getElementById(pre).focus();
    }
  }
}
