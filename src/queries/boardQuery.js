exports.selectAllPosts = 'select post_uid, post_title, post_writer from posts'
exports.selectPostDetail = 'select * from posts where post_uid = ?'
exports.writePost = 'insert into posts(post_title, post_content, post_writer) values(?, ?, ?)'
exports.modifyPost = 'update posts set post_title=?, post_content=?, post_writer=? where post_uid=?'
exports.deletePost = 'delete from posts where post_uid=?'