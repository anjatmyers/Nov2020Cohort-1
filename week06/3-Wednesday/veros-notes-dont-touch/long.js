/*

P1. Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters
Example 1:
Input: “abcabcbb”
Output: 3
Example 2:
Input: “bbbbb”
Ouput: 1
Example 3:
Input: “pwwkew”
Output: 3
**Note that the answer must be a substring,“pwke” is a subsequence and not a substring (edited) 

*/

const longestSub = (subString) => {};

let pass = "passed";
let fail = "failed";

const result = (testCase, status) => {
  console.log(`test case ${testCase} ${status}`);
};

longestSub("a") === 1 ? result(1, pass) : result(1, fail);
longestSub("abc") === 3 ? result(2, pass) : result(2, fail);
longestSub("abcb") === 3 ? result(3, pass) : result(3, fail);
longestSub("abcdeabcdefc") === 6 ? result(4, pass) : result(4, fail);
longestSub("abccdeaabbcddef") === 4 ? result(5, pass) : result(5, fail);
longestSub("abacacacaaabacaaaeaaafa") === 3 ? result(6, pass) : result(6, fail);
longestSub("abcdabcef") === 6 ? result(7, pass) : result(7, fail);
longestSub("abcbde") === 4 ? result(8, pass) : result(8, fail);
longestSub("abcabcbb") === 3 ? result(9, pass) : result(9, fail);
longestSub("bbbbb") === 1 ? result(10, pass) : result(10, fail);
longestSub("pwwkew") === 3 ? result(11, pass) : result(11, fail);
