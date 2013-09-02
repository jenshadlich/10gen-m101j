db.grades.aggregate([
    { $unwind:"$scores" },
    { $match:{ $or:[
        { "scores.type":"exam"},
        { "scores.type":"homework"}
    ] }},
    { $group:{ _id:{ 'student':"$student_id", 'class':"$class_id" }, 'avg_score':{ $avg:"$scores.score" } } },
    { $group:{ _id:"$_id.class", 'points':{ $avg:'$avg_score' } } },
    { $sort:{ points:1 } }
])
