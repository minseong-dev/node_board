const boardService = require('../services/boardService')

exports.boardList = async (req, res, next) => {
    
    try{
        let list = await boardService.boardList()
        return res.status(200).json(list)
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.boardDetail = async (req, res, next) => {
    
    let { boardId } = req.params
    
    try{
        let detail = await boardService.boardDetail(boardId)
        return res.status(200).json(detail)
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.boardAdd = async (req, res, next) => {
    
    try{
        let add = await boardService.boardadd()
        return res.status(200).send('success add')
    }
    
    catch (err) {
        return res.status(500).json(err)
    }

}

exports.boardUpdate = async (req, res, next) => {
    
    let { boardId } = req.params

    try{
        let update = await boardService.boardUpdate(boardId)
        return res.status(200).send('success update')
    } 
    
    catch (err) {
        return res.status(500).json(err)
    }

}

exports.boardDelete = async (req, res, next) => {
    let { boardId } = req.params
    try{
        let del = await boardService.boardDelete(boardId)
        return res.status(200).send('success delete')
    } catch (err) {
        return res.status(500).json(err)
    }
}