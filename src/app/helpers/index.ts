export const formatPhoneNumber = (phone: string) => {
  if (typeof phone !== "string" || !phone) return "+998 (00) 000-00-00";

  const cleanedPhone = phone.startsWith("+998") ? phone.slice(4) : phone;

  const cleaned = cleanedPhone.replace(/\D/g, "").slice(0, 12);
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/);

  if (!match) return "+998 ";

  const intlCode = "+998 ";
  const part1 = `(${match[1]}) `;
  const part2 = match[2];
  const part3 = `-${match[3]}`;
  const part4 = `-${match[4]}`;

  return `${intlCode}${part1}${part2}${part3}${part4}`;
};
