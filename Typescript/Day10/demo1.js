//Array of Object
var arrobj = [
    {
        id: 9,
        fname: "Sumit",
        lname: 'raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 50
            }
        ]
    },
    {
        id: 6,
        fname: "Kiran",
        lname: 'raokhande',
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ["Feb", "April", "Aug"],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 60
            }
        ]
    },
    {
        id: 3,
        fname: "Spruha",
        lname: 'raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["March", "July", "Nov"],
        result: [
            {
                subj: "M1",
                marks: 55
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 70
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        ID          :: ".concat(arrobj[i].id, "\n        First name  :: ").concat(arrobj[i].fname, "\n        Last Name   :: ").concat(arrobj[i].lname, "\n        Country name:: ").concat(arrobj[i].country.cname, "\n        Month       :: ").concat(arrobj[i].month.join("  "), "\n        --------------Result------------------\n    "));
    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //         Subject :: ${arrobj[i].result[j].subj}
    //         Marks   :: ${arrobj[i].result[j].marks}
    //     `)
    // }
    arrobj[i].result.forEach(function (myvalue) {
        console.log("\n                Subject :: ".concat(myvalue.subj, "\n                Marks   :: ").concat(myvalue.marks, "\n            "));
    });
}
