let funds=50
while(funds>1 && funds<100)
{
    funds++;
    funds+=3;
    console.log("now funds is:"+funds)
}

function rand(m,n)
{
    return m+Math.floor((n-m+1)*Math.random());
}
function randFace()
{
    return ["crown","anchor","heart","spade","club","diamand",][rand[0,5]];
}

