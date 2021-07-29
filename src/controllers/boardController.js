const boardService = require('../services/boardService')

exports.boardList = async (req, res) => {
    
    try{
        let list = await boardService.boardList()
        console.log(list)
        return res.status(200).json(list)
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.boardDetail = async (req, res) => {
    
    let { board_uid } = req.params
    
    try{
        let detail = await boardService.boardDetail(board_uid)
        return res.status(200).json(detail)
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.boardAdd = async (req, res) => {
    
    let { board_title, board_content, board_writer } = req.params

    try{
        await boardService.boardAdd(board_title, board_content, board_writer)
        return res.status(200).send('success add')
    }
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.boardUpdate = async (req, res) => {
    
    let { board_title, board_content, board_writer, board_uid } = req.params

    try{
        await boardService.boardUpdate(board_title, board_content, board_writer, board_uid)
        return res.status(200).send('success update')
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.boardDelete = async (req, res) => {
    
    let { board_uid } = req.params
    
    try{
        await boardService.boardDelete(board_uid)
        return res.status(200).send('success delete')
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}