### 1.两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**解法**

使用哈希表m存放数组值以及对应的下标。

遍历数组`nums`，当发现`target - nums[i]`在哈希表中，说明找到了目标值，返回`target - nums[i]`的下标以及i即可。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const m = new Map();
    for (let i = 0; ; ++i) {5r4
        const x = nums[i];
        const y = target - x;
        if (m.has(y)) {
            return [m.get(y), i];
        }
        m.set(x, i);
    }
};
```


### 217.存在重复元素
给你一个整数数组nums 。如果任一值在数组中出现至少两次，返回true；如果数组中每个元素互不相同，返回false。

示例 1：
输入：nums = [1,2,3,1]
输出：true

示例 2：
输入：nums = [1,2,3,4]
输出：false

示例 3：
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true

提示：
1 <= nums.length <= 105
-109 <= nums[i] <= 109

**解法**

遍历数组，将出现过的元素记录在哈希表中。若元素第二次出现时，说明数组中存在重复元素，直接返回true。

- 时间复杂度：O(n) 
- 空间复杂度：O(n)

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
}

```