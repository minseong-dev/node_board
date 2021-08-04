var express = require('express');
var router = express.Router();

const boardController = require('../controllers/boardController')

/* 목록 */
router.get('/', boardController.boardList);

/* 상세보기 */
router.get('/detail/:board_uid', boardController.boardDetail);

/* 추가 */
router.post('/', boardController.boardAdd);

/* 수정 */
router.patch('/:board_uid', boardController.boardUpdate);

/* 삭제 */
router.delete('/:board_uid', boardController.boardDelete);

module.exports = router;