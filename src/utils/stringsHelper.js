const trimString = ({ startIndex = 0, endIndex = 12, string }) => {
  if (!string) {
    return string;
  }

  return string.substring(0, 12) + '...';
};

export { trimString };
