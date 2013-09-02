db.posts.aggregate([
    { $unwind:"$comments" },
    { $group:{ _id:"$comments.author", "total":{ $sum:1 } } }
])