


module.exports.makeRespone = (code, data) => {
	data = typeof data ==="boolean" ? {isSusc:data} : data;
	return {
		code:code,
		data:data
	}
}