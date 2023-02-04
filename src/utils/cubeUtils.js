exports.generateDifficultyLevel = function (currentLevel){

    const difficultyLevels = [
        {key: 1, label: 'Very Easy', isSelected: false},
        {key: 2, label: 'Easy', isSelected: false},
        {key: 3, label: 'Medium (Standard 3x3)', isSelected: false},
        {key: 4, label: 'Intermediate', isSelected: false},
        {key: 5, label: 'Expert', isSelected: false},
        {key: 6, label: 'Hardcore', isSelected: false},
    ]
    const result = difficultyLevels.map(x=>x.key === currentLevel ? {...x, isSelected : true}: x);
    return result;
}

exports.isOwner = (user, cube)=>{

    return user._id == cube._id;
}