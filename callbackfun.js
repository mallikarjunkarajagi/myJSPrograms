function iseven(n)
{
    return n%2==0
}

const checkIsEven = (callback,n) =>{
    const isnumbereven = callback(n)

    console.log(`The number ${n} is even number -->`,isnumbereven)

}

checkIsEven(iseven,16);

