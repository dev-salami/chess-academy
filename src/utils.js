export const truncateText = (text, maxLength) => {
  // Check if the text length is greater than the maximum length
  if (text.length > maxLength) {
    // Truncate the text and add an ellipsis
    return text.substring(0, maxLength - 3) + "...";
  } else {
    // If the text length is within the limit, return the original text
    return text;
  }
};
