const tellNickName=(name)=>{
    name=name?.toLowerCase();
    if(name==='sourav'){
        return 'Dada you are welcome!'
    }
    else if(name==='nitin'){
        return 'Welcome bokchod🥳'
    }
    else {
        return  `Hello ${name}! you are not our member, thanks for instaling this package🙏 `
    }
}
module.exports={
    tellNickName
}

