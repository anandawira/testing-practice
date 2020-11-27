export default function capitalize(string) {
  const textArray = string.split('');
  textArray[0] = textArray[0].toUpperCase();
  return textArray.join('');
}
