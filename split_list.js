const { pluck, add, flat, go, reduce, uniq } = require("fxjs");
const ethers = require("ethers");

const list = `0xe6dEC45fFdb795fE789c88f8AaC043bEb7c67992\t1
0xf3Cf7f6192fa0BF34F07B3D5F5b4fd2AADA1888f\t6
0xf5aE7aB590736Fec32590B61E893aa5692Ad9B6b\t4
0x6F4100b8fC8140DC2C3727d7FbA900Ea02a70C1F\t10
0xaEb1301ED1E47B7C2F83383a3ADaE01B0b789b3C\t2
0xBA2f99831b554d8eE2F68797c53352a29a066619\t2
0x6Cf21BBdFB848118C2Df16993808426cED4Cb0c9\t2
0x12bCAc1ef677A52c4a7198951d1fA44fD4dC1C0D\t2
0xCa46Ce8A2a32F5761cCF1dA78C95CC735E59fADA\t1
0xC8A60f5bDf2e7C9B71d13400aFaCb78ae81FCF88\t2
0x9e635293C11f5f30a5c581D334449c024099AE35\t2
0x966a954BDec0be7685E530c4d99490EC89825a52\t2
0xcCBbABd6B457EF52164A47031a9344EB73081284\t15
0x2592cB3B33977B2fBd2Face31B29d6b6188D2A6b\t1
0x6CFAeb005d64021B046a81d992e0cf0b5D312f16\t2
0x47823AE3cE62A65045D926A0F6c0AAF248cA3b2A\t6
0x3F6f9D36D8AE54be893A54A516D633E25929E0A0\t2
0xE9D94F5cd9B7ddE02164141025BE615C858c5373\t2`
  .split("\n")
  .map((row) => row.split("\t"))
  .map(([addr, quantity]) => ({
    address: addr.trim(),
    quantity: +quantity.trim(),
  }));

const not_address = list.filter(
  ({ address }) => !ethers.utils.isAddress(address)
);
if (not_address.length) {
  throw new Error("there is an error address at list");
}

console.log(list);

// const tx_nft_count_limit = 400;
// const tx_address_limit = 100;
// const airdrop_groups = go(
//   reduce(
//     ({ group, groups }, cur) => {
//       if (group.quantity + cur.quantity > tx_nft_count_limit) {
//         groups.push(group.list);
//         return { groups, group: { quantity: cur.quantity, list: [cur] } };
//       }
//
//       if (group.list.length == tx_address_limit - 1) {
//         groups.push(group.list);
//         return { groups, group: { quantity: cur.quantity, list: [cur] } };
//       }
//
//       group.list.push(cur);
//       group.quantity += cur.quantity;
//       return { groups, group };
//     },
//     { group: { quantity: 0, list: [] }, groups: [] },
//     list
//   ),
//   ({ groups, group }) => {
//     return flat([groups.filter((a) => a.length > 0), [group.list]]);
//   }
// );
//
// airdrop_groups.map((group) => {
//   if (!group.length) console.log(group);
//   console.log(`${group[0].address.toLowerCase()}, ${group[0].quantity}`);
//   console.log(
//     `Address (${group.length}), Quantity: (${reduce(add)(
//       pluck("quantity", group)
//     )})`
//   );
// });
//
console.log(reduce((acc, cur) => acc + cur.quantity, 0, list));
