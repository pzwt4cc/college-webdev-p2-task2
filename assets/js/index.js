"use strict";

function formattedPhone(phone) {
  const cleanPhone = phone.slice(-10);

  const code = cleanPhone.slice(0, 3);
  const part1 = cleanPhone.slice(3, 6);
  const part2 = cleanPhone.slice(6, 8);
  const part3 = cleanPhone.slice(8, 10);

  return `+380 (${code} ${part1}-${part2}-${part3})`;
}

console.log(formattedPhone("0671234567"));
