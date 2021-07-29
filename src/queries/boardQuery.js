exports.boardList = 'select board_uid, board_title from board'
exports.boardDetail = 'select * from board where board_uid = ?'
exports.boardAdd = 'insert into board(board_title, board_content, board_writer) values(?, ?, ?)'
exports.boardUpdate = 'update board set board_title=?, board_content=?, board_writer=? where board_uid=?'
exports.boardDelete = 'delete from board where board_uid=?'