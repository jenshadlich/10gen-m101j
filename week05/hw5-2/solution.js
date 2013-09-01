db.zips.aggregate([
    { $match:{$or:[
        {state:"CA"},
        {state:"NY"}
    ] }},
    { $group:{ _id:{'city':"$city", 'state':"$state" }, 'pop':{$sum:"$pop"} } },
    { $match:{ pop:{$gte:25000}}},
    { $group:{ _id:"$city", 'avg_pop':{$avg:"$pop"} } }
])