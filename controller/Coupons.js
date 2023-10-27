let coupons = [{
    name: "Diwali Offer",
    startDate: "2023-11-23",
    endDate: "2023-11-24",
    discount: 12,
    status: true,
  },
  {
    name: "Pongal Offer",
    startDate: "2024-01-26",
    endDate: "2024-01-30",
    discount: 10,
    status: true,
  }];

const getAllCoupons = (req,res)=>{
    res.status(200).send({
        message:"Data Fetched Successfully",
        count:coupons.length,
        coupons
    })
}


const getCouponById = (req,res)=>{
    let id = Number(req.params.id)
    if(id !== NaN && id<coupons.length){
        res.status(200).send({
            message:'Data Fetched Successful',
            coupon:coupons[id]
        })
    }
    else{
        res.status(400).send({
            message:'Invalid ID'
        })
    }
}


const createCoupon = (req,res)=>{
    let data = Number(req.params.id)
    let filteredData = coupons.filter((e)=>e.name===data.name)
    if(filteredData.length===0){
        coupons.push(data)
        res.status(201).send({
            message:'Coupon Created Successfull',
        })
    }
    else{
        res.status(400).send({
            message:'Coupon Already Exists'
        })
    }
}


const editCoupon = (req,res)=>{
    let id = Number(req.params.id)
    if(id!==NaN && id<coupons.length){
        coupons.splice(id,1,req.body)
        res.status(201).send({
            message:'Coupon Edited Successfully'
        })
    }
    else{
        res.status(400).send({
            message:'Invalid id'
        })
    }
}


const deleteCoupon = (req,res)=>{
    let id = req.params.id
    if(id!==NaN && id<coupons.length){
        coupons.splice(id,1)
        res.status(200).send({
            message:'Coupon Deleted Successfully'
        })
    }
    else{
        res.status(400).send({
            message:'Invalid ID'
        })
    }
}


// export default {

module.exports = {
    getAllCoupons,
    getCouponById,
    createCoupon,
    editCoupon,
    deleteCoupon
}