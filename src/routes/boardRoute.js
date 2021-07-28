var express = require('express');
var router = express.Router();

const boardController = require('../controllers/boardController')
const board = new boardController()

/* 목록 */
router.get('/', board.boardList);

/* 상세보기 */
router.get('/:boardId/detail', board.boardDetail);

/* 추가 */
router.post('/', board.boardAdd);

/* 수정 */
router.patch('/:boardId', board.boardUpdate);

/* 삭제 */
router.delete('/:boardId', board.boardDelete);

module.exports = router;