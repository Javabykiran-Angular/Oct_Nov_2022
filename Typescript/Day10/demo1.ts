//Array of Object
let arrobj=[
    {
        id:9,
		fname:"Sumit",
		lname:'raokhande',
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan","May","Dec"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:50
            }
        ]
    },
    {
        id:6,
		fname:"Kiran",
		lname:'raokhande',
        country:{
            cid:2,
            cname:'US'
        },
        month:["Feb","April","Aug"],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:60
            }
        ]
    },
    {
        id:3,
		fname:"Spruha",
		lname:'raokhande',
        country:{
            cid:3,
            cname:'Japan'
        },
        month:["March","July","Nov"],
        result:[
            {
                subj:"M1",
                marks:55
            },
            {
                subj:"M2",
                marks:65
            },
            {
                subj:"M3",
                marks:70
            }
        ]
    }
];

for(let i=0;i<arrobj.length;i++){
    console.log(`
        ID          :: ${arrobj[i].id}
        First name  :: ${arrobj[i].fname}
        Last Name   :: ${arrobj[i].lname}
        Country name:: ${arrobj[i].country.cname}
        Month       :: ${arrobj[i].month.join("  ")}
        --------------Result------------------
    `)

    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //         Subject :: ${arrobj[i].result[j].subj}
    //         Marks   :: ${arrobj[i].result[j].marks}
    //     `)
    // }


    arrobj[i].result.forEach((myvalue)=>{
            console.log(`
                Subject :: ${myvalue.subj}
                Marks   :: ${myvalue.marks}
            `)
    })


}