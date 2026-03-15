// PROMISE METHOD FOR WRAPPER
const asyncHandler = (requestHandler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}


// below down is the higher order function which takes a function as a parameter
// TRY CATCH METHOD
// const asyncHandler = (fn) => async (req, res, next) =>{
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucess: false,
//             message: error.message
//         })
//     }
// }