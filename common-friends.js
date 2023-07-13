const mapping = { 
    a: ['b', 'c'],
    b: ['d', 'g'],
    d: ['p', 'q'],
    l: ['x', 'y'] 
};

const commonFriend = (mapping, friend)=>{
    const friendList = mapping[friend];
    if(friendList && friendList.length >=0){
        const finalList = [...friendList];
        for(let friendIt of friendList){
            const commonFriends = commonFriend(mapping,friendIt);
            finalList.push(...commonFriends);
        }
        return finalList;
    }
    return []
}

console.log(commonFriend(mapping,'a'))
console.log(commonFriend(mapping,'b'))
console.log(commonFriend(mapping,'p'))
console.log(commonFriend(mapping,'g'))
console.log(commonFriend(mapping,'l'))