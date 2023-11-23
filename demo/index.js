// 两数之和
function twoSum(nums, target) {
  const map = new Map()
  for(let i = 0; ; i++) {
    const x = nums[i]
    const y = target - x
    if(map.has(y)) {
        return [map.get(y), i]
    }
    map.set(x, i)
  }
}

console.log('result', twoSum([2,7,11,15], 9)) // [0,1]
console.log('result', twoSum([3,2,4], 6)) // [1,2]
console.log('result', twoSum([3,3], 6)) // [0,1]

// 无重复字符的最长子串
function lengthOfLongestSubstring(s){
  const set = new Set()
  let i = 0
  let result = 0
  for(let j = 0; j < s.length; j++) {
    while(set.has(s[j])) {
      set.delete(s[i])
      i++
    }
    set.add(s[j])
    result = Math.max(result, j - i + 1)
  }
  return result
}
console.log('f2 result: ', lengthOfLongestSubstring('abcabcbb')) // 3
console.log('f2 result: ', lengthOfLongestSubstring('bbbbb')) // 1
console.log('f2 result: ', lengthOfLongestSubstring('pwwkew')) // 3

// 存在重复元素
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length
}
console.log('containsDuplicate', containsDuplicate([1,2,3,1])) // true
console.log('containsDuplicate', containsDuplicate([1,2,3,4])) // true
console.log('containsDuplicate', containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // false