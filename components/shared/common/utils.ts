import {Platform, Linking, Alert} from 'react-native';
import axios from 'axios';

const capitalize = (word: string) => {
  return `${word[0].toUpperCase()}${word.substring(1)}`;
};

const debounce = () => {};

/** google map place search  */


const shortenWithEllipsis = (
  word: string | undefined,
  length: number = 12,
  original: boolean = false,
) => {
  if (original) {
    return word;
  }
  if (!word) {
    return '...';
  }
  if (word.length <= length) {
    return word;
  }
  return `${word.substring(0, ++length)}...`;
};






const utils = {
  capitalize,
  debounce,

  shortenWithEllipsis,


};

export default utils;
