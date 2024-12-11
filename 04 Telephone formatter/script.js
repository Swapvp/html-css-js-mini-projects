const phone = document.getElementById("phone");

const getStringWithNumbersOnly = (str) =>
  [...str].filter((v) => Number.isInteger(+v) && v !== " ").join("");

const formatString = (str) => {
  const numStr = getStringWithNumbersOnly(str);
  if (numStr.length <= 2) return numStr;

  const formatted =
    "+(" + numStr.substring(0, 2) + ") - " + numStr.substring(2);

  const remaining = numStr.substring(2);
  const spaced = remaining.replace(/(.{5})/g, "$1 ");

  return "+(" + numStr.substring(0, 2) + ") - " + spaced.trim();
};

phone.addEventListener(
  "input",
  () => (phone.value = formatString(phone.value))
);
