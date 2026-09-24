"use strict";

function formattedPhone(phone) {
  if (phone.length < 10) {
    return "Format error";
  }

  const cleanPhone = phone.slice(-10);

  const code = cleanPhone.slice(0, 3);
  const part1 = cleanPhone.slice(3, 6);
  const part2 = cleanPhone.slice(6, 8);
  const part3 = cleanPhone.slice(8, 10);

  return `+38 (${code}) ${part1}-${part2}-${part3}`;
}

const userPhone = prompt("Type phone number:");
alert(formattedPhone(userPhone));
