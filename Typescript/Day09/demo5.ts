//Simple Json Object
//java script object notation
// data is in key & value format

let jsonobj={
    id:9,
    "fname":'Sumit',
    lname:'Raokhande'
}
//1 dot operator
//2 square operator

//1 dot operator
// console.log(`
//     ID        :: ${jsonobj.id}
//     First Name:: ${jsonobj.fname}
//     Last Name :: ${jsonobj.lname}
// `)

//2 square operator
console.log(`
    ID        :: ${jsonobj["id"]}
    First Name:: ${jsonobj['fname']}
    Last Name :: ${jsonobj["lname"]}
`)



