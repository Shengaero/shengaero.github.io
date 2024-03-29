export function getYear(): number {
  return new Date().getFullYear();
}

export function getAge(): number {
  const date = new Date();
  let age = date.getFullYear() - new Date('1998-12-14').getFullYear();
  if(date.getMonth() < 12 && date.getDay() < 14) {
    age--;
  }
  return age;
}
