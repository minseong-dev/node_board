const db = require('../../middleware/db')
const boardQuery = require('../queries/boardQuery')

exports.boardList = async () => {
    
    try{
        let list = await db.query(boardQuery.boardList)
        return list[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.boardDetail = async (board_uid) => {
    
    try{
        let detail = await db.query(boardQuery.boardDetail, [board_uid])
        return detail[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.boardAdd = async (board_title, board_content, board_writer) => {
    
    try{
        let add = await db.query(boardQuery.boardAdd, [board_title, board_content, board_writer])
        return add[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.boardUpdate = async (board_title, board_content, board_writer, board_uid) => {
    
    try{
        let update = await db.query(boardQuery.boardUpdate, [board_title, board_content, board_writer, board_uid])
        return update[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.boardDelete = async (board_uid) => {
    
    try{
        let del = await db.query(boardQuery.boardDelete, [board_uid])
        return del[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}