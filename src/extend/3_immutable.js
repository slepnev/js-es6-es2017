/*
  1.
*/

const toSlug = input => {
  const words = input.split(' ');
  const lowercaseWords = words.map(word => word.toLowerCase());
  const slug = lowercaseWords.join('-');
  const encodedSlug = encodeURIComponent(slug);

  return encodedSlug;
};

const slug = toSlug('This is composition');