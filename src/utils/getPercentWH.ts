const getPercentWH=(percent:number=1)=>
    ( {
        W:percent*(window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth),
        H:percent*(window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight),
    })

export default getPercentWH